import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import "../Index.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Article from "@mui/icons-material/Article";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

const BlogSchema = Yup.object().shape({
  title: Yup.string("Enter title")
    .min(2, "Too short!")
    .max(75, "Too Long!")
    .required("Required"),
  author: Yup.string("Enter author")
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  url: Yup.string("Enter website")
    .url()
    .min(2, "Too short!")
    .required("Required"),
});

const BlogForm = ({ createBlog }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      url: "",
    },
    validationSchema: BlogSchema,
    onSubmit: (values) => {
      console.log(values);
      createBlog({
        title: formik.values.title,
        author: formik.values.author,
        url: formik.values.url,
      });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <Article />
        </Avatar>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          sx={{
            mb: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component="h1" variant="h5" fontWeight="medium">
            Add new blog
          </Typography>

          <TextField
            sx={{ minWidth: 400, mb: 3 }}
            id="title"
            variant="outlined"
            label="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />

          <TextField
            sx={{ minWidth: 400, mb: 3 }}
            id="author"
            variant="outlined"
            label="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.author && Boolean(formik.errors.author)}
            helperText={formik.touched.author && formik.errors.author}
          />
          <TextField
            sx={{ minWidth: 400, mb: 3 }}
            id="url"
            variant="outlined"
            label="url:"
            value={formik.values.url}
            margin="normal"
            error={formik.touched.url && Boolean(formik.errors.url)}
            helperText={formik.touched.url && formik.errors.url}
            onChange={formik.handleChange}
          />
          <Button
            sx={{ color: "white" }}
            id="add-button"
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogForm;
