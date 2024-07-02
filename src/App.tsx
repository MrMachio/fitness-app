import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './сard.tsx'
import Navbar from './Navbar';
import {Exerceices} from "./features/exercises";

const Home = () => <div>Home Page </div>;


function App() {
  return (
      <Router>
          <div>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/exercise" element={<Exerceices />}  />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
