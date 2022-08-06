import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useCreateMessage } from "../../hooks/useCreateMessage";
import { useMessages } from "../../hooks/useMessages";
import { Message } from "./components/Message";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import { changeRoute } from "../../store/features/routerReducer";

const Home = () => {
  const { data } = useMessages();
  const [message, setMessage] = useState("");
  const createMessage = useCreateMessage();
  const { currentUser } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const fireCreateMessage = () => {
    if (!currentUser?.id) {
      dispatch(changeRoute("/login"));
      return;
    }
    createMessage.mutate({
      description: message,
      userId: currentUser?.id,
    });
  };

  return (
    <>
      <Typography component="h1" variant="h4">
        Mensagens de hoje
      </Typography>
      <TextField onChange={({ target: { value } }) => setMessage(value)} />
      <LoadingButton variant="contained" onClick={() => fireCreateMessage()}>
        Enviar
      </LoadingButton>
      <Box display="flex" flexDirection="column" gap="15px">
        {data?.map((messageEl) => (
          <Message key={messageEl.id} message={messageEl} />
        ))}
      </Box>
    </>
  );
};

export default Home;
