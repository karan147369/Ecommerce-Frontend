import axios from "axios";
const url = "https://karan147369-ecommerce-backend.onrender.com/login";
//"https://karan147369-ecommerce-backend.onrender.com/login"
//http://localhost:4000/login/
const apiLogin = async (email, password) => {
  const response = await axios.post(url + "email", {
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
const apiLoginWithMobile = async (mobileNumber, password) => {
  const response = await axios.post(url + "mobile", {
    mobileNumber,
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
export { apiLogin, apiLoginWithMobile };
