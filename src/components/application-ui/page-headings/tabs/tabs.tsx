import ChartPieIcon from '@heroicons/react/24/outline/ChartPieIcon';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import {
  Box,
  Button,
  Card,
  Divider,
  Menu,
  MenuItem,
  Select,
  Stack,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeading from 'src/components/base/page-heading';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import BaseButtonTab from 'src/components/base/styles/button-tab';

const Component = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  const [value, setValue] = useState('0');

  const handleTabChange = (event, newValue) => {
    setValue(String(newValue));
  };

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

  const periods = [
    {
      value: 'today',
      text: t('Today'),
    },
    {
      value: 'yesterday',
      text: t('Yesterday'),
    },
    {
      value: 'last_month',
      text: t('Last month'),
    },
    {
      value: 'last_year',
      text: t('Last year'),
    },
  ];
  const [period, setPeriod] = useState<string>(periods[2].text);

  return (
    <Card>
      <PageHeading
        sx={{
          '& .PageTitleContent': {
            p: 2,
          },
        }}
        iconBox={
          <Box
            sx={{
              color: 'primary.main',
              svg: {
                height: theme.spacing(4),
                width: theme.spacing(4),
                minWidth: theme.spacing(4),
              },
            }}
          >
            <ChartPieIcon />
          </Box>
        }
        title="Dashboards"
        description="Tailor your dashboard experience by focusing on the metrics that matter most"
        actions={
          <Stack
            px={2}
            pb={2}
            pt={{ xs: 0, md: 2 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            whiteSpace="nowrap"
            alignItems="center"
            width={{ xs: '100%', sm: 'auto' }}
          >
            <ButtonSoft
              sx={{
                width: { xs: '100%', sm: 'auto' },
                justifyContent: { xs: 'space-between', sm: 'center' },
              }}
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </ButtonSoft>
            <Button
              sx={{
                width: { xs: '100%', sm: 'auto' },
              }}
              variant="outlined"
              color="secondary"
              startIcon={<FileDownloadRoundedIcon fontSize="small" />}
            >
              Export
            </Button>
          </Stack>
        }
        bottomSection={
          <Box px={2}>
            {smUp ? (
              <Tabs
                value={Number(value)}
                onChange={handleTabChange}
                sx={{
                  overflow: 'visible',

                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },

                  '& .MuiTabs-scroller': {
                    overflow: 'visible !important',
                  },
                }}
              >
                <BaseButtonTab
                  componentType="tab"
                  label="Analytics"
                />
                <BaseButtonTab
                  componentType="tab"
                  label="Integrations"
                />
                <BaseButtonTab
                  componentType="tab"
                  label="Settings"
                />
                <BaseButtonTab
                  componentType="tab"
                  label="Support"
                />
              </Tabs>
            ) : (
              <Select
                sx={{ mb: { xs: 2, sm: 0 } }}
                value={value}
                onChange={handleSelectChange}
                fullWidth
              >
                <MenuItem value="0">Analytics</MenuItem>
                <MenuItem value="1">Integrations</MenuItem>
                <MenuItem value="2">Settings</MenuItem>
                <MenuItem value="3">Support</MenuItem>
              </Select>
            )}
          </Box>
        }
      />
      <Divider />
      <Menu
        disableScrollLock
        anchorEl={actionRef1.current}
        onClose={() => setOpenMenuPeriod(false)}
        open={openPeriod}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {periods.map((_period) => (
          <MenuItem
            key={_period.value}
            onClick={() => {
              setPeriod(_period.text);
              setOpenMenuPeriod(false);
            }}
          >
            {_period.text}
          </MenuItem>
        ))}
      </Menu>
      <Box
        px={2}
        py={{ xs: 2, sm: 3, md: 5 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography
            variant="h3"
            color="text.secondary"
            align="center"
            fontWeight={500}
          >
            Page content
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default Component;
