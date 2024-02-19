import "./App.css";
import AllRoutes from "./routes";
import { Provider } from "react-redux";
import { theme } from "theme";
import store from "./store";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AllRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
