
import { Link } from 'react-router-dom';
import AnimatedHero from '../components/AnimatedHero';
import FeatureCard from '../components/FeatureCard';
import DashboardVisualization from '../components/DashboardVisualization';
import TerminalVisualizer from '../components/TerminalVisualizer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <AnimatedHero />
        <div className="container hero-content">
          <h1 className="hero-title fade-in">Agent Safety Starts Here.</h1>
          <p className="hero-subtitle fade-in">
            We build diagnostic tools and security benchmarks to ensure agent-to-agent communication is safe before your AI systems ever go live.
          </p>
          <div className="hero-buttons fade-in">
            
            <Link to="/waitlist" className="btn btn-primary">Join Waitlist</Link>
            <a 
              href="https://github.com/aegentdev/mcpagentscanner" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Try out our MCP agent security hardener!
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginLeft: '8px' }}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="our-story-section section brown-bg">
        <div className="container our-story-content" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          <div className="our-story-text" style={{ flex: 1, minWidth: 260 }}>
            <h2 className="section-title fade-in">Our Story</h2>
            <p className="fade-in">
              Inspired by the <strong>aegis</strong>—the mythic shield of protection—<strong>Aegentdev</strong> exists to shield you from malicious actors and insecure design. We help businesses secure their AI agent systems, before they ship to customers.
            </p>
          </div>
          <div className="our-story-graphic fade-in" style={{ flex: '0 0 320px', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 220 }}>
            <div className="aegis-dictionary-box">
              <div className="aegis-word">ae·gis</div>
              <div className="aegis-pronounce">/ˈējəs/</div>
              <div className="aegis-noun">noun</div>
              <div className="aegis-def">the protection, backing, or support of a particular person or organization.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terminal Section */}
      <section className="terminal-section section">
        <div className="container">
          <div className="terminal-content">
            <div className="terminal-text fade-in">
              <h2 className="section-title">Real-Time Vulnerability Detection</h2>
              <p>
                Our advanced security scanner identifies potential vulnerabilities in your agent communication systems 
                before they can be exploited. Watch as our system analyzes agent interactions, identifies risks, 
                and provides actionable recommendations.
              </p>
              <ul className="terminal-features">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Comprehensive vulnerability scanning
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Prompt injection detection
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Memory loop identification
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  OWASP compliance verification
                </li>
              </ul>
              <Link to="/benchmark" className="btn btn-primary">Run Your Own Scan</Link>
            </div>
            <div className="terminal-visualization-container fade-in">
              <TerminalVisualizer />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title text-center fade-in">Our Security Features</h2>
          <div className="grid grid-3">
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
              title="Prompt Chain Hardening"
              description="Secure your agent communication chains against injection attacks and unauthorized access."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
              title="Agent Card Sanitization"
              description="Prevent data leakage and ensure proper sanitization of agent communication cards."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>}
              title="MCP Server Monitoring"
              description="Monitor and secure the communication pathways between agents and servers."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>}
              title="System Communication Graphs"
              description="Visualize and analyze agent communication patterns to identify potential security risks."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
              title="OWASP/NIST Compliance"
              description="Ensure your agent systems meet industry security standards and compliance frameworks."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>}
              title="Memory Loop Prevention"
              description="Detect and prevent dangerous memory loops and recursive agent communication patterns."
            />
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview Section */}
      <section className="dashboard-section section">
        <div className="container">
          <div className="dashboard-content">
            <div className="dashboard-text fade-in">
              <h2 className="section-title">Visualize Agent Communication Risks</h2>
              <p>
                Our interactive dashboard provides real-time visualization of agent communication patterns, 
                risk assessment, and security vulnerabilities. Identify threats before your system is compromised.
              </p>
              <ul className="dashboard-features">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Real-time agent communication mapping
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Vulnerability assessment and risk scoring
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Automated threat detection and alerts
                </li>
                {/* <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Historical data analysis and trend reporting
                </li> */}
              </ul>
              <Link to="/benchmark" className="btn btn-primary">Explore Dashboard</Link>
            </div>
            <div className="dashboard-visualization-container fade-in">
              <DashboardVisualization />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2 className="section-title text-center">Ready to Secure Your AI Agents?</h2>
            <p className="cta-text text-center">
              Start with a free security assessment and discover potential vulnerabilities in your agent communication systems.
            </p>
            <div className="cta-buttons">
              <a href="/benchmark" className="btn btn-primary">Run Free Assessment</a>
              <a href="/contact" className="btn btn-secondary">Contact Our Team</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
