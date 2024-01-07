import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
import LinearIndeterminate from "./mui/LinearIndeterminate";
import { useNavigate } from "react-router-dom";
import apiAuthUser from "../api/apiAtuhUser";
import CustomizedSwitches from "../components/mui/CustomizedSwitches";
const Loadingpage = () => {
  const [homepage, setHomepage] = useState(false);
  useEffect(() => {
    setHomepage(true);
  }, []);
  const navigate = useNavigate();
  const redirectToUserpage = () => {
    navigate("/userpage");
  };
  useEffect(() => {
    apiAuthUser()
      .then((res) => {
        if (res.success) {
          redirectToUserpage();
        } else {
          console.log("user not auth");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {homepage ? (
        <Homepage></Homepage>
      ) : (
        <LinearIndeterminate></LinearIndeterminate>
      )}
    </>
  );
};
export default Loadingpage;
