import "./App.css";

import ParentComponent from "./Components/ParentComponent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"],
    },
    palette: {
      primary: {
        main: "#f50057", // Custom primary color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          direction: "rtl",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <ParentComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
