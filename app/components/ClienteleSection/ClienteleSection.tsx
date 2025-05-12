import Image from 'next/image';
import React from 'react';

const clientLogoList = [
  { id: 1, image: 'musacco.png' },
  { id: 2, image: 'skyhousing.jpg' },
  { id: 3, image: 'quicklink.jpg' },
  { id: 4, image: 'karumo.png' },
  { id: 5, image: 'spectrumnetwork.png' },
  { id: 6, image: 'mustsacco.png' },
  { id: 7, image: 'swiftcapital.png' },
  { id: 8, image: 'mazingira.png' },
  { id: 9, image: 'coop.jpg' },
  { id: 10, image: 'family-bank.jpg' },
  { id: 11, image: 'equity.png' },
  { id: 12, image: 'kcb.jpg' },
  { id: 13, image: 'nhc.jpg' },
  { id: 14, image: 'credit-bank.jpg' },
  { id: 15, image: 'mpesa.png' },
  { id: 16, image: 'paypal.jpg' }
]; 

const ClienteleSection = () => {
  return (
    <section id='clientele' className="clientele">
      <div className="container">
        <div className="section-title">
          <h2>Our Clients & Partners</h2>
        </div>
        <div className="slider-container">
          <div className="cards-holder">
            {
              clientLogoList.map((client, index) => (
                <div key={index} className="client-card">
                  <Image 
                    src={`/client-logo/${client.image}`} 
                    alt={client.image.split('.')[0]} 
                    width={150}
                    height={100}
                    quality={100}
                    priority={index < 2}
                    className="client-image"
                  />
                </div>
              ))
            }
            {/* Duplicate logos for infinite scroll effect */}
            {clientLogoList.map((client, index) => (
                <div key={`duplicate-${index}`} className="client-card">
                  <Image 
                    src={`/client-logo/${client.image}`} 
                    alt={client.image.split('.')[0]} 
                    width={150}
                    height={100}
                    quality={100}
                    className="client-image"
                  />
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClienteleSection
