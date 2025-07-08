import { useState } from 'react';
import './Contact.css';
import AnimatedHero from '../components/AnimatedHero';
import { InlineWidget } from "react-calendly";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="contact-page">
      <section className="contact-hero section" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedHero />
        <div className="container hero-content">
          <h1 className="page-title fade-in">Get in Touch</h1>
          <p className="page-subtitle fade-in">
            Have questions about our tools or interested in a collaboration? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container fade-in">
              <h2 className="section-title">Contact Information</h2>
              <p className="contact-description">
                Our team is here to help with any questions about our agent security tools, 
                research collaborations, or partnership opportunities.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:aegentdev@gmail.com" itemID="mail-link">aegentdev@gmail.com</a>
                  </div>
                </div>
                
                {/* <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div> */}
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>Atlanta, Ga</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <h3>Connect With Us</h3>
                <div className="contact-social-icons">
                  <div className="social-icon-container">
                    <a href="https://github.com/aegentdev" className="social-icon">
                      <img className="social-icon-image" src="src/assets/github-icon.jpg" alt="Github" />
                    </a>
                    <p className="social-link-label">Github</p>
                  </div>
                  <div className="social-icon-container">
                    <a href="https://www.linkedin.com/in/vidhi-kulkarni/" className="social-icon">
                      <img className="social-icon-image" src="src/assets/linkedin-icon.jpg" alt="Vidhi LinkedIn" />
                    </a>
                    <p className="social-link-label">Vidhi LinkedIn</p>
                  </div>
                  <div className="social-icon-container">
                    <a href="https://www.linkedin.com/in/gs-softwaredev/" className="social-icon"> 
                      <img className="social-icon-image" src="src/assets/linkedin-icon.jpg" alt="Gauri LinkedIn" />
                    </a>
                    <p className="social-link-label">Gauri LinkedIn</p>
                  </div>
                  <div className="social-icon-container">
                    <a href="https://www.linkedin.com/in/miles-king0/" className="social-icon">
                      <img className="social-icon-image" src="src/assets/linkedin-icon.jpg" alt="Miles LinkedIn" />
                    </a>
                    <p className="social-link-label">Miles LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container fade-in">
              <h2 className="section-title">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="form-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company (Optional)</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="research">Research Collaboration</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>

            {/* Schedule a Demo Call Area */}
            <div className="demo-call-container fade-in">
              <h2 className="section-title">Schedule a Demo Call</h2>
              <p className="demo-call-description">
                Want a personalized walkthrough of our platform? Book a live demo with our team and see how Aegentdev can help secure your AI agents.
              </p>
              {/* Calendly Inline Embed */}
              <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }}>
                <InlineWidget url="https://calendly.com/gsharma-fusen/30min?month=2025-06" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <section className="contact-map section">
        <div className="container">
          <h2 className="section-title text-center fade-in">Visit Our Office</h2>
          <div className="map-container fade-in">
            <div className="map-placeholder">
              <div className="map-overlay">
                <div className="map-pin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="map-address">
              <h3>Aegentdev Headquarters</h3>
              <p>123 AI Safety Street</p>
              <p>San Francisco, CA 94103</p>
              <p>United States</p>
            </div>
          </div>
        </div>
      </section> */}
      
      <section className="contact-faq section">
        <div className="container">
          <h2 className="section-title text-center fade-in">Frequently Asked Questions</h2>
          <div className="faq-grid fade-in">
            <div className="faq-item">
              <h3 className="faq-question">What types of AI systems can Aegentdev evaluate?</h3>
              <p className="faq-answer">
                Aegentdev is designed to evaluate any multi-agent AI system where agents communicate with each other. 
                This includes language model agents, reinforcement learning agents, and hybrid systems.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">How does the security benchmark work?</h3>
              <p className="faq-answer">
                Our benchmark runs a series of tests that simulate various attack vectors and communication vulnerabilities. 
                It then provides a comprehensive report with risk scores and specific recommendations.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Do you offer custom security assessments?</h3>
              <p className="faq-answer">
                Yes, we offer tailored security assessments for organizations with specific requirements or unique agent architectures. 
                Contact us to discuss your needs.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Is Aegentdev open source?</h3>
              <p className="faq-answer">
                We maintain both open-source and commercial components. Our core evaluation methodology is open source, 
                while our advanced diagnostic tools and enterprise features are available through commercial licenses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;