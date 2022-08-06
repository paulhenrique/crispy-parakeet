import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeRoute } from "../../store/features/routerReducer";
import {
  Avatar,
  Container,
  Fade,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { RootState } from "../../store";
import { doLogout } from "../../store/features/userReducer";
import { useState } from "react";

export default function AppBar() {
  const dispatch = useDispatch();
  const changeRouteDispatch = (route: string) => dispatch(changeRoute(route));
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(doLogout());
    handleClose();
  };

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
              <>
                <IconButton onClick={handleClick}>
                  <Avatar src={currentUser.picture} />
                </IconButton>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBarMui>
    </Box>
  );
}
