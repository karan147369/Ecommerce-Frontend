import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Userpage from "./components/Userpage";
import Loadingpage from "./components/Loadingpage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const changeDarkTheme = useSelector((state) => state.colorThemeReducer.value);
  const darkTheme = createTheme({
    palette: {
      mode: changeDarkTheme,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loadingpage />}></Route>
            <Route path="/userpage" element={<Userpage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
