import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeRoute } from "../../store/features/routerReducer";
import { Container } from "@mui/material";
import { RootState } from "../../store";
import { doLogout } from "../../store/features/userReducer";

export default function AppBar() {
  const dispatch = useDispatch();
  const changeRouteDispatch = (route: string) => dispatch(changeRoute(route));
  const { currentUser } = useSelector((state: RootState) => state.users);
  const logout = () => dispatch(doLogout());

  return (
    <Box sx={{ flexGrow: 1 }} mb="79px">
      <AppBarMui position="fixed">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" onClick={() => changeRouteDispatch("/")}>
                MensApp
              </Button>
            </Box>
            {!currentUser && (
              <>
                <Button
                  color="inherit"
                  onClick={() => changeRouteDispatch("/login")}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  onClick={() => changeRouteDispatch("/register")}
                >
                  Cadastro
                </Button>
              </>
            )}
            {currentUser && (
              <Button color="inherit" onClick={() => logout()}>
                Sair
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBarMui>
    </Box>
  );
}
