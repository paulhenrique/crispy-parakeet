import {
  Alert,
  AlertTitle,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import RegisterDraw from "../../assets/register_draw.svg";
import { AiOutlineRight } from "react-icons/ai";
import { User } from "../../types";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../store/features/userReducer";
import { changeRoute } from "../../store/features/routerReducer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const login = useLogin();

  const onSubmit = (data: User) => {
    login.mutate(data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (login.isSuccess) {
      dispatch(doLogin(login.data));
      dispatch(changeRoute("/"));
    }
  }, [login]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing="15px"
          height="calc(100vh - 72px)"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img width="100%" src={RegisterDraw} />
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" flexDirection="column" gap="15px">
              <>
                <Typography component="h1" variant="h4">
                  Entrar
                </Typography>
                {login.error && (
                  <Alert severity="error">
                    <AlertTitle>Erro</AlertTitle>
                    Usuário/senha não foi encontrado
                  </Alert>
                )}

                {login.isSuccess && (
                  <Alert severity="success">
                    <AlertTitle>Sucesso</AlertTitle>
                    Seu usuário foi criado com sucesso —{" "}
                    <Link to="/login">
                      <strong>clique aqui para fazer login!</strong>
                    </Link>
                  </Alert>
                )}

                <TextField
                  disabled={login.isLoading || login.isSuccess}
                  {...register("name", { required: true })}
                  error={Boolean(errors["name"])}
                  label="Nome"
                  helperText={
                    Boolean(errors["name"]) && "Este campo é obrigatório"
                  }
                />
                <TextField
                  disabled={login.isLoading || login.isSuccess}
                  {...register("password", { required: true })}
                  error={Boolean(errors["password"])}
                  type="password"
                  label="Senha"
                  helperText={
                    Boolean(errors["password"]) && "Este campo é obrigatório"
                  }
                />
                <LoadingButton
                  endIcon={<AiOutlineRight />}
                  type="submit"
                  variant="contained"
                  disabled={login.isSuccess}
                  loading={login.isLoading}
                >
                  Entrar
                </LoadingButton>
              </>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Login;
