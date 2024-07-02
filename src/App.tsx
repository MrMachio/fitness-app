// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import {Exercises} from "./features/exercises/exercises.tsx"

const Home = () => <div>Home Page</div>;

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise" element={<Exercises />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
