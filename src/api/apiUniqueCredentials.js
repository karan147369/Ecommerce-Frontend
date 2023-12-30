import axios from "axios";
const checkForEmail = async (email) => {
  const response = await axios.post(
    "https://karan147369-ecommerce-backend.onrender.com/check_unique_email",
    { email: email },
    { headers: { apiKey: process.env.REACT_APP_API_KEY } }
  );
  return response.data;
};
const checkForMobileNumber = async (number) => {
  const response = await axios.post(
    "https://karan147369-ecommerce-backend.onrender.com/check_unique_mobile_number",
    { number: number },
    { headers: { apiKey: process.env.REACT_APP_API_KEY } }
  );
  return response.data;
};
export { checkForEmail, checkForMobileNumber };
