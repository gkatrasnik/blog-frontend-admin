import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function Comment(props) {
  //------------------------------------------------------
  console.log(props);
  const handleCommentDelete = (event) => {
    event.preventDefault();

    var postId = props.comment.postId;
    var commentId = props.comment._id;

    //handle post delete
    axios
      .delete(`/api/posts/${postId}/comments/${commentId}`, {
        //headers: { Authorization: token },
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
