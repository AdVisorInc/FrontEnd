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
  Dialog,
  Divider,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Menu,
  MenuItem,
  styled,
  TextField,
  Tooltip,
  Typography,
  useTheme, DialogTitle, DialogContent,
} from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { CardAddAction } from 'src/components/application-ui/stats-grid-lists/wallets/wallets';
import OrganizationCreation from "../../organization-overview/organization-creation";
import {useDispatch, useSelector} from "../../../../store";
import {fetchUserOrganizations, selectOrganizations} from 'src/slices/organization';
import {useRouter} from "../../../../hooks/use-router";

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

function OrganizationsList() {
  const {t} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const organizations = useSelector(selectOrganizations);

  const [openDialog, setOpenDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedSort, setSelectedSort] = useState('Sort by name');

  useEffect(() => {
    dispatch(fetchUserOrganizations());
  }, [dispatch]);

  const handleCreateOrganization = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleViewOrganization = (orgId: string) => {
    router.push(`/blueprints/generic-admin-dashboard/dashboards/organization/${orgId}`);
  };

  const industries = [
    'All Industries',
    ...new Set(organizations.map((org) => org.industry)),
  ];

  const sorts = [
    'Sort by name',
    'Sort by status',
    'Sort by hosts',
  ];

  const industryRef = useRef<any>(null);
  const sortRef = useRef<any>(null);
  const [openIndustry, setOpenIndustry] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);

  const filteredOrganizations = organizations.filter((org) => {
    const isMatchingSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase());
    const isMatchingIndustry = selectedIndustry === 'All Industries' || org.industry === selectedIndustry;
    return isMatchingSearch && isMatchingIndustry;
  });

  const sortedOrganizations = filteredOrganizations.sort((a, b) => {
    if (selectedSort === 'Sort by name') {
      return a.name.localeCompare(b.name);
    } else if (selectedSort === 'Sort by status') {
      return a.is_active === b.is_active ? 0 : a.is_active ? -1 : 1;
    }
    return 0;
  });

  const groupedOrganizations = sortedOrganizations.reduce((acc, org) => {
    const industry = org.industry || 'Others';
    if (!acc[industry]) {
      acc[industry] = [];
    }
    acc[industry].push(org);
    return acc;
  }, {} as Record<string, typeof sortedOrganizations>);
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          pb: 2,
        }}
      >
        {t('My Organizations')}
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
              ref={industryRef}
              onClick={() => setOpenIndustry(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {selectedIndustry}
            </Button>
          </Box>
          <Menu
            disableScrollLock
            anchorEl={industryRef.current}
            onClose={() => setOpenIndustry(false)}
            open={openIndustry}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {industries.map((industry) => (
              <MenuItem
                key={industry}
                onClick={() => {
                  setSelectedIndustry(industry);
                  setOpenIndustry(false);
                }}
              >
                {industry}
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
                  <SearchTwoToneIcon/>
                </InputAdornment>
              ),
            }}
            placeholder={t('Search...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Button
            variant="outlined"
            ref={sortRef}
            onClick={() => setOpenSort(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small"/>}
          >
            {selectedSort}
          </Button>
          <Menu
            disableScrollLock
            anchorEl={sortRef.current}
            onClose={() => setOpenSort(false)}
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
            {sorts.map((sort) => (
              <MenuItem
                key={sort}
                onClick={() => {
                  setSelectedSort(sort);
                  setOpenSort(false);
                }}
              >
                {sort}
              </MenuItem>
            ))}
          </Menu>
          <Button
            sx={{
              ml: 1,
            }}
            variant="contained"
            startIcon={<AddCircleTwoToneIcon />}
            onClick={handleCreateOrganization}
          >
            {t('Create new organization')}
          </Button>

          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>{t('Create New Organization')}</DialogTitle>
            <DialogContent>
              <OrganizationCreation onClose={handleCloseDialog} />
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {sortedOrganizations.map((org) => (
          <Grid key={org.id} xs={12} sm={6} md={4} lg={3}>
            <CardIndicatorWrapper>
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
                    src={org.logo_url || '/placeholders/logo/default-logo.jpg'}
                    alt={org.name}
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
                  {org.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {org.industry}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{
                    mt: 3,
                  }}
                  onClick={() => handleViewOrganization(String(org.id))}
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

                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  variant="subtitle2"
                  color={org.is_active ? 'success.main' : 'warning.main'}
                >
                  <IconWrapper
                    sx={{
                      color: org.is_active ? theme.palette.success.main : theme.palette.warning.main,
                    }}
                  >
                    {org.is_active ? <CheckTwoToneIcon /> : <RefreshTwoToneIcon />}
                  </IconWrapper>
                  {org.is_active ? t('active') : t('inactive')}
                </Typography>
              </CardActionsWrapper>
            </CardIndicatorWrapper>
          </Grid>
        ))}
        <Grid
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Tooltip
            arrow
            title={t('Click to add a new organization')}
            onClick={handleCreateOrganization}
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

export default OrganizationsList;
