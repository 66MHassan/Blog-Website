import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import bootstrap from 'bootstrap'
import './App.css';
import PostCreation from './components/PostCreation';
import ListData from './components/ListData';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PostCreation" element={<PostCreation />} />
      <Route path="/ListData" element={<ListData />} />
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
