import React, { useState } from 'react'
import meet from '../assets/meet.png'

const Contact = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [formStatus, setFormStatus] = useState(""); 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setButtonText("Sending..."); 

    const formData = new FormData(e.target);
    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setButtonText("Success!");
        setFormStatus("Thank you! Your message has been sent successfully.");
        e.target.reset(); 
      } else {
        console.error("Submission Error:", data);
        setButtonText("Failed");
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setButtonText("Failed");
      setFormStatus("Network error. Please check your internet connection.");
    } finally {
      setTimeout(() => {
        setButtonText("Submit");
      }, 3000);
    }
  };

  return (
    <div id="contact" className="contact">
        <div className="left">
            <img src={meet} alt="Let's connect illustration" />
        </div>
        <div className="right">
            <h3>Looks like you want to build something great!</h3>
            <h1>Reach Out</h1>
            <p>
              Whether you have a question, want to discuss a project, or just want to 
              say hello, drop a message below and I will get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
                
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  required 
                />
                
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder="Feel free to discuss your ideas..." 
                  rows="4"
                  required
                ></textarea>
                
                <button type="submit">{buttonText}</button>
            </form>

            {formStatus && (
              <p className={`form-status-msg ${buttonText === "Success!" ? "success" : "error"}`} style={{ marginTop: '15px', fontWeight: '500' }}>
                {formStatus}
              </p>
            )}
        </div>
    </div>
  )
}

export default Contact