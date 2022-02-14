import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import stylesheet from "./index.css";

const Post = (props) => {
  const postId = useParams().id;
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/post/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data.post));
  }, []);

  const getComments = () => {
    if (post.comments != undefined && post.comments.length > 0) {
      let commentArr = post.comments.map((comment) => {
        return (
          <div key={comment._id}>
            <p style={{ fontSize: 8, textAlign: "right" }}>
              Comment created at: {comment.createdAt}
            </p>
            <p style={{ textAlign: "right" }}>{comment.content}</p>
          </div>
        );
      });
      return <div className="comment-container">{commentArr}</div>;
    }
  };

  return (
    <div style={{ marginTop: 30 }}>
      <div className="card">
        <h2>{post.title}</h2>
        <h5>Published at: {post.createdAt}</h5>
        <p>{post.content}</p>
      </div>
      {getComments()}
    </div>
  );
};

export default Post;
