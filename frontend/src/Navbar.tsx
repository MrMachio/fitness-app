import {useState, useEffect, useRef, ChangeEvent, MouseEvent} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Modal from './Modal';
import './Navbar.css';

interface NavbarProps {
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
  userInfo: { username: string; email: string; image: string | null };
  setUserInfo: (userInfo: { username: string; email: string; image: string | null }) => void;
}

const Navbar: React.FC<NavbarProps> = ({isSignedIn, setIsSignedIn, userInfo, setUserInfo}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [profilePic, setProfilePic] = useState<string>('https://cdn.mywebicons.ru/i/webp/707ddf4b9a2ffcdd6c32351a21a4750c.webp');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleShow = () => {
    setShowModal(true);
    setShowDropdown(false);
  };

  const handleClose = () => setShowModal(false);

  const toggleDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowDropdown(prevShowDropdown => !prevShowDropdown);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setShowDropdown(false);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64String = result.replace("data:", "").replace(/^.+,/, "");
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleProfilePicChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const base64 = await convertToBase64(file);
        setUserInfo({...userInfo, image: base64});
      } catch (error) {
        console.error("Error converting file to base64: ", error);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside as EventListener);
    document.addEventListener('touchstart', handleClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, []);

  useEffect(() => {
    setShowDropdown(false);
  }, [location]);

  const decodeBase64Image = (base64: string | null): string => {
    return base64 ? `data:image/jpeg;base64,${base64}` : 'https://cdn.mywebicons.ru/i/webp/707ddf4b9a2ffcdd6c32351a21a4750c.webp';
  };

  return (
    <div style={{backgroundColor: '#282c34'}}>
      <div className="main-wrapper">
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/workouts">Workouts</Link>
            <Link to="/exercises">Exercises</Link>
          </div>
          <div className="navbar-right">
            {isSignedIn ? (
              <div className="account">
                <button className="account-button" onClick={toggleDropdown}>
                  <div hidden>{userInfo.image}</div>
                  <img src={decodeBase64Image(userInfo.image)} alt="Profile" className="profile-pic"/>
                </button>
                {showDropdown && (
                  <div className="dropdown-menu" ref={dropdownRef}>
                    <div className="profile-header">
                      <img src={decodeBase64Image(userInfo.image)} alt="Profile" className="profile-pic"/>
                      <label className="change-pic-icon">
                        +
                        <input type="file" accept="image/*" onChange={handleProfilePicChange}/>
                      </label>
                    </div>
                    <div className="profile-details">
                      <p>Username: {userInfo.username}</p>
                      <p>Email: {userInfo.email}</p>
                      <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button className="sign-in-button" onClick={handleShow}>Sign In</button>
            )}
          </div>
        </nav>
        <Modal show={showModal} handleClose={handleClose} setIsSignedIn={setIsSignedIn} setUserInfo={setUserInfo}/>
      </div>
    </div>
  );
};

export default Navbar;
