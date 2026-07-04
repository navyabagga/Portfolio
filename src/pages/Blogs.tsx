import React from 'react';
import './Blogs.css';

const blogs: { title: string; platform: string; icon: JSX.Element; link: string; description: string }[] = [
  // Add your blog post links here. Example:
  // {
  //   title: "My Blog Post Title",
  //   platform: "Medium",
  //   icon: <FaMedium />,
  //   link: "https://medium.com/@navyabagga/your-post-slug",
  //   description: "A short description of your post.",
  // },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      {blogs.length === 0 ? (
        <p style={{ color: '#fff', textAlign: 'center', paddingTop: '2rem' }}>Blog posts coming soon.</p>
      ) : (
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
              <div className="blog-icon animated-icon">{blog.icon}</div>
              <div className="blog-info animated-text">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <span className="blog-platform">{blog.platform}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
