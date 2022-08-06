import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Message as MessageType } from "../../../types";
import { dateTimeConventionalString } from "../../../util/dateTime";

export const Message = ({ message }: { message: MessageType }) => {
  return (
    <Paper>
      <Box display="flex" gap="15px" component="article" p={2}>
        <Avatar src={message?.user.picture} />
        <Box>
          <Typography component="h3" variant="body1">
            {message?.description}
          </Typography>
          <Box display="flex" gap="15px">
            <Typography component="p" variant="body2" color="textSecondary">
              {message?.user.name}
            </Typography>

            <Typography component="p" variant="body2" color="textSecondary">
              {dateTimeConventionalString(message?.createdAt)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
