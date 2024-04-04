import {
  CalendarMonthTwoTone,
  DownloadTwoTone,
  SaveAltOutlined,
  UnpublishedOutlined,
  VerifiedUserOutlined,
} from '@mui/icons-material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import {
  Breadcrumbs,
  Button,
  CardHeader,
  Chip,
  Divider,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import toast from 'react-hot-toast';

const SectionHeadingBasic = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.success('You clicked on a breadcrumb item!', {
      position: 'top-right',
    });
  };
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <CardHeader
      disableTypography
      title={
        <>
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
              fontSize={12}
            >
              Home
            </Link>
            <Link
              underline="hover"
              href="/dashboard"
              onClick={handleClick}
              fontWeight={500}
              fontSize={12}
            >
              Dashboard
            </Link>
            <Typography
              noWrap
              fontWeight={500}
              fontSize={12}
              color="neutral.700"
            >
              UI Systems
            </Typography>
          </Breadcrumbs>
          <Stack
            pt={0.5}
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
          <Button
            startIcon={<UnpublishedOutlined fontSize="small" />}
            color="secondary"
            variant="outlined"
            size="small"
          >
            Unpublish
          </Button>
          <Button
            startIcon={<SaveAltOutlined fontSize="small" />}
            variant="contained"
          >
            Save
          </Button>
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
            {mdUp && (
              <Typography
                noWrap
                fontWeight={500}
                variant="body2"
                component="span"
                color="text.secondary"
              >
                (27 ratings)
              </Typography>
            )}
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
          {mdUp && (
            <Stack
              spacing={0.5}
              direction="row"
              alignItems="center"
            >
              <CalendarMonthTwoTone
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
                color="text.secondary"
              >
                Last update:
              </Typography>
              <Typography
                noWrap
                fontWeight={600}
                variant="body2"
                component="span"
              >
                21 June, 2024
              </Typography>
            </Stack>
          )}
        </Stack>
      }
    />
  );
};

export default SectionHeadingBasic;
