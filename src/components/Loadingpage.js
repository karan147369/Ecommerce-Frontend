import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
import LinearIndeterminate from "./mui/LinearIndeterminate";

const Loadingpage = () => {
  const [homepage, setHomepage] = useState(false);
  useEffect(() => {
    setHomepage(true);
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
