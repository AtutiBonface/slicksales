import React from 'react';
import { Linkedin, Mail, X } from 'lucide-react'; // Changed Twitter to X
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Leiney Ogeto",
      role: "Managing Director",
      image: "/passports/leiney-passport.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:leiney@slicksales.co.ke"
      },
      bio: "A dedicated manager and co-founder with a passion for building startups. Known for strong leadership skills and a commitment to mentoring others, helping teams grow and succeed. Driven by innovation and a desire to make a positive impact."
    },
    {
      name: "Kimani Karanja",
      role: "Operations Director",
      image: "/passports/kimani.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:kimani@slicksales.co.ke"
      },
      bio: "I am Kimani Karanja, a marketing and operations professional with over 8 years of experience in the tech industry. I have a strong background in business development, sales, and customer success, and I am passionate about helping companies grow and succeed."	
    },
    {
      name: "John Mureithi",
      role: "Technology Director",
      image: "/passports/default.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:john@slicksales.co.ke"
      },
      bio: "I am John Mureithi, a seasoned software engineer with over 8 years of experience in the tech industry. I have a strong background in software development, system architecture, and project management, and I am passionate about building innovative solutions that solve real-world problems."

    }
  ];

  return (
    <section id='team' className="team">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Leadership</h2>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member" style={{ '--index': index } as React.CSSProperties}>
              <div className="member-img">
                <div className="member-social">
                  <a href={member.socials.linkedin} aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.socials.twitter} aria-label="X (formerly Twitter)">
                    <X size={18} />
                  </a>
                  <a href={member.socials.email} aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={280}
                  height={280}
                  quality={100}
                  priority={index < 2}
                  className="member-image"
                />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
