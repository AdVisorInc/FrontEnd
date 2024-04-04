import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import ViewWeekTwoToneIcon from '@mui/icons-material/ViewWeekTwoTone';
import { Box, Card, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AlertNotification from 'src/components/application-ui/alerts/notification/alert-notification';
import WatchListColumn from './watch-list-column';
import WatchListRow from './watch-list-row';

function WatchList() {
  const { t } = useTranslation();

  const [tabs, setTab] = useState<string | null>('watch_list_columns');

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="h3">{t('Watch List')}</Typography>
        <ToggleButtonGroup
          value={tabs}
          color="primary"
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton value="watch_list_columns">
            <ViewWeekTwoToneIcon />
          </ToggleButton>
          <ToggleButton value="watch_list_rows">
            <TableRowsTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {tabs === 'watch_list_columns' && <WatchListColumn />}

      {tabs === 'watch_list_rows' && <WatchListRow />}

      {!tabs && (
        <Card
          sx={{
            py: { xs: 2, sm: 3, md: 6 },
          }}
        >
          <AlertNotification />
        </Card>
      )}
    </>
  );
}

export default WatchList;
