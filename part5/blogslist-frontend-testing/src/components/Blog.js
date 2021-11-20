import { React, useState } from "react";
import "../Index.css";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import TextField from "@mui/material/TextField";
import { IconButton, CardActions, Grid } from "@mui/material/";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Blog = ({ blogs, handleLike, createComment, handleDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [newComment, setNewComment] = useState([]);

  let history = useHistory();

  const handleExpandedClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const id = useParams().id;
  const blog = blogs.find((b) => b.id === String(id));

  const addComment = (event) => {
    event.preventDefault();
    createComment({
      comment: newComment,
      id: blog.id,
    });
    setNewComment("");
  };
  if (!blog) {
    return null;
  }

  return (
    <Container>
      <Box>
        <Card sx={{ maxWidth: 345 }} elevation={12}>
          <CardContent>
            <Typography fontWeight="medium" variant="h5">
              {blog.title}
            </Typography>{" "}
            <Typography>{blog.author}</Typography>
            <a href="">
              <Typography>{blog.url}</Typography>
            </a>
            <Typography fontWeight="lighter">{blog.likes} likes</Typography>
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                id="likeButton"
                size="small"
                onClick={() => handleLike(blog)}
              >
                <ThumbUpIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  handleDelete(blog), history.push("/");
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={handleExpandedClick}>
                <ModeCommentIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
        {expanded ? (
          <form noValidate autoComplete="off" onSubmit={addComment}>
            <TextField
              onChange={handleChange}
              value={newComment}
              color="secondary"
              variant="outlined"
              label="enter comment"
              fullWidth
              sx={{ marginTop: "2rem" }}
            />
          </form>
        ) : null}
      </Box>
      <div>
        <Typography variant="h4">comments</Typography>
        {blog.comments.map((comment) => {
          return <div key={comment.comments}>{comment.comments}</div>;
        })}
      </div>
    </Container>
  );
};

export default Blog;
