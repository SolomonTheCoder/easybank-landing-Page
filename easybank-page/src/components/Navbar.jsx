import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import Logo from '../assets/icons/logo.svg'


const Navbar = () => {
    return (
        <>
            <nav>
                <img src={Logo} alt="logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <button>Request Invite</button>
            </nav>
        </>
    )
}

export default Navbar