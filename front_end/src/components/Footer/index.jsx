import { Link } from 'react-router-dom'

import {
    FaPhoneVolume,
    FaEnvelope,
    FaInstagram,
    FaFacebook,
    FaMapMarkerAlt
} from 'react-icons/fa'

import './footer.scss'

import logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <footer id="Contact">
            <div className="footer_wrapper">
                <div className="logo">
                    <div className="logo_details">
                        <img src={logo} alt="" />
                        <h4>Lake Elementaita Manor <br />Hotel</h4>
                    </div>
                </div>

                <div className="socials">
                    <h4>Contacts</h4>
                    <ul>
                        <li><span><FaPhoneVolume className="icon-tel" /></span>+254 722 737 000</li>
                        <li><span><FaEnvelope /></span>lakeelementaitamanor@gmail.com</li>
                        <li><a href="https://goo.gl/maps/e74tJKvrDQRzvUcD9" target="_blank"><span><FaMapMarkerAlt /></span>Location on the Map</a></li>
                    </ul>
                    <ul className="social_media_links">
                        <li><a href="https://www.instagram.com/lake_elementaita_manor/" target="_blank"><span><FaInstagram className="icon-instagram" /></span></a></li>
                        <li><a href="https://www.facebook.com/Lake-Elementaita-Manor-111061331956318" target="_blank"><span><FaFacebook className="icon-facebook" /></span></a></li>
                    </ul>
                </div>

                <div className="useful_links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#About">About Us</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Gallery">Gallery</a></li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                <p>Lake Elementaita Manor. All right reserved &copy; 2023</p>
            </div>
        </footer>
    )
}
