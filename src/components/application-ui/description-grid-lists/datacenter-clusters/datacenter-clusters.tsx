import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Menu,
  MenuItem,
  styled,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardAddAction } from 'src/components/application-ui/stats-grid-lists/wallets/wallets';

const CardIndicatorWrapper = styled(Card)({
  position: 'relative',
  '.MuiCard-indicator': {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '5px',
  },
});

const CardActionsWrapper = styled(CardActions)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(2),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginRight: theme.spacing(0.5),
}));

const AvatarAddWrapper = styled(Avatar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.primary.main,
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

function DatacenterClusters() {
  const { t } = useTranslation();
  const theme = useTheme();

  const clusters = [
    {
      value: '1',
      badge: '15',
      text: t('All clusters'),
    },
    {
      value: '2',
      badge: '25',
      text: t('Oracle'),
    },
    {
      value: '3',
      badge: '35',
      text: t('IBM'),
    },
    {
      value: '4',
      badge: '45',
      text: t('Microsoft'),
    },
  ];
  const sorts = [
    {
      value: '1',
      text: t('Sort by name'),
    },
    {
      value: '2',
      text: t('Sort by name'),
    },
    {
      value: '3',
      text: t('Sort by status'),
    },
    {
      value: '4',
      text: t('Sort by hosts'),
    },
  ];

  const actionRef = useRef<any>(null);
  const actionRef1 = useRef<any>(null);
  const [openCluster, setOpenMenuCluster] = useState<boolean>(false);
  const [cluster, setCluster] = useState<string>(clusters[0].text);
  const [openSort, setOpenMenuSort] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('Sort by...');

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          pb: 2,
        }}
      >
        {t('Datacenter Clusters')}
      </Typography>
      <Box
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      >
        <Box
          display="flex"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Box>
            <Button
              sx={{
                mr: 1,
                mb: { xs: 1, md: 0 },
                whiteSpace: 'nowrap',
              }}
              variant="contained"
              color="secondary"
              ref={actionRef}
              onClick={() => setOpenMenuCluster(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {cluster}
            </Button>
          </Box>
          <Menu
            disableScrollLock
            anchorEl={actionRef.current}
            onClose={() => setOpenMenuCluster(false)}
            open={openCluster}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {clusters.map((_cluster) => (
              <MenuItem
                key={_cluster.value}
                onClick={() => {
                  setCluster(_cluster.text);
                  setOpenMenuCluster(false);
                }}
              >
                <Box
                  sx={{
                    mr: 1,
                    ml: -1,
                  }}
                >
                  <Chip
                    size="small"
                    label={_cluster.badge}
                    color="primary"
                    variant="outlined"
                  />
                </Box>
                {_cluster.text}
              </MenuItem>
            ))}
          </Menu>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              '.MuiInputBase-input': {
                height: '24px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              ),
            }}
            placeholder={t('Search...')}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Button
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuSort(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {sort}
          </Button>
          <Menu
            disableScrollLock
            anchorEl={actionRef1.current}
            onClose={() => setOpenMenuSort(false)}
            open={openSort}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {sorts.map((_sort) => (
              <MenuItem
                key={_sort.value}
                onClick={() => {
                  setSort(_sort.text);
                  setOpenMenuSort(false);
                }}
              >
                {_sort.text}
              </MenuItem>
            ))}
          </Menu>
          <Button
            sx={{
              ml: 1,
            }}
            variant="contained"
            startIcon={<AddCircleTwoToneIcon />}
          >
            {t('Create new cluster')}
          </Button>
        </Box>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          sm={6}
          md={5}
          lg={4}
        >
          <CardIndicatorWrapper>
            <Box
              className="MuiCard-indicator"
              sx={{
                background: theme.palette.info.main,
              }}
            />
            <CardContent
              sx={{
                pb: 4,
                pt: 7,
                px: 3,
                textAlign: 'center',
              }}
            >
              <Card
                elevation={0}
                variant="outlined"
                sx={{
                  width: 128,
                  backgroundColor: 'common.white',
                  border: 0,
                  mx: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: theme.palette.mode === 'dark' && 0.5,
                }}
              >
                <img
                  style={{ height: '30px' }}
                  src="/placeholders/logo/netflix-logo.jpg"
                  alt="..."
                />
              </Card>
              <Typography
                variant="h4"
                sx={{
                  pt: 2,
                  px: 3,
                }}
                gutterBottom
              >
                Mainframe Analytics Cluster for Visitors and Page Views
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t('Maintained for')} Netflix Inc.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                sx={{
                  mt: 3,
                }}
              >
                {t('View details')}
              </Button>
            </CardContent>
            <Divider />
            <CardActionsWrapper
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="subtitle2">
                <b>7</b> {t('hosts')}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                variant="subtitle2"
                color="success.main"
              >
                <IconWrapper
                  sx={{
                    color: theme.palette.success.main,
                  }}
                >
                  <CheckTwoToneIcon />
                </IconWrapper>
                {t('available')}
              </Typography>
            </CardActionsWrapper>
          </CardIndicatorWrapper>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={5}
          lg={4}
        >
          <CardIndicatorWrapper>
            <Box
              className="MuiCard-indicator"
              sx={{
                background: theme.palette.success.main,
              }}
            />
            <CardContent
              sx={{
                pb: 4,
                pt: 7,
                px: 3,
                textAlign: 'center',
              }}
            >
              <Card
                elevation={0}
                variant="outlined"
                sx={{
                  width: 128,
                  backgroundColor: 'common.white',
                  border: 0,
                  mx: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: theme.palette.mode === 'dark' && 0.5,
                }}
              >
                <img
                  style={{ height: '30px' }}
                  src="/placeholders/logo/google-logo.jpg"
                  alt="..."
                />
              </Card>
              <Typography
                variant="h4"
                sx={{
                  pt: 2,
                  px: 3,
                }}
                gutterBottom
              >
                Main Website Sales Monitoring Cluster Database
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t('Maintained for')} Google Corp.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                sx={{
                  mt: 3,
                }}
              >
                {t('View details')}
              </Button>
            </CardContent>
            <Divider />
            <CardActionsWrapper
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="subtitle2">
                <b>15</b> {t('hosts')}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                variant="subtitle2"
                color="warning.main"
              >
                <IconWrapper
                  sx={{
                    color: theme.palette.warning.main,
                  }}
                >
                  <RefreshTwoToneIcon />
                </IconWrapper>
                {t('provisioning')}
              </Typography>
            </CardActionsWrapper>
          </CardIndicatorWrapper>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={2}
          lg={4}
        >
          <Tooltip
            arrow
            title={t('Click to add a new cluster')}
          >
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1,
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default DatacenterClusters;
