import "../styles/Userpage.css";
import EditProfile from "./EditProfile";
import Header from "./Header";
import React from "react";
const Userpage = () => {
  const [enableProfileEdit, setVaribaleForProfileEdit] = React.useState(false);
  const editProfile = () => {
    setVaribaleForProfileEdit(!enableProfileEdit);
  };
  return (
    <>
      <div id="userpage_container">
        <Header
          pages={[]}
          showUser={true}
          settings={[
            "Profile",
            "Edit Profile",
            "Account",
            "Dashboard",
            "Logout",
          ]}
          operations={[editProfile]}
        ></Header>
        {enableProfileEdit ? <EditProfile></EditProfile> : null}
      </div>
    </>
  );
};

export default Userpage;
