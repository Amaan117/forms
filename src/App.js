import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home';

function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;