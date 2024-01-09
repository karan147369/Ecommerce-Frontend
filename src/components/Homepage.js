import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Userpage from "./Userpage";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import "../styles/Homepage.css";
import { Button } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import CustomizedSwitches from "./mui/CustomizedSwitches";
const Homepage = () => {
  const [showRegistration, setRegistration] = useState(false);
  const showRegisterationPage = () => {
    setRegistration(!showRegistration);
  };
  const getUi = () => {
    return (
      <>
        <ErrorBoundary FallbackComponent={<div>Something went wrong</div>}>
          <div id="homepage_container">
            <Header
              searchbar={Searchbar}
              pages={[]}
              showUser={false}
              settings={[]}
            ></Header>
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
  return <>{getUi()}</>;
};
export default Homepage;
