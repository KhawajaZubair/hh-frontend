import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import "../Style/blogpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog1 from "../Assets/Blogpost/Blog1.jpg";
import Blog2 from "../Assets/Blogpost/Blog2.jpg";
import Blog3 from "../Assets/Blogpost/Blog3.jpg";
import Blog4 from "../Assets/Blogpost/Blog4.jpg";
import Blog5 from "../Assets/Blogpost/Blog5.jpg";

const imageMap = {
  Blog1: Blog1,
  Blog2: Blog2,
  Blog3: Blog3,
  Blog4: Blog4,
  Blog5: Blog5,
};
const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog-posts")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div className="blog-page">
      <NavBar />
      <header className="blog-header">
        <div className="container">
          <h1>Holistic Health Blog</h1>
          <p>Insights and updates on the latest in healthcare and wellness</p>
        </div>
      </header>
      <div className="container blog-content">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <div className="blog-image">
              <img src={imageMap[post.image]} alt="Blog Picture" />
            </div>
            <div className="blog-info">
              <h2 className="blog-title">{post.title}</h2>
              <div className="blog-meta">
                <span className="date">{post.upload_at}</span>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-text">
            © 2024 Holistic Health Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
