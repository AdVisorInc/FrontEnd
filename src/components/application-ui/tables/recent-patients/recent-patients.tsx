import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { format, subDays, subHours } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { InlineBadge } from 'src/components/base/styles/inline-badge';

interface Patient {
  avatarSrc?: string;
  initials?: string;
  name: string;
  admissionDate: Date;
  gender: 'Male' | 'Female';
  doctorAvatarSrc?: string;
  doctorName: string;
  doctorStatus: 'On Planned Leave' | 'On Duty';
  weight: string;
  department: string;
}

const patients: Patient[] = [
  {
    avatarSrc: '/avatars/1.png',
    name: 'Marilyn Stanton',
    admissionDate: subHours(new Date(), 5),
    gender: 'Female',
    doctorAvatarSrc: '/avatars/5.png',
    doctorName: 'Carter Gouse',
    doctorStatus: 'On Planned Leave',
    weight: '98kg',
    department: 'Pediatrics',
  },
  {
    initials: 'NL',
    name: 'Nolan Lubin',
    admissionDate: subDays(new Date(), 12),
    gender: 'Male',
    doctorAvatarSrc: '/avatars/4.png',
    doctorName: 'Craig Schleifer',
    doctorStatus: 'On Duty',
    weight: '86.35kg',
    department: 'Cardiology',
  },
  {
    initials: 'LT',
    name: 'Lincoln Torff',
    admissionDate: subDays(new Date(), 5),
    gender: 'Male',
    doctorAvatarSrc: '/avatars/3.png',
    doctorName: 'Gretchen Rosser',
    doctorStatus: 'On Planned Leave',
    weight: '75.50kg',
    department: 'Neurology',
  },
];

function RecentPatients() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader
        title={t('Recent Patients')}
        action={
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          >
            {t('Detailed View')}
          </Button>
        }
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('Patient Name')}</TableCell>
              <TableCell>{t('Gender')}</TableCell>
              <TableCell>{t('Doctor')}</TableCell>
              <TableCell>{t('Weight')}</TableCell>
              <TableCell>{t('Department')}</TableCell>
              <TableCell align="right">{t('Actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow
                hover
                key={patient.name}
              >
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    {patient.avatarSrc ? (
                      <Avatar src={patient.avatarSrc} />
                    ) : (
                      <Avatar>{patient.initials}</Avatar>
                    )}
                    <Box sx={{ ml: 1 }}>
                      <Typography
                        fontWeight={500}
                        variant="h6"
                        noWrap
                        lineHeight={1}
                      >
                        {patient.name}
                      </Typography>
                      <Typography
                        fontWeight={500}
                        variant="subtitle2"
                        color="text.secondary"
                        noWrap
                      >
                        {t('Admitted')} {format(patient.admissionDate, 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    fontWeight={500}
                    noWrap
                  >
                    {t(patient.gender)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar src={patient.doctorAvatarSrc} />
                    <Box sx={{ ml: 1 }}>
                      <Typography
                        fontWeight={500}
                        variant="h6"
                        noWrap
                        lineHeight={1}
                        gutterBottom
                      >
                        {patient.doctorName}
                      </Typography>

                      <InlineBadge>
                        <Badge
                          variant="dot"
                          color={
                            patient.doctorStatus === 'On Planned Leave' ? 'warning' : 'success'
                          }
                          sx={{
                            mr: 1,
                          }}
                        />
                        <Typography
                          fontWeight={500}
                          variant="body2"
                          color={
                            patient.doctorStatus === 'On Planned Leave'
                              ? 'warning.main'
                              : 'success.main'
                          }
                        >
                          {t(patient.doctorStatus)}
                        </Typography>
                      </InlineBadge>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    fontWeight={500}
                    noWrap
                  >
                    {patient.weight}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontWeight={500}
                    noWrap
                  >
                    {t(patient.department)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Box
                    flex={1}
                    whiteSpace="nowrap"
                  >
                    <Tooltip
                      title={t('Edit Patient Details')}
                      arrow
                    >
                      <ButtonIcon
                        variant="outlined"
                        color="secondary"
                        sx={{
                          color: 'primary.main',
                        }}
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </ButtonIcon>
                    </Tooltip>
                    <Tooltip
                      title={t('Delete Patient Records')}
                      arrow
                    >
                      <ButtonIcon
                        variant="outlined"
                        color="secondary"
                        sx={{
                          ml: 1,
                          color: 'error.main',
                        }}
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </ButtonIcon>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions
        disableSpacing
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Pagination
          count={3}
          color="primary"
        />
      </CardActions>
    </Card>
  );
}

export default RecentPatients;
