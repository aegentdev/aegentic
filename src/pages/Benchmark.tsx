import { useState } from 'react';
import DashboardVisualization from '../components/DashboardVisualization';
import BenchmarkChart from '../components/BenchmarkChart';
import AnimatedHero from '../components/AnimatedHero';
import './Benchmark.css';

const Benchmark = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="benchmark-page">
      <section className="benchmark-hero section" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedHero />
        <div className="container hero-content">
          <h1 className="page-title fade-in">Agent Security Benchmark</h1>
          <p className="page-subtitle fade-in">
            Comprehensive security assessment and visualization tools for multi-agent systems.
          </p>
        </div>
      </section>
      
      <section className="benchmark-dashboard section">
        <div>
          <div className="dashboard-tabs fade-in">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'tap' ? 'active' : ''}`}
              onClick={() => setActiveTab('tap')}
            >
              TAP Analysis
            </button>
            <button 
              className={`tab-button ${activeTab === 'zero-shot' ? 'active' : ''}`}
              onClick={() => setActiveTab('zero-shot')}
            >
              Zero-Shot
            </button>
            <button 
              className={`tab-button ${activeTab === 'crescendo' ? 'active' : ''}`}
              onClick={() => setActiveTab('crescendo')}
            >
              Crescendo
            </button>
          </div>
          
          <div >
            {activeTab === 'overview' && (
              <div className="overview-tab">
                <div className="dashboard-grid">
                  <div className="dashboard-card">
                    <h3>Agent Communication Map</h3>
                    <div className="visualization-container">
                      <DashboardVisualization />
                    </div>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Security Assessment</h3>
                    <div className="assessment-stats">
                      <div className="stat-item">
                        <div className="stat-value">87<span className="stat-percent">%</span></div>
                        <div className="stat-label">Overall Security Score</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">3</div>
                        <div className="stat-label">Critical Vulnerabilities</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">12</div>
                        <div className="stat-label">Potential Risks</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">94<span className="stat-percent">%</span></div>
                        <div className="stat-label">OWASP Compliance</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Adversarial Robustness</h3>
                    <BenchmarkChart 
                      title="Adversarial Robustness Across Models"
                      type="bar"
                    />
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Category Compliance</h3>
                    <BenchmarkChart 
                      title="Security Category Compliance"
                      type="radar"
                    />
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Recent Vulnerabilities</h3>
                    <div className="vulnerability-list">
                      <div className="vulnerability-item critical">
                        <div className="vulnerability-header">
                          <span className="vulnerability-severity">Critical</span>
                          <span className="vulnerability-date">2 days ago</span>
                        </div>
                        <h4 className="vulnerability-title">Unvalidated Agent Message Chain</h4>
                        <p className="vulnerability-description">
                          Agent-3 accepts messages without proper validation, creating potential for prompt injection attacks.
                        </p>
                      </div>
                      
                      <div className="vulnerability-item high">
                        <div className="vulnerability-header">
                          <span className="vulnerability-severity">High</span>
                          <span className="vulnerability-date">5 days ago</span>
                        </div>
                        <h4 className="vulnerability-title">Memory Loop in Agent-7</h4>
                        <p className="vulnerability-description">
                          Recursive memory access pattern detected in Agent-7 when processing complex instructions.
                        </p>
                      </div>
                      
                      <div className="vulnerability-item medium">
                        <div className="vulnerability-header">
                          <span className="vulnerability-severity">Medium</span>
                          <span className="vulnerability-date">1 week ago</span>
                        </div>
                        <h4 className="vulnerability-title">Insufficient Port Monitoring</h4>
                        <p className="vulnerability-description">
                          Communication ports between Agent-2 and Agent-5 lack proper monitoring and logging.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Security Recommendations</h3>
                    <div className="recommendations-list">
                      <div className="recommendation-item">
                        <h4 className="recommendation-title">Implement Message Validation</h4>
                        <p className="recommendation-description">
                          Add strict validation for all incoming messages to Agent-3 to prevent prompt injection attacks.
                        </p>
                        <button className="btn btn-secondary btn-sm">View Details</button>
                      </div>
                      
                      <div className="recommendation-item">
                        <h4 className="recommendation-title">Fix Memory Loop Pattern</h4>
                        <p className="recommendation-description">
                          Implement circuit breaker pattern in Agent-7's memory access to prevent recursive loops.
                        </p>
                        <button className="btn btn-secondary btn-sm">View Details</button>
                      </div>
                      
                      <div className="recommendation-item">
                        <h4 className="recommendation-title">Enhance Port Monitoring</h4>
                        <p className="recommendation-description">
                          Deploy comprehensive logging and monitoring for all communication ports between agents.
                        </p>
                        <button className="btn btn-secondary btn-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'tap' && (
              <div className="tap-tab">
                <div className="tab-content-placeholder">
                  <h3>TAP Analysis Dashboard</h3>
                  <p>Detailed Threat Assessment Protocol analysis for your agent communication systems.</p>
                  <button className="btn btn-primary">Run TAP Analysis</button>
                </div>
              </div>
            )}
            
            {activeTab === 'zero-shot' && (
              <div className="zero-shot-tab">
                <div className="tab-content-placeholder">
                  <h3>Zero-Shot Vulnerability Testing</h3>
                  <p>Test your agent systems against unknown vulnerabilities without prior training.</p>
                  <button className="btn btn-primary">Start Zero-Shot Test</button>
                </div>
              </div>
            )}
            
            {activeTab === 'crescendo' && (
              <div className="crescendo-tab">
                <div className="tab-content-placeholder">
                  <h3>Crescendo Attack Simulation</h3>
                  <p>Simulate gradually escalating attacks to test system resilience over time.</p>
                  <button className="btn btn-primary">Begin Crescendo Simulation</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="benchmark-cta section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2 className="section-title text-center">Ready for a Full Security Assessment?</h2>
            <p className="cta-text text-center">
              Get a comprehensive report with actionable insights to secure your agent communication systems.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Generate Full Report</button>
              <button className="btn btn-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benchmark;
