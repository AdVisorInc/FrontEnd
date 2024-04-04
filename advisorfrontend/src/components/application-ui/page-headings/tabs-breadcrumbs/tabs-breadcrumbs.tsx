import ChartPieIcon from '@heroicons/react/24/outline/ChartPieIcon';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  alpha,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Divider,
  Link,
  MenuItem,
  Select,
  Stack,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { tabData } from 'src/components/application-ui/tabs/basic-alternate/basic-alternate';
import PageHeading from 'src/components/base/page-heading';
import BaseButtonTab from 'src/components/base/styles/button-tab';

const Component = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [value, setValue] = useState(1);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(Number(event.target.value));
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.success('You clicked on a breadcrumb item!', {
      position: 'top-right',
    });
  };

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="flex-start"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              sx={{
                color: 'neutral.500',
              }}
              fontSize="small"
            />
          }
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            href="/home"
            onClick={handleClick}
            fontWeight={500}
          >
            Home
          </Link>
          <Link
            underline="hover"
            href="/dashboard"
            onClick={handleClick}
            fontWeight={500}
          >
            Dashboard
          </Link>
          <Typography
            fontWeight={500}
            color="neutral.700"
          >
            Users
          </Typography>
        </Breadcrumbs>
      </Box>
      <Divider />
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
            <Button
              sx={{
                width: { xs: '100%', sm: 'auto' },
              }}
              variant="contained"
              color="primary"
              startIcon={<FileDownloadRoundedIcon fontSize="small" />}
            >
              Export
            </Button>
          </Stack>
        }
        bottomSection={
          <Box px={2}>
            {mdUp ? (
              <Tabs
                value={value}
                variant="fullWidth"
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
                {tabData.map((tab) => (
                  <BaseButtonTab
                    key={tab.value}
                    componentType="tab"
                    label={
                      <Stack
                        textAlign="left"
                        width="100%"
                        direction="column"
                        spacing={0.5}
                        mt={1}
                      >
                        <Box>{tab.icon}</Box>
                        <Box overflow="hidden">
                          <Typography
                            variant="h5"
                            noWrap
                          >
                            {tab.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            gutterBottom
                            noWrap
                          >
                            {tab.description}
                          </Typography>
                        </Box>
                      </Stack>
                    }
                  />
                ))}
              </Tabs>
            ) : (
              <Select
                value={value}
                sx={{ mb: { xs: 2, md: 0 } }}
                //@ts-ignore
                onChange={handleSelectChange}
                fullWidth
              >
                {tabData.map((tab) => (
                  <MenuItem
                    key={tab.value}
                    value={tab.value}
                  >
                    {tab.title}
                  </MenuItem>
                ))}
              </Select>
            )}
          </Box>
        }
      />
      <Divider />
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
