import axios from "axios";
const baseUrl = `https://blogreview-backend.herokuapp.com/api/blogs`;

const getAll = (id) => {
  const request = axios.get(`${baseUrl}/${id}/comments`);
  return request.then((response) => response.data);
};

export default { getAll };
