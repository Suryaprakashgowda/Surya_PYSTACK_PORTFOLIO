import React, { useEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

// Import your project mockups/images here

import resumeParsingImg from '../assets/Resume Parsing.jpeg'
import healthifyMlImg from '../assets/Healthify-ML.png'
import geminiChatbotImg from '../assets/Gemini-Chatbot.png'
import aiCareerCoachImg from '../assets/Ai-Career-Coach.png'

const Projects = () => {
  const scrollRef = useRef(null);
  const isHovered = useRef(false)
  const myProjects = [
    {
  id: 1,
  title: 'Healthify-ML: Health Insurance Premium Prediction System',
  description: 'Developed a machine learning web application to predict health insurance premiums based on user information. Performed data preprocessing, feature engineering, and trained models such as Linear Regression and Random Forest. Built an interactive Streamlit interface for real-time premium prediction.',
  tag: 'Feb 2025 – Apr 2025',
  languages: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'NumPy', 'Linear Regression', 'Random Forest'],
  image: healthifyMlImg,
  sourceCode: '',
  liveDemo: ''
},
{
  id: 2,
  title: 'AI Career Coach – SENSAI',
  description: 'Built an AI-powered career guidance platform that provides interview preparation, resume feedback, and personalized career recommendations. Integrated Gemini API, Clerk Authentication, Prisma ORM, and developed a scalable full-stack application using modern web technologies.',
  tag: 'Sep 2025 – Dec 2025',
  languages: ['Next.js', 'Tailwind CSS', 'Prisma ORM', 'Clerk Authentication', 'Gemini API', 'Node.js', 'PostgreSQL'],
  image: aiCareerCoachImg,
  sourceCode: '',
  liveDemo: ''
},
{
  id: 3,
  title: 'Resume Parsing with Google Gemini LLM',
  description: 'Developed an AI-powered resume parsing system that automatically extracts candidate information from resumes using Google Gemini LLM. Implemented automated form filling and data processing to reduce manual effort and improve recruitment efficiency.',
  tag: 'Jan 2025 – Mar 2025',
  languages: ['Python', 'Flask', 'HTML', 'CSS', 'Google Gemini LLM', 'JSON'],
  image: resumeParsingImg,
  sourceCode: '',
  liveDemo: ''
},
{
  id: 4,
  title: 'Gemini Chatbot',
  description: 'Built a conversational AI chatbot using Gemini API to generate intelligent and context-aware responses. Designed a responsive user interface and integrated real-time API communication for interactive conversations.',
  tag: '2025',
  languages: ['React.js', 'JavaScript', 'Gemini API', 'HTML', 'CSS', 'REST API'],
  image: geminiChatbotImg,
  sourceCode: '',
  liveDemo: ''
}
  ];
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    // Start the slider right in the middle section on initial load so it has room to scroll both ways
    const cardTotalWidth = 345; // 320px card + 25px gap
    const singleSetWidth = myProjects.length * cardTotalWidth;
    slider.scrollLeft = singleSetWidth;

    const autoScroll = setInterval(() => {
      if (!isHovered.current) {
        // Step forward by 1 pixel at a very fast rate for an ultra-smooth crawl, 
        // OR change 1 to cardTotalWidth (345) if you want it to jump card-by-card.
        slider.scrollLeft += 1; 

        // If we have scrolled past the second set, instantly snap back to the middle set
        if (slider.scrollLeft >= singleSetWidth * 2) {
          slider.scrollLeft = singleSetWidth; // Invisible instant reset
        }
      }
    }, 15); // Running every 15ms with a 1px step creates a gorgeous, smooth cinematic crawl!

    return () => clearInterval(autoScroll);
  }, [myProjects.length]);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      
      <div 
        className="marquee-wrapper" 
        ref={scrollRef}
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; }}
      >
        <div className="marquee-track">
          {myProjects.map((p) => <ProjectCard key={`set1-${p.id}`} project={p} />)}
          {myProjects.map((p) => <ProjectCard key={`set2-${p.id}`} project={p} />)}
          {myProjects.map((p) => <ProjectCard key={`set3-${p.id}`} project={p} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects