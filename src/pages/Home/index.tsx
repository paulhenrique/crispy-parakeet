import { Container } from "@mui/material";
import { useMessages } from "../../hooks/useMessages";

const Home = () => {
  const { data } = useMessages();
  return (
    <Container>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  );
};

export default Home;
