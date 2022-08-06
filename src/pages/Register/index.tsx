import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import RegisterDraw from "../../assets/register_draw.svg";
import { AiOutlineRight } from "react-icons/ai";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
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
            <Typography component="h1" variant="h4">
              Novo cadastro
            </Typography>
            <TextField
              {...register("name", { required: true })}
              error={Boolean(errors["name"])}
              label="Nome"
              helperText={Boolean(errors["name"]) && "Este campo é obrigatório"}
            />
            <TextField
              {...register("picture", { required: true })}
              error={Boolean(errors["picture"])}
              label="Foto"
              helperText={
                Boolean(errors["picture"]) && "Este campo é obrigatório"
              }
            />
            <TextField
              {...register("password", { required: true })}
              error={Boolean(errors["password"])}
              type="password"
              label="Senha"
              helperText={
                Boolean(errors["password"]) && "Este campo é obrigatório"
              }
            />
            <TextField
              {...register("passwordConfirm", { required: true })}
              error={Boolean(errors["passwordConfirm"])}
              type="password"
              label="Confirmação da senha"
              helperText={
                Boolean(errors["passwordConfirm"]) && "Este campo é obrigatório"
              }
            />
            <Button
              startIcon={<AiOutlineRight />}
              type="submit"
              variant="contained"
            >
              Cadastrar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default Register;
