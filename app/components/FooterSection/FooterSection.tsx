import React from 'react'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const FooterSection = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '13px' }}>
              Slicksales Limited is the leading provider of innovative business solutions, empowering 
              businesses across Africa with AI driven technology and customer-centric solutions.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s ease' }}>
                <Facebook size={20} />
              </a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s ease' }}>
                <Twitter size={20} />
              </a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s ease' }}>
                <Instagram size={20} />
              </a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s ease' }}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-row">
            <div className="footer-column">
              <h3>Products</h3>
              <ul className="footer-links">
                <li><a href="#">AiSacco</a></li>
                <li><a href="#">CiProperty</a></li>
                <li><a href="#">Boardify</a></li>
                <li><a href="#">VendSL</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#">About Company</a></li>
                <li><a href="#">Leadership Team</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Our Clientele</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="contact-info-item">
              <Mail size={18} />
              <p>sales@slicksales.co.ke</p>
            </div>
            <div className="contact-info-item">
              <Phone size={18} />
              <p>+254 721 564 198</p>
            </div>
          </div>
        </div>
        <div className="location-bottom">
          <p>Sakina Place, 2nd floor, Church Road, Off Waiyaki way, Nairobi, Kenya</p>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Slicksales Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection