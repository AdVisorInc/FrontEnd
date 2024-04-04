import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import { CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { CardAddActionDashed } from 'src/components/base/styles/card';

const EmptyStateDashedAction = () => {
  return (
    <CardAddActionDashed
      variant="outlined"
      elevation={0}
    >
      <CardActionArea>
        <CardContent>
          <Stack
            spacing={1}
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <NoteAddTwoToneIcon sx={{ fontSize: 34 }} />
            <Typography
              textAlign="center"
              variant="h6"
              fontWeight={500}
            >
              Create new notebook entry
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CardAddActionDashed>
  );
};

export default EmptyStateDashedAction;
