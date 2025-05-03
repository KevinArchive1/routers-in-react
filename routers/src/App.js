import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/routers-in-react">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
