import { Box, Typography } from "@mui/material";
import { useMessages } from "../../hooks/useMessages";
import { Message } from "./components/Message";

const Home = () => {
  const { data } = useMessages();
  return (
    <>
      <Typography component="h1" variant="h4">
        Mensagens de hoje
      </Typography>
      <Box display="flex" flexDirection="column" gap="15px">
        {data?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
    </>
  );
};

export default Home;
