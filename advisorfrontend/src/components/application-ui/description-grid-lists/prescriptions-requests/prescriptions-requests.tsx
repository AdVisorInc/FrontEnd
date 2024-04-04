import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  FormControl,
  Unstable_Grid2 as Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@mui/material';
import { format, subDays } from 'date-fns';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Medication {
  name: string;
  genericName: string;
  activePrescriptions: number;
  refillRequests: number;
}

function PrescriptionRequests() {
  const { t } = useTranslation();

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

  const [status, setStatus] = useState(0);

  //@ts-ignore
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const [type, setType] = useState(0);
  //@ts-ignore
  const handleType = (event) => {
    setType(event.target.value);
  };

  const medications: Medication[] = [
    { name: 'Diazepam', genericName: 'Valium', activePrescriptions: 51, refillRequests: 9 },
    {
      name: 'Adderall',
      genericName: 'Dextroampgetamine',
      activePrescriptions: 14,
      refillRequests: 2,
    },
    { name: 'Oxycotin', genericName: 'Fentanyl', activePrescriptions: 7, refillRequests: 34 },
  ];

  return (
    <Card>
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<FilterAltTwoToneIcon fontSize="small" />}
            >
              {t('Filters')}
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
              <Box
                sx={{
                  pt: 1,
                  minWidth: '320px',
                  outline: 'none',
                }}
              >
                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                >
                  <Grid md={6}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      size="small"
                      hiddenLabel
                    >
                      <Select
                        value={type}
                        onChange={handleType}
                      >
                        <MenuItem value={0}>{t('All types')}</MenuItem>
                        <MenuItem value={1}>{t('Prescription-only medicines')}</MenuItem>
                        <MenuItem value={2}>{t('Over-the-Counter Drugs')}</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid md={6}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      size="small"
                      hiddenLabel
                    >
                      <Select
                        value={status}
                        onChange={handleStatus}
                      >
                        <MenuItem value={0}>{t('All statuses')}</MenuItem>
                        <MenuItem value={1}>{t('Active Prescriptions')}</MenuItem>
                        <MenuItem value={2}>{t('Refill Requests')}</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider
                  sx={{
                    mb: 2,
                    mt: 2,
                  }}
                />
                <Box
                  pb={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    onClick={() => setOpenMenuPeriod(false)}
                    variant="contained"
                    size="small"
                  >
                    {t('Filter results')}
                  </Button>
                </Box>
              </Box>
            </Menu>
          </>
        }
        title={t('Prescriptions Requests')}
      />
      <Divider />
      <List disablePadding>
        {medications.map((medication, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{
                py: { xs: 2, sm: 3 },
                px: 2.5,
                display: { xs: 'block', md: 'flex' },
              }}
            >
              <ListItemText
                primary={
                  <>
                    <b>{medication.name}</b>{' '}
                    <Typography
                      sx={{ pl: 0.5 }}
                      component="span"
                    >
                      ({medication.genericName})
                    </Typography>
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Original prescription required!')}
                    >
                      <LockTwoToneIcon
                        sx={{
                          ml: 0.5,
                          color: 'primary.main',
                        }}
                        fontSize="small"
                      />
                    </Tooltip>
                  </>
                }
                primaryTypographyProps={{
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                  variant: 'h6',
                  fontWeight: 500,
                  gutterBottom: true,

                  noWrap: true,
                }}
                secondary={
                  <>
                    {t('Last Prescribed')}: <b>{format(subDays(new Date(), 15), 'MMMM dd yyyy')}</b>
                  </>
                }
                secondaryTypographyProps={{ variant: 'body1', noWrap: true }}
              />
              <Box
                sx={{
                  mt: { xs: 2, md: 0 },
                }}
                flex={1}
              >
                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                >
                  <Grid
                    xs={12}
                    sm={6}
                  >
                    <Box>
                      <Tooltip
                        arrow
                        placement="top"
                        title={t('View') + ' ' + t('active prescriptions')}
                      >
                        <Link
                          variant="h3"
                          underline="none"
                          gutterBottom
                          href=""
                          onClick={(e) => e.preventDefault()}
                        >
                          {medication.activePrescriptions}
                        </Link>
                      </Tooltip>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        noWrap
                      >
                        {t('active prescriptions')}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      position: 'relative',
                    }}
                    xs={12}
                    sm={6}
                  >
                    <Divider
                      absolute
                      orientation="vertical"
                      flexItem
                    />
                    <Box>
                      <Tooltip
                        arrow
                        placement="top"
                        title={t('View') + ' ' + t('refill requests')}
                      >
                        <Link
                          variant="h3"
                          underline="none"
                          gutterBottom
                          href=""
                          onClick={(e) => e.preventDefault()}
                        >
                          {medication.refillRequests}
                        </Link>
                      </Tooltip>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        noWrap
                      >
                        {t('refill requests')}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </ListItem>
            {index < medications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <Box
        py={1}
        px={2.5}
      >
        <Link
          fontWeight={600}
          underline="hover"
        >
          View details
        </Link>
      </Box>
    </Card>
  );
}

export default PrescriptionRequests;
