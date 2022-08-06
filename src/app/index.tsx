import Providers from "../providers";
import Router from "../router";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <Providers>
      <Router />
      <CssBaseline />
    </Providers>
  );
};

export default App;
