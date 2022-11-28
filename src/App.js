import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { VscJersey } from 'react-icons/vsc';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import DetailKit from './pages/detailKit/DetailKit';
import Apparel from './pages/apparel/Apparel';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header>
        <div className="logo">Jerseypedia</div>
      </header>
      <main>
        {/* deklarasi route yang digunakan */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Search />} />
          <Route path="/detail-kit/:name" element={<DetailKit />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      {/* footer */}
      <footer>
        <div className="navigation">
          {/* deklarasi navigasi antar halaman */}
          <Link to="/" className="navigation-item">
            <AiOutlineHome className="navigation-icon" />
            <span>Home</span>
          </Link>
          <Link to="/explore" className="navigation-item">
            <MdOutlineExplore className="navigation-icon" />
            <span>Explore</span>
          </Link>
          <Link to="/apparel" className="navigation-item">
            <VscJersey className="navigation-icon" />
            <span> Apparel</span>
          </Link>
          <Link to="/about" className="navigation-item">
            <BsPeople className="navigation-icon" />
            <span>About</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
