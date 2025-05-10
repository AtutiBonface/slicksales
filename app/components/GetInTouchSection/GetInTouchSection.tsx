import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import Wave from '../Wave/Wave'

const GetInTouchSection = () => {
  return (
    <section className="get-in-touch" style={{ backgroundImage: 'url(/wave.png)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Connect with Us</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info-container">
            <div className="contact-info">
              <p className="contact-desc">
                Ready to transform your business? Reach out to us and let's discuss how we can help you achieve your goals.
              </p>              
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={20} />
                  <p>Sakina Place, 2nd floor, Church Road, Off Waiyaki way, Nairobi, Kenya</p>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <p>+254 721 564 198</p>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <p>sales@slicksales.co.ke</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouchSection
