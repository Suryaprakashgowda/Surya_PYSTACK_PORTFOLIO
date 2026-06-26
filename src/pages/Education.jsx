import React from 'react'

const Education = () => {
  // Array containing all education milestones for easy future updates
  const educationHistory = [
    {
      level: 'B.E. (Bachelor of Engineering)',
      institution: 'Government Engineering Collge,Challakere',
      specialization: 'Artificial Intelligence and Machine Learning', 
      duration: '2022 - 2026',
      score: '8.7' 
    },
    {
      level: 'PUC (Pre-University Course)',
      institution: 'Gangothri PU College,Srinivasapur', 
      specialization: 'PCMB',        
      duration: '2020 - 2022',
      score: '80.00%'                        
    },
    {
      level: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'SFS High School',     
      specialization: 'General Education',
      duration: '2019 - 2020',
      score: '77.8%'                        
    }
  ];

  return (
    <div className="education-container">
      <h1 className="section-title">Education</h1>
      
      {educationHistory.map((edu, index) => (
        <div className="education" key={index}>
          <div className="left">
            <h1>{edu.institution}</h1>
            <h3>{edu.level} - {edu.specialization}</h3>
            <h3>Result: {edu.score}</h3>
          </div>
          <div className="right">
            <h2>{edu.duration}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education