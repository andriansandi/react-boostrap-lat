import { Routes, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// UI
import Navigation from './Navigation';

// Pages
import Home from './components/Home'
import About from './About'
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
