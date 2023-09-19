import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import PostCreation from './pages/PostCreation';
import ListData from './pages/ListData';

import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Landing />} />
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
