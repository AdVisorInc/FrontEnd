import {
  DownloadTwoTone,
  KeyboardArrowDownRounded,
  VerifiedUserOutlined,
} from '@mui/icons-material';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import {
  Box,
  Button,
  CardHeader,
  Chip,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import BreadcrumbsCollapsed from 'src/components/application-ui/breadcrumbs/collapsed/collapsed';

const SectionHeadingValuePairs = () => {
  return (
    <>
      <Box
        alignItems="flex-start"
        display="flex"
      >
        <BreadcrumbsCollapsed />
      </Box>
      <CardHeader
        sx={{ px: 0 }}
        disableTypography
        title={
          <>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
            >
              <Typography
                noWrap
                variant="h3"
                fontWeight={600}
              >
                UI Design System
              </Typography>
              <Chip
                color="success"
                label="Active"
                size="small"
              />
            </Stack>
          </>
        }
        action={
          <Stack
            spacing={1}
            direction="row"
          >
            <FormControl
              margin="none"
              variant="outlined"
              fullWidth
            >
              <OutlinedInput
                id="members-input"
                type="text"
                placeholder="Members"
                sx={{
                  pr: 0.6,
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <PeopleOutlineRoundedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <Divider
                      sx={{ ml: 1 }}
                      orientation="vertical"
                      flexItem
                    />
                    <Button
                      startIcon={<SortRoundedIcon />}
                      endIcon={<KeyboardArrowDownRounded fontSize="small" />}
                    >
                      Sort
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Stack>
        }
        subheader={
          <Stack
            spacing={1.5}
            direction="row"
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            pt={1}
            divider={
              <Divider
                variant="middle"
                flexItem
                orientation="vertical"
              />
            }
          >
            <Stack
              spacing={0.5}
              direction="row"
              alignItems="center"
            >
              <StarTwoToneIcon
                sx={{
                  color: 'text.secondary',
                }}
                fontSize="small"
              />
              <Typography
                noWrap
                fontWeight={600}
                variant="body2"
                component="span"
              >
                4.96
              </Typography>
            </Stack>
            <Stack
              spacing={0.5}
              direction="row"
              alignItems="center"
            >
              <DownloadTwoTone
                sx={{
                  color: 'text.secondary',
                }}
                fontSize="small"
              />
              <Typography
                noWrap
                fontWeight={600}
                variant="body2"
                component="span"
              >
                435
              </Typography>
            </Stack>
            <Stack
              spacing={0.5}
              direction="row"
              alignItems="center"
            >
              <VerifiedUserOutlined
                sx={{
                  color: 'text.secondary',
                }}
                fontSize="small"
              />
              <Typography
                noWrap
                fontWeight={600}
                variant="body2"
                component="span"
              >
                23
              </Typography>
            </Stack>
          </Stack>
        }
      />
      <Divider />
    </>
  );
};

export default SectionHeadingValuePairs;
