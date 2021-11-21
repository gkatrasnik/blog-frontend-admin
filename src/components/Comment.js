import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function Comment(props) {
  const handleCommentDelete = (event) => {
    event.preventDefault();

    var postId = props.comment.postId;
    var commentId = props.comment._id;
    const token = localStorage.getItem("token");
    axios
      .delete(`/api/posts/${postId}/comments/${commentId}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log(res);
        props.getPostsData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card.Text comment={props.comment}>
      {props.comment.author}: {props.comment.title}
      {props.comment.content}
      <Button onClick={handleCommentDelete} className="float-end">
        Delete Comment
      </Button>
    </Card.Text>
  );
}
export default Comment;
