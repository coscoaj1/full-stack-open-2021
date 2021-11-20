import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Ma from "../Ma.jpg";
import Ok from "../ok.png";
import Whitey from "../Whitey.jpg";
import Sid from "../Sid.jpg";
import Container from "@mui/material/Container";

const User = ({ users }) => {
  const id = useParams().id;
  const showUser = users.find((u) => u.id === String(id));
  console.log(showUser);
  if (!showUser) {
    return null;
  }

  let cat = {};

  if (showUser.name === "Ma") {
    cat.cat = Ma;
  } else if (showUser.name === "orange") {
    cat.cat = Ok;
  } else if (showUser.name === "Sid") {
    cat.cat = Sid;
  } else if (showUser.name === "whitey") {
    cat.cat = Whitey;
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        mt: 2,
      }}
    >
      <Card>
        <CardActionArea />
        <CardMedia
          sx={{ width: "350px", height: "275px" }}
          image={cat.cat}
          title="feral cat"
        />
        <Typography variant="h5" fontWeight="bold">
          {showUser.name}
        </Typography>
        <Typography>added blogs</Typography>
        {showUser.blogs.map((blog) => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </Card>
    </Container>
  );
};

export default User;
