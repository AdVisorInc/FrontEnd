import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import {
  alpha,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  Link,
  Menu,
  MenuItem,
  Pagination,
  Rating,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subDays, subMonths } from 'date-fns';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import SearchContained from 'src/components/application-ui/input/search/search-contained';

function TaskSearch() {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleDelete = () => {
    toast.error(t('You clicked on delete!'));
  };

  const handleClick = () => {
    toast.success(t('You clicked on the chip!'));
  };

  const periods = [
    {
      value: 'popular',
      text: t('Most popular'),
    },
    {
      value: 'recent',
      text: t('Recent tasks'),
    },
    {
      value: 'updated',
      text: t('Latest updated tasks'),
    },
    {
      value: 'oldest',
      text: t('Oldest tasks first'),
    },
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <>
      <SearchContained />
      <Box
        py={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            <Typography
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline' },
              }}
            >
              {t('Showing')}:
            </Typography>{' '}
            <b>57 tasks</b>
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
        >
          <Typography
            variant="subtitle2"
            sx={{
              pr: 1,
              display: { xs: 'none', sm: 'inline' },
            }}
          >
            {t('Sort by')}:
          </Typography>
          <Button
            size="small"
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {period}
          </Button>
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
        </Box>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          lg={4}
          md={6}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              p: 2,
              background: alpha(theme.palette.background.default, 0.3),
              boxShadow: theme.shadows[8],
            }}
          >
            <Box>
              <Rating
                value={4.5}
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Box>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              variant="h4"
              color="text.primary"
              underline="hover"
            >
              Migrate hosting to new server
            </Link>
            <Stack
              py={2}
              gap={1}
              direction="row"
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            >
              <Chip
                size="small"
                label={t('Hosting')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                size="small"
                label={t('Security')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Stack>
            <Typography
              sx={{
                pb: 2,
              }}
              variant="subtitle1"
              color="text.secondary"
            >
              Ensure optimal performance and security by upgrading the hosting platform.
            </Typography>
            <Button
              size="small"
              variant="contained"
            >
              {t('View task')}
            </Button>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <CardActions
              sx={{
                p: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                noWrap
                variant="subtitle2"
                color="text.secondary"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1,
                  }}
                />
                {formatDistance(subDays(new Date(), 24), new Date(), {
                  addSuffix: true,
                })}
              </Typography>
              <AvatarGroup>
                <Avatar
                  alt="Travis Howard"
                  src="/avatars/2.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src="/avatars/4.png"
                  sx={{ width: 34, height: 34 }}
                />
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          xs={12}
          lg={4}
          md={6}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              p: 2,
              background: alpha(theme.palette.background.default, 0.3),
              boxShadow: theme.shadows[8],
            }}
          >
            <Box>
              <Rating
                value={4}
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
            </Box>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              variant="h4"
              underline="hover"
              color="text.primary"
            >
              Implement New CRM Software
            </Link>
            <Stack
              py={2}
              gap={1}
              direction="row"
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            >
              <Chip
                size="small"
                label={t('CRM')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                size="small"
                label={t('Sales')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                size="small"
                label={t('Integration')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Stack>
            <Typography
              sx={{
                pb: 2,
              }}
              variant="subtitle2"
              color="text.secondary"
            >
              Enhance customer relationship management by integrating a new CRM software suite.
            </Typography>
            <Button
              size="small"
              variant="contained"
            >
              {t('View task')}
            </Button>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <CardActions
              sx={{
                p: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                noWrap
                variant="subtitle2"
                color="text.secondary"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1,
                  }}
                />
                {formatDistance(subMonths(new Date(), 2), new Date(), {
                  addSuffix: true,
                })}
              </Typography>
              <AvatarGroup>
                <Avatar
                  alt="Agnes Walker"
                  src="/avatars/4.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/avatars/5.png"
                  sx={{ width: 34, height: 34 }}
                />
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          xs={12}
          lg={4}
          md={6}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              p: 2,
              background: alpha(theme.palette.background.default, 0.3),
              boxShadow: theme.shadows[8],
            }}
          >
            <Box>
              <Rating
                value={3.6}
                defaultValue={3.6}
                precision={1}
                readOnly
              />
            </Box>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              variant="h4"
              underline="hover"
              color="text.primary"
            >
              Upgrade Network Infrastructure
            </Link>
            <Stack
              py={2}
              gap={1}
              direction="row"
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            >
              <Chip
                size="small"
                label={t('Networking')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                size="small"
                label={t('Security')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                size="small"
                label={t('IT')}
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Stack>
            <Typography
              sx={{
                pb: 2,
              }}
              variant="body1"
              color="text.secondary"
            >
              Improve company-wide network performance and security with a infrastructure upgrade.
            </Typography>
            <Button
              size="small"
              variant="contained"
            >
              {t('View task')}
            </Button>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <CardActions
              sx={{
                p: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                noWrap
                variant="subtitle2"
                color="text.secondary"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1,
                  }}
                />
                {formatDistance(subDays(new Date(), 31), new Date(), {
                  addSuffix: true,
                })}
              </Typography>
              <AvatarGroup>
                <Avatar
                  alt="Remy Sharp"
                  src="/avatars/1.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/avatars/2.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/avatars/3.png"
                  sx={{ width: 34, height: 34 }}
                />
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: { xs: 2, sm: 3 },
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          count={15}
          defaultPage={6}
          siblingCount={0}
          shape="rounded"
          color="primary"
        />
      </Box>
    </>
  );
}

export default TaskSearch;
