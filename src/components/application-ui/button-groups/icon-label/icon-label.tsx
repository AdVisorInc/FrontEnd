import WeeklyIcon from '@mui/icons-material/DateRangeTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import DailyIcon from '@mui/icons-material/TodayTwoTone';
import { Button, ButtonGroup, Divider, Stack } from '@mui/material';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ButtonGroup
          size="small"
          variant="contained"
          aria-label="aria-label"
        >
          <Button startIcon={<DailyIcon fontSize="small" />}>Daily</Button>

          <Button
            endIcon={<KeyboardArrowDownTwoToneIcon fontSize="small" />}
            startIcon={<WeeklyIcon fontSize="small" />}
          >
            Weekly
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="aria-label"
        >
          <Button startIcon={<DailyIcon />}>Daily</Button>
          <Button startIcon={<WeeklyIcon />}>Weekly</Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="aria-label"
        >
          <Button startIcon={<DailyIcon />}>Daily</Button>
          <Button
            endIcon={<KeyboardArrowDownTwoToneIcon fontSize="small" />}
            startIcon={<WeeklyIcon />}
          >
            Weekly
          </Button>
        </ButtonGroup>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ButtonGroup
          size="small"
          variant="outlined"
          color="secondary"
          aria-label="aria-label"
        >
          <Button startIcon={<DailyIcon fontSize="small" />}>Daily</Button>
          <Button
            startIcon={<WeeklyIcon />}
            endIcon={<KeyboardArrowDownTwoToneIcon />}
          >
            Weekly
          </Button>
        </ButtonGroup>
        <ButtonGroup
          color="secondary"
          variant="outlined"
          aria-label="aria-label"
        >
          <Button startIcon={<DailyIcon />}>Daily</Button>
          <Button startIcon={<WeeklyIcon />}>Weekly</Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="secondary"
          variant="outlined"
          aria-label="aria-label"
        >
          <Button startIcon={<DailyIcon />}>Daily</Button>
          <Button
            startIcon={<WeeklyIcon />}
            endIcon={<KeyboardArrowDownTwoToneIcon />}
          >
            Weekly
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default Component;
