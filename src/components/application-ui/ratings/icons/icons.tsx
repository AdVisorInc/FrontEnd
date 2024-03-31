import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Rating, Stack, styled, Typography } from '@mui/material';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: theme.palette.error.light,
  },
  '& .MuiRating-iconHover': {
    color: theme.palette.error.main,
  },
}));

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Box>
        <Typography
          component="legend"
          variant="h5"
          gutterBottom
        >
          Custom icon and color
        </Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>
      <Box>
        <Typography
          component="legend"
          variant="h5"
          gutterBottom
        >
          10 Stars
        </Typography>
        <Rating
          name="customized-10"
          defaultValue={2}
          max={10}
        />
      </Box>
    </Stack>
  );
};

export default Component;
