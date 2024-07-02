import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './сard.tsx'
import Navbar from './Navbar';

const Home = () => <div>Home Page </div>;
const Exercise = () => <div>
    Card
</div>;

function App() {
  return (
      <Router>
          <div>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/exercise" element={<Card />}  />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
