import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div className="skills-card">
        <img src={skill.logo} alt={`${skill.name} logo`} />
        <p className="skill-name">{skill.name}</p>
    </div>
  )
}

export default SkillCard