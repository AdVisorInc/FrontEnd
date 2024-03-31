import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  MenuItem,
  Select,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import AlertProgressAlternate from 'src/components/application-ui/alerts/progress-alternate/alert-progress-alternate';
import EmptyStateNextSteps from 'src/components/application-ui/empty-states/next-steps/next-steps';
import EmptyStateRecommandations from 'src/components/application-ui/empty-states/recommandations/recommandations';
import { TabsAlternate } from 'src/components/base/styles/tabs';

const Component = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState('0');

  const handleTabChange = (event, newValue) => {
    setValue(String(newValue));
  };

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

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
                : `url("/placeholders/covers/landscape2.png")`,
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
              Open Tabs Dialog
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="basic-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
              >
                Settings
              </Typography>
              <Typography variant="h6">Onboarding process</Typography>
            </Box>
            <IconButton
              size="small"
              onClick={handleClose}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />
        <CardHeader
          sx={{
            '.MuiCardHeader-content': {
              overflow: 'visible',
            },
          }}
          disableTypography
          title={
            smUp ? (
              <>
                <TabsAlternate
                  value={Number(value)}
                  onChange={handleTabChange}
                  variant="fullWidth"
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab label="My Account" />
                  <Tab label="Invite Members" />
                  <Tab label="Setup" />
                </TabsAlternate>
              </>
            ) : (
              <Select
                value={value}
                onChange={handleSelectChange}
                fullWidth
              >
                <MenuItem value="0">My Account</MenuItem>
                <MenuItem value="1">Invite Members</MenuItem>
                <MenuItem value="2">Setup</MenuItem>
              </Select>
            )
          }
        />
        <Divider />
        <DialogContent
          dividers
          sx={{ p: 0 }}
        >
          {value === '0' && (
            <Box py={3}>
              <AlertProgressAlternate />
            </Box>
          )}
          {value === '1' && (
            <Box p={{ xs: 2, sm: 3 }}>
              <EmptyStateRecommandations />
            </Box>
          )}
          {value === '2' && <EmptyStateNextSteps />}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Component;
