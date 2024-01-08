import "../styles/Userpage.css";
import { useNavigate } from "react-router-dom";
const Userpage = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div id="userpage_container">
        hello
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default Userpage;
