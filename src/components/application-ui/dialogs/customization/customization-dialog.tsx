import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import PropTypes from 'prop-types';
import React, { FC, forwardRef, ReactElement, Ref, useCallback } from 'react';
import { Customization } from 'src/contexts/customization';
import { OptionsColorPreset } from './color-preset';
import { OptionsColorScheme } from './color-scheme';
import { OptionsDirection } from './direction';
import { OptionsLayout } from './layout';
import { OptionsStretch } from './stretch';

interface CustomizationDialogProps {
  canReset?: boolean;
  hiddenLayoutsSection?: boolean;
  onClose?: () => void;
  onReset?: () => void;
  onUpdate?: (settings: Customization) => void;
  open: boolean;
  values?: Customization;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return (
    <Slide
      direction="down"
      ref={ref}
      {...props}
    />
  );
});

export const CustomizationDialog: FC<CustomizationDialogProps> = (props) => {
  const {
    canReset,
    onClose,
    onUpdate,
    onReset,
    hiddenLayoutsSection,
    open,
    values = {},
    ...other
  } = props;
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleFieldUpdate = useCallback(
    (field: keyof Customization, value: unknown): void => {
      onUpdate?.({
        [field]: value,
      });
    },
    [onUpdate]
  );

  return (
    <>
      <Dialog
        onClose={onClose}
        open={open}
        TransitionComponent={Transition}
        fullScreen={!mdUp}
        scroll="paper"
        aria-labelledby="basic-dialog-title"
        maxWidth="lg"
        fullWidth
        {...other}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={600}
            >
              Theme Customization
            </Typography>
          </Box>
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
          >
            <Link
              variant="body2"
              href=""
              color={canReset ? 'primary' : 'text.disabled'}
              underline={canReset ? 'hover' : 'none'}
              onClick={(e) => {
                e.preventDefault();
                onReset();
              }}
            >
              Reset
            </Link>
            <IconButton
              onClick={onClose}
              size="small"
            >
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <Divider />
        <Stack
          spacing={0}
          direction="row"
          height="100%"
          overflow="hidden"
        >
          <DialogContent sx={{ overflowX: 'hidden', p: 0 }}>
            <OptionsColorPreset
              onChange={(value) => handleFieldUpdate('paletteMode', value)}
              value={values.paletteMode}
            />
            {!hiddenLayoutsSection && (
              <>
                <Divider />
                <OptionsLayout
                  onChange={(value) => handleFieldUpdate('layout', value)}
                  value={values.layout}
                />
              </>
            )}
            <Divider />
            <OptionsColorScheme
              onChange={(value) => handleFieldUpdate('colorPreset', value)}
              value={values.colorPreset}
            />
            <Divider />
            <Stack
              justifyContent="space-evenly"
              alignItems={{ xs: 'normal', sm: 'center' }}
              direction={{ xs: 'column', md: 'row' }}
              divider={
                <Divider
                  flexItem
                  orientation={mdUp ? 'vertical' : 'horizontal'}
                />
              }
            >
              <OptionsStretch
                onChange={(value) => handleFieldUpdate('stretch', value)}
                value={values.stretch}
              />
              <OptionsDirection
                onChange={(value) => handleFieldUpdate('direction', value)}
                value={values.direction}
              />
            </Stack>
          </DialogContent>
        </Stack>
        <Divider />
        <DialogActions
          sx={{
            flexDirection: { xs: 'column-reverse', sm: 'row' },

            '& > :not(:first-of-type)': {
              marginLeft: { xs: 0, sm: theme.spacing(1) },
              marginBottom: { xs: theme.spacing(1), sm: 0 },
            },
          }}
        >
          <Button
            variant="outlined"
            color="error"
            autoFocus
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
            onClick={onReset}
            fullWidth
            disabled={!canReset}
          >
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CustomizationDialog.propTypes = {
  canReset: PropTypes.bool,
  hiddenLayoutsSection: PropTypes.bool,
  onClose: PropTypes.func,
  onReset: PropTypes.func,
  onUpdate: PropTypes.func,
  open: PropTypes.bool,
  values: PropTypes.object,
};
