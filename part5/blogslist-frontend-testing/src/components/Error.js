import "../Index.css";

const ErrorMessage = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="error">{message}</div>;
};

export default ErrorMessage;
