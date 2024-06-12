import React from "react";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import "../Style/blogpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog1 from "../Assets/img/Blog1.png";
import Blog2 from "../Assets/img/Blog2.png";
import Blog3 from "../Assets/img/Blog3.png";
import Blog4 from "../Assets/blogcardimg/blog1.jpg";
import Blog5 from "../Assets/blogcardimg/blog2.jpg";
import Blog6 from "../Assets/blogcardimg/blog3.jpg";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of Telemedicine",
      description:
        "Explore the latest advancements in telemedicine and how it is transforming the healthcare industry.",
      author: "John Doe",
      date: "April 27, 2024",
      image: Blog1,
    },
    {
      title: "Advancements in Precision Medicine",
      description:
        "Discover how precision medicine is revolutionizing healthcare and improving patient outcomes.",
      author: "Jane Smith",
      date: "April 25, 2024",
      image: Blog2,
    },
    {
      title: "The Impact of AI in Healthcare",
      description:
        "Explore how artificial intelligence is transforming the healthcare industry and improving patient care.",
      author: "Michael Johnson",
      date: "April 22, 2024",
      image: Blog3,
    },
    {
      title: "Stress Release",
      description: "Difference Between Exercise and Yoga!",
      author: "Emily Brown",
      date: "April 20, 2024",
      image: Blog4,
    },
    {
      title: "General Health",
      description: "How To Stop Headache - Easy Tips And Tricks",
      author: "David Wilson",
      date: "April 18, 2024",
      image: Blog5,
    },
    {
      title: "Mental Health Medicines Awareness",
      description: "Side Effects & Different Forms Of Medicines",
      author: "Sophia Lee",
      date: "April 15, 2024",
      image: Blog6,
    },
    // Add more blog posts here
  ];

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
              <img src={post.image} alt="Blog Post" />
            </div>
            <div className="blog-info">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
              <div className="blog-meta">
                <span className="author">By {post.author}</span>
                <span className="date">{post.date}</span>
                <Link to={`/blog/${index}`} className="read-more">
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
