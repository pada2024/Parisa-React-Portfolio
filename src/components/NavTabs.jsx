import { Link, useLocation } from 'react-router-dom';


function NavTabs() {
  const currentPage = useLocation().pathname;
  
  return  (<div class="navbar navbar-expand-lg navbar-light bg-light">
    <p>Parisa Daily</p>
    <ul className="nav nav-tabs ml-auto">
      
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Skills"
          className={currentPage === '/Skills' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul> </div>
  );
}

export default NavTabs;
