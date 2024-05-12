import React from "react";
import { Link } from "react-router-dom";


function BlogInfo(props) {
  return (
    <div className="bl-card">
      <img src={props.img} alt={props.name} className="bl-card-img" />
      <p className="bl-card-name">{props.name}</p>
      <p className="bl-card-title">{props.title}</p>
      <Link to={`/blog/${props.id}`} className="vm-link">
        View More
      </Link>
    </div>
  );
}

export default BlogInfo;
