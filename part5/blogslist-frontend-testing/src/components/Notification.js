import "../Index.css";
import Alert from "@mui/material/Alert";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <Alert sx={{ zIndex: 100, color: `common.black` }}>{message}</Alert>;
};

export default Notification;
