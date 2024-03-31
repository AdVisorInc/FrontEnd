import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import { alpha, IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipLight } from 'src/components/base/styles/tooltips';
import { neutral } from 'src/theme/colors';

interface TooltipProps {
  icon: React.ReactNode;
  tooltipText: string;
}

const FooterButton: FC<TooltipProps> = ({ icon, tooltipText }) => {
  const { t } = useTranslation();

  return (
    <TooltipLight
      placement="top"
      arrow
      title={t(tooltipText)}
    >
      <IconButton
        sx={{
          background: alpha(neutral[800], 0.1),
          color: neutral[400],
          textAlign: 'left',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: alpha(neutral[600], 0.2),
          '&:hover': {
            color: neutral[100],
            background: alpha(neutral[700], 0.12),
            borderColor: alpha(neutral[600], 0.3),
          },
        }}
      >
        {icon}
      </IconButton>
    </TooltipLight>
  );
};

const SidebarFooter: FC = () => {
  return (
    <Stack
      direction="row"
      py={1}
      spacing={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={6}
      position="relative"
    >
      <FooterButton
        icon={<EventTwoToneIcon fontSize="small" />}
        tooltipText="Events Calendar"
      />
      <FooterButton
        icon={<SmsTwoToneIcon fontSize="small" />}
        tooltipText="Messenger"
      />
      <FooterButton
        icon={<PowerSettingsNewTwoToneIcon fontSize="small" />}
        tooltipText="Logout"
      />
    </Stack>
  );
};

export default SidebarFooter;
