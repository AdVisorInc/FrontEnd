import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import {
  Button,
  Card,
  CardContent,
  ClickAwayListener,
  Divider,
  Stack,
  Theme,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Card>
      <CardContent>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          spacing={2}
        >
          <Tooltip
            placement="top"
            arrow
            title="Tooltip with arrow, top positioned"
          >
            <ButtonIcon
              variant="outlined"
              color="secondary"
              startIcon={<AccessAlarmRoundedIcon />}
            />
          </Tooltip>
          <Tooltip
            placement="bottom"
            title="Bottom tooltip without arrow"
          >
            <Button
              variant="outlined"
              color="secondary"
            >
              Tooltip hover
            </Button>
          </Tooltip>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              title="Tooltip triggered on click"
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              arrow
              placement="top-end"
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <Button
                onClick={handleTooltipOpen}
                variant="outlined"
                color="secondary"
              >
                Tooltip click
              </Button>
            </Tooltip>
          </ClickAwayListener>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
