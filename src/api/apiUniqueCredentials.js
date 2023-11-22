import axios from "axios";
const checkForEmail = async (email) => {
  const response = await axios.post(
    "https://karan147369-ecommerce-backend.onrender.com/check_unique_email",
    { email: email }
  );
  return response.data;
};
const checkForMobileNumber = async (number) => {
  const response = await axios.post(
    "https://karan147369-ecommerce-backend.onrender.com/check_unique_mobile_number",
    { number: number }
  );
  return response.data;
};
export { checkForEmail, checkForMobileNumber };
