import React, { useState } from 'react';
import './Waitlist.css';
import AnimatedHero from './AnimatedHero';

interface WaitlistFormData {
  name: string;
  email: string;
  company?: string;
  useCase?: string;
}

const Waitlist = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    company: '',
    useCase: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '9d18aaa1-af9d-4fc0-bce1-57590045eb8b',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.useCase,
          subject: 'Waitlist Signup'
        })
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', useCase: '' });
      } else {
        alert('Failed to join waitlist. Please try again or contact us directly at aegentdev@gmail.com');
      }
    } catch (error) {
      alert('Failed to join waitlist. Please try again or contact us directly at aegentdev@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="waitlist-container">
        <div className="waitlist-card success-card">
          <div className="success-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2>You're on the list!</h2>
          <p>Thank you for joining our waitlist. We'll notify you as soon as our security platform is ready for early access.</p>
          <div className="success-details">
            <div className="detail-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22 6 12 13 2 6"></polyline>
              </svg>
              <span>Confirmation email sent to <strong>{formData.email}</strong></span>
            </div>
            <div className="detail-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Expected early access in <strong>2-4 weeks</strong></span>
            </div>
          </div>
          <button 
            className="btn btn-secondary"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', company: '', useCase: '' });
            }}
          >
            Join Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="waitlist-container">
      <AnimatedHero 
        gridSpacing={30}
        nodeRadius={0.7}
        lineWidth={0.3}
        maxDistance={120}
        amplitude={20}
        frequency={0.004}
        timeIncrement={4}
      />
      <div className="waitlist-card">
        <div className="waitlist-header">
          <div className="waitlist-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2>Join the Waitlist</h2>
          <p>Be among the first to access our AI agent security platform. Get early access to cutting-edge diagnostic tools and security benchmarks.</p>
        </div>

        <form onSubmit={handleSubmit} className="waitlist-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="useCase">How do you plan to use our platform? (Optional)</label>
            <textarea
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleInputChange}
              rows={5}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary waitlist-submit"
            disabled={isLoading}
          >
            {isLoading ? 'Joining Waitlist...' : 'Join Waitlist'}
          </button>
        </form>

        <div className="waitlist-benefits">
          <h3>What you'll get:</h3>
          <ul>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Early access to our security platform
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Free security assessment for your agents
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Priority customer support
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Exclusive updates on new features
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;