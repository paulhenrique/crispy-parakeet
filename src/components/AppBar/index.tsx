import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { changeRoute } from "../../store/features/routerReducer";

export default function AppBar() {
  const dispatch = useDispatch();
  const changeRouteDispatch = (route: string) => dispatch(changeRoute(route));

  return (
    <Box sx={{ flexGrow: 1 }} mb="79px">
      <AppBarMui position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={() => changeRouteDispatch("/")}>
              MensApp
            </Button>
          </Box>

          <Button color="inherit" onClick={() => changeRouteDispatch("/login")}>
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => changeRouteDispatch("/register")}
          >
            Cadastro
          </Button>
        </Toolbar>
      </AppBarMui>
    </Box>
  );
}
