import axios from "axios";
const baseUrl = "https://blogreview-backend.herokuapp.com/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  console.log(config);

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (id, updatedBlog) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.put(`${baseUrl}/${id}`, updatedBlog, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const comment = async (id, comment) => {
  console.log(comment);
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(
    `${baseUrl}/${id}/comments`,
    comment,
    config
  );

  return response.data;
};

export default { getAll, create, setToken, update, remove, comment };
