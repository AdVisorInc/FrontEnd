import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import { IconButton, Tooltip } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomizationDialog } from 'src/components/application-ui/dialogs/customization/customization-dialog';
import { CustomizationConsumer } from 'src/contexts/customization';
import { usePathname } from 'src/hooks/use-pathname';

interface CustomizationButtonProps {
  color?: 'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success' | 'error';
  sx?: object;
}

const CustomizationButton: FC<CustomizationButtonProps> = ({ color = 'inherit', sx = {} }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleDialogOpen = (): void => {
    setOpen(true);
  };

  const handleDialogClose = (): void => {
    setOpen(false);
  };

  const pathname = usePathname();
  const shouldHideLayoutsSection = pathname.includes('/shells/');

  return (
    <CustomizationConsumer>
      {(settings) => {
        return (
          <>
            <Tooltip
              placement="bottom-end"
              arrow
              title={t('Customization options')}
            >
              <IconButton
                color={color}
                onClick={handleDialogOpen}
                sx={{
                  ...sx,
                }}
              >
                <DisplaySettingsRoundedIcon />
              </IconButton>
            </Tooltip>
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
              hiddenLayoutsSection={shouldHideLayoutsSection}
            />
          </>
        );
      }}
    </CustomizationConsumer>
  );
};

export default CustomizationButton;
