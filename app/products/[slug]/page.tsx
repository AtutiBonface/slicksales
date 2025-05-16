'use client'
import { useState } from 'react';
import Image from 'next/image';
import '../products.css';
import { 
  FileText, 
  Calendar, 
  CheckCircle2, 
  ClipboardEdit,
  MessageSquare,
  Lock,
  Check
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Simplify Your <span>Board Management</span></h1>
              <p>Access secure meeting packs, approvals, and evaluations from anywhere.
                 Streamline your board operations with Boardify.</p>
              <div className="hero-buttons">
                <button className="hero-button primary">Free Demo</button>
                <button className="hero-button secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <Image 
                src="/bg-boardify.png"
                alt="Boardify Platform Screenshot"
                width={600}
                height={400}
                className="product-screenshot"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Our Features</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Discover how Boardify transforms your board management experience
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FileText size={24} />
              </div>
              <h3 className="feature-title">Secure Document Access</h3>
              <p className="feature-description">
                Provide secure access to meeting packs and resources for board members.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Calendar size={24} />
              </div>
              <h3 className="feature-title">Meeting Management</h3>
              <p className="feature-description">
                Organize and schedule board meetings with comprehensive planning.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="feature-title">Approval Process</h3>
              <p className="feature-description">
                Streamline approval workflows with digital signatures and audit trails.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <ClipboardEdit size={24} />
              </div>
              <h3 className="feature-title">Board Evaluations</h3>
              <p className="feature-description">
                Conduct comprehensive performance assessments for board members.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">Poll-Driven Discussions</h3>
              <p className="feature-description">
                Facilitate interactive discussions through real-time polling systems.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Lock size={24} />
              </div>
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">
                Protect sensitive information with enterprise-grade security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="product-showcase">
        <div className="container">
          <div className="login-showcase">
            <Image 
              src="/boardify-login.png"
              alt="Boardify Login Screen"
              width={900}
              height={500}
              className="login-image"
              quality={90}
              sizes="(max-width: 768px) 100vw, 90vw"
            />
            <div className="overlay-text">
              <h3>Multi-Platform Accessibility</h3>
              <p>Access Boardify from any device using our web and mobile applications</p>
              <div className="platform-badges">
                <span className="platform-badge">Web</span>
                <span className="platform-badge">iOS</span>
                <span className="platform-badge">Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="tabs-wrapper">
        <div className="container">
          <div className="section-header">
            <h2>Advantages of Boardify</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Discover how Boardify transforms your board operations
            </p>
          </div>
          
          <div className="tabs-container">
            <button 
              className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              Meeting Preparation
            </button>
            <button 
              className={`tab-button ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              Document Management
            </button>
            <button 
              className={`tab-button ${activeTab === 'integration' ? 'active' : ''}`}
              onClick={() => setActiveTab('integration')}
            >
              Integration
            </button>
            <button 
              className={`tab-button ${activeTab === 'collaboration' ? 'active' : ''}`}
              onClick={() => setActiveTab('collaboration')}
            >
              Collaboration
            </button>
            <button 
              className={`tab-button ${activeTab === 'audit' ? 'active' : ''}`}
              onClick={() => setActiveTab('audit')}
            >
              Audit Trails
            </button>
            <button 
              className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'about' && (
              <div className="tab-panel">
                <h3>Improved Meeting Preparation</h3>
                <p>Boardify meeting software allows for better preparation by providing a centralized
                  platform where board agendas, documents, and other materials are easily
                  accessible. This feature is crucial because it ensures all board members are
                  well-prepared and informed ahead of the meeting, leading to more productive
                  discussions and decision-making.</p>
                <div className="advantage-benefits">
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Centralized access to all meeting materials</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Better informed board members</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>More productive discussions</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'documents' && (
              <div className="tab-panel">
                <h3>Streamlined Document Management</h3>
                <p>In today's fast-paced world, convenience is key. With Boardify meeting software,
                  you no longer have to shuffle through papers to review historical data and notes.
                  The software typically includes document management features that allow for
                  secure storage, easy retrieval, and controlled access to board books and other
                  important meeting documents.</p>
                <div className="advantage-benefits">
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Secure document storage and retrieval</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Controlled access to sensitive materials</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Easy access to historical data</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'integration' && (
              <div className="tab-panel">
                <h3>Integration with Other Business Tools</h3>
                <p>With Boardify, you can easily integrate with other business tools, such as calendar
                  apps, email systems, and CRM platforms. This integration facilitates a smoother
                  workflow by enabling seamless data sharing and communication across different
                  departments and tools. It also ensures all relevant information is up-to-date and
                  accessible, fostering a more connected and informed board.</p>
                <div className="advantage-benefits">
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Seamless integration with calendar apps</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Connection with email systems</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>CRM platform compatibility</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'collaboration' && (
              <div className="tab-panel">
                <h3>Real-Time Collaboration</h3>
                <p>Boardify incorporates real-time collaboration features, such as instant messaging,
                  annotations, voting, and collaborative document editing, enabling board members
                  to engage actively before, during, and after meetings. These features are important
                  because they promote a more interactive and inclusive meeting environment, where
                  all voices can be heard and decisions can be made promptly and transparently.</p>
                <div className="advantage-benefits">
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Instant messaging between board members</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Collaborative document editing</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Real-time voting systems</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'audit' && (
              <div className="tab-panel">
                <h3>Audit Trails and Accountability</h3>
                <p>Accountability ensures the board of directors adheres to ethical standards,
                  maintaining trust with stakeholders. Utilizing virtual board meeting software creates
                  an audit trail, promoting transparency in the decision-making process.
                  Audit trails provide a detailed record of all actions, votes, and changes made during
                  meetings, which is essential for compliance and governance reviews. In addition,
                  they provide insight into all changes made to a board packet. By having a clear,
                  accessible log of all activities, organizations can easily demonstrate their
                  commitment to integrity and due diligence.</p>
                <div className="advantage-benefits">
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Detailed record of all actions and votes</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Compliance with governance requirements</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Transparent decision-making processes</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'security' && (
              <div className="tab-panel">
                <h3>Robust Security</h3>
                <p>Regardless of the software you use, it is more important than ever to safeguard
                  sensitive information and protect your organization against potential breaches that
                  could compromise users' data. Prioritizing data integrity and confidentiality helps
                  maintain the trust of stakeholders, employees, and board members and ensures
                  adherence to regulatory requirements. The right vendor offers an enterprise grade
                  security architecture to keep your data secure.</p>
                <div className="advantage-benefits">
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Enterprise-grade security architecture</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Data integrity and confidentiality</span>
                  </div>
                  <div className="benefit-item">
                    <Check size={18} className="check-icon" />
                    <span>Regulatory compliance</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Multi-tenant Access Section */}
      <section className="access-section">
        <div className="container">
          <div className="section-header">
            <h2>Multi-Tenant Platform</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Boardify uses a multi-tenancy model similar to AWS or Microsoft Azure
            </p>
          </div>
          
          <div className="access-content">
            <div className="access-image">
              <Image 
                src="/access-code.png"
                alt="Boardify Access Code System"
                width={400}
                height={300}
                className="access-screenshot"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="access-details">
              <h3>Secure Access for Every Organization</h3>
              <p>Each customer is assigned a unique Access Code during setup. Users log in with a combination of:</p>
              <ul className="access-list">
                <li>Organization Access Code</li>
                <li>Personal Username</li>
                <li>Secure Password</li>
              </ul>
              <p>Compatible with all modern web browsers and mobile devices for seamless access anywhere.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;