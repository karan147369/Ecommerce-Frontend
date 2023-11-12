import axios from "axios";
const apiLogin = async (email, password) => {
  const response = await axios.post("http://localhost:4000/login/email", {
    email,
    password,
  });

  if (!response.data.status) {
    return {
      status: false,
      message: response.data.message,
    };
  } else {
    return {
      status: true,
      message: "login successful",
    };
  }
};
export default apiLogin;
