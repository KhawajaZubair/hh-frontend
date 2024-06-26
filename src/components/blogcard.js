import React from "react";
import BlogInfo from "./blogInfo";
import { Link } from "react-router-dom";

import profile1 from "../Assets/blogcardimg/blog1.jpg";
import profile2 from "../Assets/blogcardimg/blog2.jpg";
import profile3 from "../Assets/blogcardimg/blog3.jpg";
import "../Style/blog.css";

function Blogs() {
  return (
    <div className="blog-section" id="blogs">
      <div className="bl-title-content">
        <h2 className="bl-title">Recent Blogs</h2>
        <h4 className="bl-subtitle">Read Top Articles Of The Day</h4>
        <p className="bl-description">
          Health articles that keep you informed about good health practices and
          help you achieve your goals.
        </p>
      </div>

      <div className="bl-cards-content">
        <BlogInfo
          id={1}
          img={profile1}
          name="Stress Release"
          title="Difference Between Exercise and Yoga!"
        />
        <BlogInfo
          id={2}
          img={profile2}
          name="General Health"
          title="How To Stop Headache - Easy Tips And Tricks"
        />
        <BlogInfo
          id={3}
          img={profile3}
          name="Medicines"
          title="Side Effects & Different Forms Of Medicines"
        />
      </div>
      <Link to="/blog-page">
        <button className="vm-btn" type="button">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default Blogs;
