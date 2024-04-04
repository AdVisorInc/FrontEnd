import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import RadioCardsImageGroup from 'src/components/application-ui/radio-groups/cards-image/cards-image-group';
import VerticalMenuIndicatorPrimary from 'src/components/application-ui/vertical-menus/indicator/menu-indicator-primary';
import { Scrollbar } from 'src/components/base/scrollbar';
import { SIDEBAR_WIDTH } from 'src/theme/utils';
import { DialogMenuMobile } from './dialog-mobile-menu';

const Component = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <>
      <Box
        width="100%"
        position="relative"
        display="flex"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="center"
      >
        <Box
          sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            filter: 'grayscale(50%)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: (theme) =>
              theme.palette.mode === 'dark'
                ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders/covers/landscape4.png")`
                : `url("/placeholders/covers/landscape4.png")`,
          }}
        />
        <Card
          elevation={24}
          sx={{
            mt: { xs: 3, md: 0 },
            position: 'relative',
            display: 'flex',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.background.paper, 0.97)
                : alpha(theme.palette.background.paper, 0.8),
            backgroundFilter: 'blur(8px)',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 1,
          }}
        >
          <CardContent>
            <Button
              endIcon={<ArrowRightAltTwoToneIcon />}
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleClickOpen}
            >
              Open Full-Screen Dialog
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Dialog
        open={open}
        fullScreen={!mdUp}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="basic-dialog-title"
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            pb: 0,
          }}
        >
          {!mdUp && <DialogMenuMobile />}

          <Box>
            <Typography
              variant="h3"
              fontWeight={600}
            >
              Settings
            </Typography>
          </Box>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              position: 'absolute',
              top: { xs: theme.spacing(0.5), sm: theme.spacing(1.5) },
              right: { xs: theme.spacing(0.5), sm: theme.spacing(1.5) },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <Stack
          spacing={0}
          direction="row"
          height="100%"
          overflow="hidden"
        >
          {mdUp && (
            <>
              <Box
                sx={{
                  overflow: 'visible',
                  width: SIDEBAR_WIDTH / 1.1,
                  minWidth: SIDEBAR_WIDTH / 1.1,
                }}
              >
                <Box
                  pr={2}
                  py={2}
                >
                  <Scrollbar dark>
                    <VerticalMenuIndicatorPrimary />
                  </Scrollbar>
                </Box>
              </Box>
            </>
          )}
          <DialogContent sx={{ pr: 2 }}>
            <RadioCardsImageGroup />
          </DialogContent>
        </Stack>
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
            color="secondary"
            autoFocus
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
            autoFocus
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Component;
