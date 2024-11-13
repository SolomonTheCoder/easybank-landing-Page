import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Navbar.css'
import NavMenu from '../assets/icons/icon-hamburger.svg'
import Logo from '../assets/icons/logo.svg'


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        let Menu = document.querySelector('.Menu')
        if (!menu) {
            Menu.style.display = 'block'
            setMenu(true)
        } else {
            Menu.style.display = 'none'
            setMenu(false)
        }
    }
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
                <div className="NavMenu">
                    <img onClick={handleMenu} src={NavMenu} alt="" />
                </div>
                <div className="Menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar