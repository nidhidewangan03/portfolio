import "./sidebar.scss"
import logo from '../../assests/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faBriefcase , faStar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className='logo' to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact = "true" activeclassName = "active" to = '/'>
          <FontAwesomeIcon icon={faHome} color='#e6e6e6' />
        </NavLink>

        <NavLink exact = "true" activeclassName = "skill-link" to = '/skill'>
          <FontAwesomeIcon icon={faStar} color='#e6e6e6' />
        </NavLink>

        <NavLink exact = "true" activeclassName = "experience-link" to = '/experience'>
          <FontAwesomeIcon icon={faBriefcase} color='#e6e6e6' />
        </NavLink>

        <NavLink exact = "true" activeclassName = "contact-link" to = '/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#e6e6e6' />
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