import React from 'react'

const Navbar = () => {
  const navItems = [
    { label: 'About', target: '#about', active: false },
    { label: 'Projects', target: '#projects', active: false },
    { label: 'Education', target: '#education', active: false },
    { label: 'Skills', target: '#skills', active: false }
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <nav className="navbar">
        <div className="nav-logo">
            <a href="#home" style={{display:'flex', alignItems: 'center',gap:'12px'}}>
              <h1>Suryaprakashgowda H S</h1>
            </a>
        </div>
        <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} className={item.active ? 'active' : ''}>
                <a href={item.target}>{item.label}</a>
              </li>
            ))}
        </ul>
        <div className="nav-actions">
            <button className="btn-login" onClick={handleContactClick}>Contact</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar