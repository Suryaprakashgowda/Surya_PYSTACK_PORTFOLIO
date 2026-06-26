import React from 'react';
import linkedinLogo from '../assets/linked-in.webp'; 
import githubLogo from '../assets/github.png';
import leetcodeLogo from '../assets/leetcode.png'; 

const Footer = () => {
  const socialLinks = [
    { 
        name: 'LinkedIn', 
        profileUrl: 'https://www.linkedin.com/in/Suryaprakashgowda/', 
        logo: linkedinLogo 
    },
    { 
        name: 'GitHub', 
        profileUrl: 'https://github.com/Suryaprakashgowda/', 
        logo: githubLogo 
    },
    { 
        name: 'LeetCode', 
        profileUrl: 'https://leetcode.com/u/suryagowda_1/', 
        logo: leetcodeLogo 
    }
  ];

  const footerNav = [
    { label: 'Home', target: '#home' },
    { label: 'About', target: '#about' },
    { label: 'Projects', target: '#projects' },
    { label: 'Education', target: '#education' },
    { label: 'Skills', target: '#skills' },
    { label: 'Contact', target: '#contact' }
  ];

  return (
    <footer className="global-footer">
      <div className="footer-content">
        
        {/* Row 1: Centered Social Media Logos */}
        <div className="footer-socials">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-circle"
              title={`Visit my ${social.name}`}
            >
              <img src={social.logo} alt={`${social.name} logo`} />
            </a>
          ))}
        </div>

        {/* Row 2: Secondary Quick Links Navigation */}
        <ul className="footer-links">
          {footerNav.map((link, index) => (
            <li key={index}>
              <a href={link.target}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Row 3: Copyright Info */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Suryaprakashgowda H S. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;