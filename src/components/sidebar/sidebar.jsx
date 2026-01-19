import "./sidebar.scss"
import logo from '../../assests/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faBriefcase , faStar , faUser} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className='logo' to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        {/* <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faHome} color="#e6e6e6" />
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? 'about-link' : '')}>
          <FontAwesomeIcon icon={faUser} color="#e6e6e6" />
        </NavLink>

        <NavLink to="/skill" className={({ isActive }) => (isActive ? 'skill-link' : '')}>
          <FontAwesomeIcon icon={faStar} color="#e6e6e6" />
        </NavLink>

        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'experience-link' : '')}>
          <FontAwesomeIcon icon={faBriefcase} color="#e6e6e6" />
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'contact-link' : '')}>
          <FontAwesomeIcon icon={faEnvelope} color="#e6e6e6" />
        </NavLink> */}
        
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faHome} color="#e6e6e6" />
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faUser} color="#e6e6e6" />
        </NavLink>
        <NavLink to="/skill" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faStar} color="#e6e6e6" />
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faBriefcase} color="#e6e6e6" />
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faEnvelope} color="#e6e6e6" />
        </NavLink>
      </nav>
      <ul>
          <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nidhidewangan03/">
                  <FontAwesomeIcon icon={faLinkedin} color="#e6e6e6" />
              </a>
          </li>
          <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/nidhidewangan03">
                    <FontAwesomeIcon icon={faGithub} color="#e6e6e6" />
                </a>
          </li>
          <li>
                <a target="_blank" rel="noreferrer" href="mailto:nidhidew2003@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} color="#e6e6e6" />
                </a>
          </li>

      </ul>
      
    </div>
  );
}

export default Sidebar;