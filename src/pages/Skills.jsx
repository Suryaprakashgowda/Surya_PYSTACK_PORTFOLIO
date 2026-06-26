import React, { useState } from 'react'
import SkillCard from '../components/SkillCard.jsx'

import pythonLogo from '../assets/python.png'
import htmlLogo from '../assets/html.webp'
import cssLogo from '../assets/css.jpg'
import jsLogo from '../assets/javascript.webp'
import mysqlLogo from '../assets/mysql.png'
import reactLogo from '../assets/react.png'
import djangoLogo from '../assets/django.webp'
import gitLogo from '../assets/github.png'
import vscodeLogo from '../assets/vscode.jpg'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillsData = [
    { name: 'Python', logo: pythonLogo, category: 'languages' },
    { name: 'HTML', logo: htmlLogo, category: 'languages' },
    { name: 'CSS', logo: cssLogo, category: 'languages' },
    { name: 'JavaScript', logo: jsLogo, category: 'languages' },
    { name: 'MySQL', logo: mysqlLogo, category: 'languages' },
    { name: 'ReactJS', logo: reactLogo, category: 'frameworks' },
    { name: 'Django', logo: djangoLogo, category: 'frameworks' },
    { name: 'Git', logo: gitLogo, category: 'tools' },
    { name: 'VS Code', logo: vscodeLogo, category: 'tools' }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory)

  return (
    <div id="skills" className="skills-section">
        <h1 className="section-title">My Skills</h1>

        <div className="filter-buttons">
            <button 
              className={activeCategory === 'all' ? 'btn-active' : ''} 
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={activeCategory === 'languages' ? 'btn-active' : ''} 
              onClick={() => setActiveCategory('languages')}
            >
              Programming Languages
            </button>
            <button 
              className={activeCategory === 'frameworks' ? 'btn-active' : ''} 
              onClick={() => setActiveCategory('frameworks')}
            >
              Frameworks
            </button>
            <button 
              className={activeCategory === 'tools' ? 'btn-active' : ''} 
              onClick={() => setActiveCategory('tools')}
            >
              Tools
            </button>
        </div>

        <div className="skills-container">
            {filteredSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default Skills