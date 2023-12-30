import axios from "axios";
const apiRegister = async (userData) => {
  try {
    console.log(process.env.REACT_APP_REGISTERURL);
    const response = await axios.post(
      process.env.REACT_APP_REGISTERURL,
      userData,
      { headers: { apiKey: process.env.REACT_APP_API_KEY } }
    );
    console.log(response);
    return response.data;
  } catch (e) {
    return {
      status: false,
      message: e,
    };
  }
};
export default apiRegister;
