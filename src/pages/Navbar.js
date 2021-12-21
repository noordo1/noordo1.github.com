import '../App.css';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div className='navbar nav-left' align="left">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            </ul> 
        </div>
        <div className='navbar nav-right'>
            <ul>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul> 
        </div>
    </div>
  );
}

export default Navbar;
