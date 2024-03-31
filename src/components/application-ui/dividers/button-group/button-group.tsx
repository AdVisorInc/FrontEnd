import WeeklyIcon from '@mui/icons-material/DateRangeTwoTone';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import DailyIcon from '@mui/icons-material/TodayTwoTone';
import {
  Button,
  ButtonGroup,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

type Alignment = 'left' | 'center' | 'right' | 'justify';

const Component = () => {
  const [alignment, setAlignment] = useState<Alignment>('left');

  const handleAlignment = (event: ChangeEvent<{}>, newAlignment: Alignment | null) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Stack spacing={4}>
      <Divider>
        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="aria-label"
        >
          <Button>Daily</Button>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
        </ButtonGroup>
      </Divider>
      <Divider>
        <ButtonGroup
          color="secondary"
          variant="contained"
          aria-label="aria-label"
        >
          <Button>
            <KeyboardArrowLeftTwoToneIcon />
          </Button>
          <Button>
            <KeyboardArrowRightTwoToneIcon />
          </Button>
        </ButtonGroup>
      </Divider>
      <Divider>
        <ButtonGroup
          size="small"
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
      </Divider>
      <Divider sx={{ '.MuiDivider-wrapper': { p: 0 } }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          size="small"
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
          >
            <FormatAlignLeftIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="center"
            aria-label="centered"
          >
            <FormatAlignCenterIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="right"
            aria-label="right aligned"
          >
            <FormatAlignRightIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Divider>
    </Stack>
  );
};

export default Component;
