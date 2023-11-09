import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Userpage from "./Userpage";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import "../styles/Homepage.css";
import LinearIndeterminate from "./mui/LinearIndeterminate";
import { Button } from "@mui/material";
const Homepage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showRegistration, setRegistration] = useState(false);
  const showRegisterationPage = () => {
    setRegistration(!showRegistration);
  };
  useEffect(() => {
    setTimeout(() => {
      console.log("a");
      setShowLoader(false);
    }, 2000);
  }, []);
  const getUi = () => {
    return (
      <>
        <div id="homepage_container">
          <Header searchbar={Searchbar}></Header>
          <Button
            variant="outlined"
            onClick={showRegisterationPage}
            style={{ marginTop: "1%" }}
          >
            {showRegistration ? "Registertion Page" : "Login Page"}
          </Button>

          {showRegistration ? <Register></Register> : <Login></Login>}
        </div>
      </>
    );
  };
  return (
    <>{showLoader ? <LinearIndeterminate></LinearIndeterminate> : getUi()}</>
  );
};
export default Homepage;
