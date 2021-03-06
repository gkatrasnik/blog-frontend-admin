import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import Comment from "./Comment";
import axios from "axios";
import { TrashFill } from "react-bootstrap-icons";

function Post(props) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");

  let comments = props.item.comments;
  console.log(comments);

  const handleCommentAdd = (event) => {
    event.preventDefault();
    if (!commentAuthor || !commentContent) {
      alert("Author or Comment can not be empty!");
      return;
    }
    var postId = props.item._id;
    axios
      .post(`/api/posts/${postId}/comments/`, {
        author: commentAuthor,
        content: commentContent,
      })
      .then(
        (response) => {
          setCommentAuthor("");
          setCommentContent("");
          setShowCommentForm(!showCommentForm);
          props.getPostsData();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handlePostDelete = (event) => {
    event.preventDefault();
    //handle post delete
    var postId = props.item._id;
    const token = localStorage.getItem("token");

    //handle post delete (it deletes its comments too)
    axios
      .delete(`/api/posts/${postId}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log(res);
        props.getPostsData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card style={{ width: "80%", maxWidth: "32rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title className="text-center">
          {props.item.title}{" "}
          <Button
            variant="danger"
            onClick={handlePostDelete}
            className="float-end"
          >
            <TrashFill /> Delete post
          </Button>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Author: {props.item.user.username}
        </Card.Subtitle>
        <Card.Text>{props.item.content}</Card.Text>

        <br />
        <Card.Text>Comments:</Card.Text>

        {comments.map((comment, index) => {
          return (
            <Comment
              getPostsData={props.getPostsData}
              comment={comment}
              key={index}
            />
          );
        })}
        <Button
          variant="primary"
          className="float-end my-2"
          onClick={() => {
            setShowCommentForm(!showCommentForm);
          }}
        >
          Comment
        </Button>
        {showCommentForm && (
          <Form onSubmit={handleCommentAdd}>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author:</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your nickname"
                onChange={(e) => {
                  setCommentAuthor(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Text:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type your comment"
                onChange={(e) => {
                  setCommentContent(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}

export default Post;
