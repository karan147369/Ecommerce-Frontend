import axios from "axios";
const apiAuthUser = async () => {
  const url = process.env.REACT_APP_AUTH_USER_URL;
  const response = await axios.post(
    url,
    {
      token: localStorage.getItem("token"),
    },
    {
      headers: {
        apikey: process.env.REACT_APP_API_KEY,
      },
    }
  );
  return response.data;
};
export default apiAuthUser;
