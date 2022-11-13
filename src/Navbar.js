import './App.scss'
import Home from './Home';
import Search from './Search';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import About from './About';
import Contact from './Contact';


import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


function Navbar(){

  const animation = () =>{
    const conatiner = document.querySelector('.container')
    conatiner.classList.toggle('active');
    }
      
    return <Router>

      <div>
        <nav className='navbar'>
        <div className='menu'>
          <h3 className="logo"> Recipe<span> search</span></h3>
          <div className="burger" onClick={animation}>
            <div className='bar'>

            </div>
          </div>
        </div>

      </nav>
      <div className="links">
      <ul>
        <li>
          <Link to ='/Home' className="link __Home" > Home</Link>
        </li>
        <li>
          <Link to ='/Search' className="link __Services"> Search</Link>
        </li>
        <li>
          <Link to ='/Portfolio' className="link __Portfolio"> Portfolio</Link>
        </li>
        <li>
          <Link to ='/Testimonials' className="link __Testimonials"> Testimonials</Link>
        </li>
        <li>
          <Link to ='/About' className="link __About"> About</Link>
        </li>
        <li>
          <Link to ='/Contact' className="link __Contact"> Contact</Link>
        </li>
      </ul>
    </div>
    </div>
      <Routes>
          <Route path = '/Home' element={<Home/>}/>
          <Route path = '/Search' element={<Search/>}/>
          <Route path = '/Portfolio'  element={<Portfolio/>}/>
          <Route path = '/Testimonials'  element={<Testimonials/>} />
          <Route path = '/About'  element={<About/>} />
          <Route path = '/Contact'  element={<Contact/>} />
      </Routes>
    </Router>
}
export default Navbar;