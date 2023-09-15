import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import PostCreation from './pages/PostCreation';
import ListData from './pages/ListData';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PostCreation" element={<PostCreation />} />
      <Route path="/ListData" element={<ListData />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
