import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./theme";
import "./App.css";
import Home from "./pages/Home";
import { Reset } from "styled-reset";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
