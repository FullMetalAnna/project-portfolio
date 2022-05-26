import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>      {/* to='/' to homepage */}
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color= '#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/About">
                <FontAwesomeIcon icon={faUser} color= '#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Contact">
                <FontAwesomeIcon icon={faEnvelope} color= '#4d4d4w' />
            </NavLink>
        </nav>

<ul>
     <li>

         <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ana-bo%C5%A1njakovi%C4%87-web-dev/'>
             <FontAwesomeIcon icon={faLinkedin} color = '#4d4d4e' />
         </a>
     </li>
     <li>

<a target='_blank' rel='noreferrer' href='https://github.com/FullMetalAnna'>
    <FontAwesomeIcon icon={faGithub} color = '#4d4d4e' />
</a>
</li>
<li>

<a target='_blank' rel='noreferrer' href='skype:live:red_woman_'>
    <FontAwesomeIcon icon={faSkype} color = '#4d4d4e' />
</a>
</li>

        </ul>
    </div>
)

export default Sidebar
