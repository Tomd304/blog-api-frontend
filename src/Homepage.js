import stylesheet from "./index.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/post/")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="title">
        <h1>Blogs Posts</h1>
      </div>
      <div className="blog-cards">
        {posts.map((post) => (
          <div className="card" key={post._id}>
            <Link to={"/" + post._id}>
              {" "}
              <h2>{post.title}</h2>
            </Link>
            <h5>Published at: {post.createdAt}</h5>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
