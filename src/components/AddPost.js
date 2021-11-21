import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AddPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handlePostAdd = (event) => {
    event.preventDefault();
    if (!postTitle || !postContent) {
      alert("Title or content can not be empty!");
      return;
    }
    axios
      .post(`/api/posts/`, {
        title: postTitle,
        content: postContent,
      })
      .then(
        (response) => {
          setPostTitle("");
          setPostContent("");
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <Form onSubmit={handlePostAdd}>
      <h1>New Post</h1>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control
          type="text"
          placeholder="content"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddPost;
