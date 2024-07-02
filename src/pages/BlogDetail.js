import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/blogdetail.css";
import NavBar from "../components/navbar";
import Loader from "../components/loader"; 
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

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/blog-posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [id]);

  if (!post) {
    return <Loader />; // Show loader while fetching data
  }

  const imageName = post.image;
  const imageSrc = imageMap[imageName] || "default-image-path";

  const tableOfContents = post.table_of_content
    .split("\n")
    .map((item, index) => <li key={index}>{item}</li>);

  const content = post.content
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <div>
      <NavBar />
      <div className="container blog-detail">
        <h1 className="my-4">{post.title}</h1>
        <img src={imageSrc} alt={post.title} className="img-fluid" />
        <p className="upload-date">{post.upload_at}</p>
        <div className="content">
          <h2>Table of Content</h2>
          <ul>{tableOfContents}</ul>
          <h2>Content</h2>
          {content}
        </div>
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

export default BlogDetail;
