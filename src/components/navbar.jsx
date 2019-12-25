
import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
        <div>
         <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Movies <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" target="_blank" to="/Reviews">Reviews</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" target="_blank" to="/signup">SignUp</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled"  to="/Signin">SignIn</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" target="_blank" to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" target="_blank" to="/Contact">Contact</Link>
          </li>
        </ul>
         <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
        </nav>
      </div>

        
       
    
     );
}
 
export default Navbar;
