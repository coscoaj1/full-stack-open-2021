import axios from "axios";
const baseUrl = "https://blogreview-backend.herokuapp.com/api/users";

const getUsers = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data);
  return response.data;
};

export default { getUsers };
