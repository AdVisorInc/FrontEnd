import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpIcon from '@mui/icons-material/Help';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  alpha,
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const icons = [
    {
      label: 'Visibility',
      Icon: VisibilityIcon,
      uncheckedIcon: VisibilityOffIcon,
      color: 'primary',
      position: 'top',
    },
    {
      label: 'Favorites',
      Icon: FavoriteIcon,
      uncheckedIcon: FavoriteBorderIcon,
      color: 'warning',
      position: 'end',
    },
    {
      label: 'Bookmarks',
      Icon: BookmarkIcon,
      uncheckedIcon: BookmarkBorderIcon,
      color: 'success',
      position: 'bottom',
    },
    {
      label: 'Help',
      Icon: HelpIcon,
      uncheckedIcon: QuestionMarkIcon,
      color: 'error',
      position: 'start',
    },
  ];

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
      }}
    >
      <CardContent>
        <Box pb={2}>
          <Typography variant="h5">App Features</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Explore the various features of our application.
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              underline="hover"
            >
              Learn more
            </Link>
          </Typography>
        </Box>
        <FormGroup
          sx={{
            backgroundColor: 'background.paper',
          }}
          row={smUp}
          aria-labelledby="checkbox-buttons-group-label"
        >
          <Grid
            container
            alignItems="center"
            sx={{
              '--Grid-borderWidth': '1px',
              borderTop: 'var(--Grid-borderWidth) solid',
              borderLeft: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
              },
            }}
          >
            {icons.map((iconInfo) => (
              <Grid
                xs={12}
                sm={6}
                item
                key={iconInfo.label}
              >
                <Box
                  p={{ xs: 2, sm: 3 }}
                  minHeight={130}
                  display="flex"
                  justifyContent="center"
                >
                  <FormControlLabel
                    //@ts-ignore
                    labelPlacement={iconInfo.position}
                    control={
                      <Checkbox
                        //@ts-ignore
                        color={iconInfo.color}
                        icon={<iconInfo.uncheckedIcon sx={{ fontSize: 32 }} />}
                        checkedIcon={<iconInfo.Icon sx={{ fontSize: 32 }} />}
                      />
                    }
                    label={iconInfo.label}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default Component;
