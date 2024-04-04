import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { alpha, Box, Button, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { CustomizationConsumer } from 'src/contexts/customization';
import { CustomizationDialog } from './customization-dialog';

const Component = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDialogOpen = (): void => {
    setOpen(true);
  };

  const handleDialogClose = (): void => {
    setOpen(false);
  };

  return (
    <CustomizationConsumer>
      {(settings) => {
        return (
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
                  startIcon={<DisplaySettingsTwoToneIcon />}
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={handleDialogOpen}
                >
                  Open template customization
                </Button>
              </CardContent>
            </Card>
            <CustomizationDialog
              open={open}
              onClose={handleDialogClose}
              canReset={settings.isCustom}
              onReset={settings.handleReset}
              onUpdate={settings.handleUpdate}
              values={{
                colorPreset: settings.colorPreset,
                direction: settings.direction,
                paletteMode: settings.paletteMode,
                stretch: settings.stretch,
                layout: settings.layout,
              }}
            />
          </Box>
        );
      }}
    </CustomizationConsumer>
  );
};

export default Component;
