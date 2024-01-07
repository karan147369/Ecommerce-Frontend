import axios from "axios";
const apiAuthUser = async () => {
  const url = process.env.REACT_APP_AUTH_USER_URL;
  const response = await axios.get(url, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export default apiAuthUser;
