import { Link } from 'react-router-dom';
import './About.css';
import AnimatedHero from '../components/AnimatedHero';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedHero />
        <div className="container hero-content">
          <h1 className="page-title fade-in">About Aegentdev</h1>
          <p className="page-subtitle fade-in">
            We're building the future of AI agent security through innovative diagnostics and benchmarks.
          </p>
        </div>
      </section>
      
      <section className="about-mission section">
        <div className="container">
          <div >
            <div className="about-content fade-in">
              <h2 className="section-title">Our Mission</h2>
              <p>
                At Aegentdev, we believe that the future of AI lies in multi-agent systems that can collaborate, 
                reason, and solve complex problems together. But with this power comes significant risk, 
                especially when these systems communicate with each other in ways that can lead to unexpected behaviors.
              </p>
              <p>
                Our mission is to develop diagnostic tools and security benchmarks that identify and mitigate risks 
                in agent-to-agent communication before these systems are deployed in the real world. We're committed 
                to ensuring that the next generation of AI systems are not only powerful, but also safe, reliable, 
                and aligned with human values.
              </p>
              <br></br>
              
            </div>
            
            
          </div>
        </div>
      </section>
      
      {/* <section className="about-timeline section">
        <div className="container">
          <h2 className="section-title text-center fade-in">Our Journey</h2>
          <div className="timeline fade-in">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2023</h3>
                <h4>Research Beginnings</h4>
                <p>
                  Founded as a research project at the intersection of AI safety and multi-agent systems. 
                  Initial research focused on identifying communication vulnerabilities in simple agent pairs.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2024</h3>
                <h4>Benchmark Development</h4>
                <p>
                  Developed the first version of our agent security benchmark, establishing metrics for 
                  evaluating communication safety in multi-agent systems. Published research on prompt 
                  chain vulnerabilities.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2025</h3>
                <h4>Platform Launch</h4>
                <p>
                  Launched the Aegentdev platform, providing diagnostic tools and security assessments 
                  for organizations developing multi-agent AI systems. Established partnerships with 
                  leading AI safety organizations.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Future</h3>
                <h4>Expanding Impact</h4>
                <p>
                  Continuing to advance the field of agent security through research, tool development, 
                  and industry collaboration. Working toward establishing universal safety standards for 
                  multi-agent systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="about-partners section">
        <div className="container">
          <h2 className="section-title text-center fade-in">Our Partners & Affiliations</h2>
          <div className="partners-grid fade-in">
            <div className="partner">
              <img className="partner-logo" src="/ai-safety-institute.jpg" />
              <h3 className="partner-name">AI Safety Institute</h3>
            </div>
            <div className="partner">
              <img className="partner-logo" src="/center-for-ai-security.jpg" />
              <h3 className="partner-name">Center for AI Security</h3>
            </div>
             {/* <div className="partner">
              <img className="partner-logo"></img>
              <h3 className="partner-name">Global AI Standards Organization</h3>
            </div>
            <div className="partner">
              <img className="partner-logo"></img>
              <h3 className="partner-name">Tech Safety Alliance</h3>
            </div>  
            <div className="partner">
              <img className="partner-logo" src="/NANDA.jpg" />
              <h3 className="partner-name">NANDA International</h3>
            </div> 
            <div className="partner">
              <img className="partner-logo" src="/fusen-world.jpg" />
              <h3 className="partner-name">Fusen World</h3>
            </div> 
          </div>
        </div>
      </section> */}
      
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2 className="section-title text-center">Interested in collaborating?</h2>
            
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Contact Us</a>
              {/* <a href="#" className="btn btn-secondary">View Open Positions</a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
