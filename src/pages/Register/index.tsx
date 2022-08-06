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
import { useCreateUsers } from "../../hooks/useCreateUsers";
import { User } from "../../types";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const createUser = useCreateUsers();

  const onSubmit = (data: User) => {
    createUser.mutate(data);
  };

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
                  Novo cadastro
                </Typography>
                {createUser.error && (
                  <Alert severity="error">
                    <AlertTitle>Erro</AlertTitle>
                    Houve um problema durante o seu cadastro, por favor tente
                    novamente. Caso o problema persista entre em contato com
                    administração.
                  </Alert>
                )}

                {createUser.isSuccess && (
                  <Alert severity="success">
                    <AlertTitle>Sucesso</AlertTitle>
                    Seu usuário foi criado com sucesso —{" "}
                    <Link to="/login">
                      <strong>clique aqui para fazer login!</strong>
                    </Link>
                  </Alert>
                )}

                <TextField
                  disabled={createUser.isLoading || createUser.isSuccess}
                  {...register("name", { required: true })}
                  error={Boolean(errors["name"])}
                  label="Nome"
                  helperText={
                    Boolean(errors["name"]) && "Este campo é obrigatório"
                  }
                />
                <TextField
                  disabled={createUser.isLoading || createUser.isSuccess}
                  {...register("picture", { required: true })}
                  error={Boolean(errors["picture"])}
                  label="Foto"
                  helperText={
                    Boolean(errors["picture"]) && "Este campo é obrigatório"
                  }
                />
                <TextField
                  disabled={createUser.isLoading || createUser.isSuccess}
                  {...register("password", { required: true })}
                  error={Boolean(errors["password"])}
                  type="password"
                  label="Senha"
                  helperText={
                    Boolean(errors["password"]) && "Este campo é obrigatório"
                  }
                />
                <LoadingButton
                  startIcon={<AiOutlineRight />}
                  type="submit"
                  variant="contained"
                  disabled={createUser.isSuccess}
                  loading={createUser.isLoading}
                >
                  Cadastrar
                </LoadingButton>
              </>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Register;
