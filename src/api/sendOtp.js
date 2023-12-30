import axios from "axios";
const sendOtp = async (email) => {
  try {
    const resonse = await axios.post(
      process.env.REACT_APP_SENDOTP,
      {
        email: email,
      },
      { headers: { apiKey: process.env.REACT_APP_API_KEY } }
    );
    return { status: true, message: "otp sent" };
  } catch (e) {
    return { status: false, message: "Something went wrong" };
  }
};
export default sendOtp;
