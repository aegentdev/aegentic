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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '9d18aaa1-af9d-4fc0-bce1-57590045eb8b',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message
        })
      });
      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again or contact us directly at aegentdev@gmail.com');
      }
    } catch (error) {
      alert('Failed to send message. Please try again or contact us directly at aegentdev@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
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
            {/* <div className="contact-form-container fade-in">
              <h2 className="section-title">Contact Information</h2>
              <p className="contact-description">
                Our team is here to help with any questions about our agent security tools, 
                research collaborations, or partnership opportunities.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    ...
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:aegentdev@gmail.com" className="mail-link">aegentdev@gmail.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  ...
                </div>

                <div className="contact-method">
                  ...
                </div>
              </div>

              <div className="contact-social">
                <h3>Connect With Us</h3>
                <div className="contact-social-icons">
                  <div className="social-icon-container">
                    <a href="https://github.com/aegentdev" className="social-icon">
                      <img className="social-icon-image" src="/github-icon.jpg" alt="Github" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="demo-call-container fade-in" itemID="Calendar">
              <h2 className="section-title">Schedule a Demo Call</h2>
              <p className="demo-call-description">
                Want a personalized walkthrough of our platform? Book a live demo with our team and see how Aegentdev can help secure your AI agents.
              </p>
              <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }}>
                <InlineWidget url="https://calendly.com/aegentdev/30min?month=2025-07" />
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

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="contact-map section">
        <div className="container">
          <h2 className="section-title text-center fade-in">Visit Our Office</h2>
          <div className="map-container fade-in">
            ...
          </div>
        </div>
      </section> */}

      {/* <section className="contact-faq section">
        <div className="container">
          <h2 className="section-title text-center fade-in">Frequently Asked Questions</h2>
          <div className="faq-grid fade-in">
            ...
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
