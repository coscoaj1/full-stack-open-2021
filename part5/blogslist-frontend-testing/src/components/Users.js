import "../Index.css";
import { Link } from "react-router-dom";

import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },

//   link: {
//     textDecoration: "none",
//     color: "white",
//   },
// });

const Users = ({ users }) => {
  return (
    <div>
      <TableContainer className="table" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Users</Typography>
              </TableCell>
              <TableCell>
                <Typography>Blogs created</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  <Typography variant="h5">
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{user.blogs.length}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
