
import { Link } from 'react-router-dom';
import './BlogCard.css';

interface BlogCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const BlogCard = ({ id, title, date, description, image }: BlogCardProps) => {
  return (
    <div className="blog-card fade-in">
      <div className="blog-card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="blog-card-overlay"></div>
      </div>
      <div className="blog-card-content">
        <span className="blog-card-date">{date}</span>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
        <Link to={`/blog/${id}`} className="blog-card-link">
          Read More <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;