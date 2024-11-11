import Logo from '../assets/icons/white logo.svg'
import facebook from '../assets/icons/icon-facebook.svg'
import youtube from '../assets/icons/icon-youtube.svg'
import twitter from '../assets/icons/icon-twitter.svg'
import pinterest from '../assets/icons/icon-pinterest.svg'
import instagram from '../assets/icons/icon-instagram.svg'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='Footer1'>
          <div className='Footer-logo'>
            <img src={Logo} alt="" />
            <ul>
              <li><img src={facebook} alt="" /></li>
              <li><img src={youtube} alt="" /></li>
              <li><img src={twitter} alt="" /></li>
              <li><img src={pinterest} alt="" /></li>
              <li><img src={instagram} alt="" /></li>
            </ul>
          </div>
          <div className='Footer-links'>
            <div className='Link'>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
              <ul>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Footer2'>
          <button>Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer