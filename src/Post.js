import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import stylesheet from "./index.css";
import Navbar from "./Navbar";

const Post = (props) => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");

  const getPosts = () => {
    fetch(`http://localhost:3000/post/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data.post));
  };

  useEffect(() => {
    getPosts();
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

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onClick = () => {
    fetch(`http://localhost:3000/post/${postId}/comment`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    }).then(() => getPosts());
    setComment("");
  };

  return (
    <div>
      <Navbar />
      <div className="card" style={{ marginTop: 30 }}>
        <h2>{post.title}</h2>
        <h5>Published at: {post.createdAt}</h5>
        <p>{post.content}</p>
      </div>
      <div className="card" style={{ marginTop: 30, backgroundColor: "#999" }}>
        <form style={{ marginRight: "30px", textAlign: "right" }}>
          <div className="label-group">
            <input
              type="text"
              value={comment}
              onChange={onChange}
              name="comment"
              placeholder="Enter comment here..."
              style={{
                width: "100%",
                padding: "10px 20px",
                marginBottom: "20px",
              }}
            />
          </div>
          <button type="button" onClick={onClick}>
            Submit comment
          </button>
        </form>
      </div>

      {getComments()}
    </div>
  );
};

export default Post;
