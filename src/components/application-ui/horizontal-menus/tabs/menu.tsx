import { Chip, Stack } from '@mui/material';
import BaseButtonTab from 'src/components/base/styles/button-tab';

const Menu = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
    >
      <BaseButtonTab
        componentType="button"
        className="Mui-selected"
      >
        Dashboard
      </BaseButtonTab>
      <BaseButtonTab componentType="button">Members</BaseButtonTab>
      <BaseButtonTab componentType="button">
        Events
        <Chip
          size="small"
          variant="outlined"
          color="secondary"
          sx={{ ml: 1 }}
          label={5}
        />
      </BaseButtonTab>
      <BaseButtonTab componentType="button">Settings</BaseButtonTab>
    </Stack>
  );
};

export default Menu;
