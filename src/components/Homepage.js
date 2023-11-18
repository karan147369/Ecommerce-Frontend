import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Userpage from "./Userpage";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import "../styles/Homepage.css";
import LinearIndeterminate from "./mui/LinearIndeterminate";
import { Button } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
const Homepage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showRegistration, setRegistration] = useState(false);
  const showRegisterationPage = () => {
    setRegistration(!showRegistration);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  const getUi = () => {
    return (
      <>
        <ErrorBoundary FallbackComponent={<div>Something went wrong</div>}>
          <div id="homepage_container">
            <Header searchbar={Searchbar}></Header>
            <Button
              variant="outlined"
              onClick={showRegisterationPage}
              style={{ marginTop: "1%" }}
            >
              {showRegistration ? "Login ?" : "Register ?"}
            </Button>

            {showRegistration ? <Register></Register> : <Login></Login>}
          </div>
        </ErrorBoundary>
      </>
    );
  };
  return (
    <>{showLoader ? <LinearIndeterminate></LinearIndeterminate> : getUi()}</>
  );
};
export default Homepage;
