import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

function AddPost(props) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const { user } = useContext(UserContext);

  const handlePostAdd = (event) => {
    event.preventDefault();

    if (!postTitle || !postContent) {
      alert("Title or content can not be empty!");
      return;
    }

    const token = localStorage.getItem("token");

    axios
      .post(
        `/api/posts/`,
        {
          title: postTitle,
          content: postContent,
          userId: user._id,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then(
        (response) => {
          setPostTitle("");
          setPostContent("");
          props.getPostsData();
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
