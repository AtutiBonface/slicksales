'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu } from 'lucide-react'

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar" style={{ height: '70px' }}>
          <div className="logo">
            <Image 
              src="/logo-no-background.png"
              alt="Slicksales Logo"
              width={180}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <div ref={dropdownRef}>
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <a href="#" onClick={(e) => toggleDropdown(0, e)} className="nav-link">
                  <span>Products</span>
                </a>
                <div className={`mega-dropdown ${activeDropdown === 0 ? 'show' : ''}`}>
                  <div className="mega-menu-grid">
                    <div className="product-item">
                      <div className="product-image">
                        <Image 
                          src="/bg-ai-sacco.png" 
                          alt="AI-driven sacco system"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="product-content">
                        <h3>AI Sacco</h3>
                        <h4>AI-driven sacco software</h4>
                        <p>
                          This is our online web-based sacco system designed to power sacco back office  operations. This product manages Members, Loans, Shares & Dividends, Deposit processing, GL & Accounts, Bank Reconciliations, HR & Payroll, Loan & Deposit Products Setup, Reports and other back office operations.  It is also available on mobile (Micro Agent) to facilitate SACCO carry out  their tasks remotely.
                        </p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-image">
                        <Image 
                          src="/bg-vend-sl.png" 
                          alt="Virtual Digital Store"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="product-content">
                        <h3>VendSL</h3>
                        <h4>
                          Virtual Digital Store
                        </h4>
                        <p>
                          AI-based Digital Store, designed to streamline eCommerce operations and enhance customer engagement. This innovative platform leverages advanced artificial intelligence to personalize product recommendations, optimize inventory management, and provide real-time analytics, ensuring that your business stays ahead of the competition                        </p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-image">
                        <Image 
                          src="/bg-ci-property.png" 
                          alt="Property Adminstration Software"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="product-content">
                        <h3>CI Property</h3>
                        <h4>
                          Property Adminstration
                        </h4>
                        <p style={{ fontStretch: 'condensed' }}>
                          CI Property is a comprehensive property management system designed to streamline the management of residential and commercial properties. This innovative platform offers a range of features, including tenant management, tenant vetting, lease tracking, rent collections, arrears tracking, automatic payment reconcialiation,maintenance requests, and financial reporting, all in one user-friendly interface.
                        </p>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-image">
                        <Image 
                          src="/bg-boardify.png" 
                          alt="Board Governance Software"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="product-content">
                        <h3>Boardify</h3>
                        <h4>
                          Board Governance 
                        </h4>
                        <p>
                          Boardify elevates your organization's governance with our comprehensive Board Management Solution, designed to streamline Board Governance, Meetings, and Strategic Planning. Ensure compliance with company regulations while facilitating effective Board Evaluations and Elections. Our intuitive calendar feature keeps your board members informed and engaged, promoting transparency and accountability. Invest in a tool that empowers your board to operate efficiently and strategically, driving your organization towards success
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" onClick={(e) => toggleDropdown(1, e)} className="nav-link">
                  <span>Company</span>
                </a>
                <div className={`mega-dropdown ${activeDropdown === 1 ? 'show' : ''}`}>
                  <div className="mega-menu-content">
                    <ul className="dropdown-menu-items">
                      <li><a href="#">About Company</a></li>
                      <li><a href="#">Leadership Team</a></li>
                      <li><a href="#">Our Clientele</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" onClick={(e) => toggleDropdown(2, e)} className="nav-link">
                  <span>Resources</span>
                </a>
                <div className={`mega-dropdown ${activeDropdown === 2 ? 'show' : ''}`}>
                  <div className="mega-menu-content">
                    <ul className="dropdown-menu-items">
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">API</a></li>
                      <li><a href="#">Tutorials</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" onClick={(e) => toggleDropdown(3, e)} className="nav-link">
                  <span>Contacts</span>
                </a>
                <div className={`mega-dropdown ${activeDropdown === 3 ? 'show' : ''}`}>
                  <div className="mega-menu-content">
                    <ul className="dropdown-menu-items">
                      <li><a href="#">Direct Chat</a></li>
                      <li><a href="mailto:info@slicksales.co.ke">info@slicksales.co.ke</a></li>
                      <li><a href="tel:+254721564198">+254 721 564 198</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <button 
            className="hamburger" 
            onClick={toggleMobileMenu}
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default TopBar