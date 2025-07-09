import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import AnimatedHero from '../components/AnimatedHero';
import './Blog.css';

// Mock blog data
const blogPosts = [
  {
    id: '1',
    title: 'Towards Measurable Security in Agentic AI',
    date: 'June 10, 2025',
    description: 'A survey of the current state of Agentic AI security benchmarking, adoption, and the need for measurable, teachable, and accessible security practices in multi-agent systems.',
    image: '/blog-1-card.jpg'
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero section" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedHero />
        <div className="container hero-content">
          <h1 className="page-title fade-in">Latest Insights</h1>
          <p className="page-subtitle fade-in">
            Expert analysis and research on agent security, communication risks, and pre-deployment safety.
          </p>
        </div>
      </section>
      
      <section className="blog-content section">
        <div className="container">
          <div className="blog-filters fade-in">
            {/* <div className="filter-categories">
              <button className="filter-button active">All</button>
              <button className="filter-button">Security</button>
              <button className="filter-button">Research</button>
              <button className="filter-button">Best Practices</button>
              <button className="filter-button">Case Studies</button>
            </div> */}
            
            {/* <div className="search-container">
              <input type="text" placeholder="Search articles..." className="search-input" />
              <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div> */}
          </div>
          
          <div className="blog-grid fade-in">
            {blogPosts.map(post => (
              <BlogCard 
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
                image={post.image}
              />
            ))}
          </div>
          
          
        </div>
      </section>
      
      {/* <section className="blog-subscribe section">
        <div className="container">
          <div className="subscribe-content fade-in">
            <h2 className="section-title text-center">Stay Updated</h2>
            <p className="subscribe-text text-center">
              Subscribe to our newsletter for the latest research, security insights, and agent safety best practices.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email address" className="subscribe-input" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Blog;