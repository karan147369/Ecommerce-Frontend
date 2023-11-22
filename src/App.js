import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Userpage from "./components/Userpage";
import Loadingpage from "./components/Loadingpage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loadingpage />}></Route>
          <Route path="/userpage" element={<Userpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
