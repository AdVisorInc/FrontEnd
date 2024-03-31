import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Doctor {
  name: string;
  specialty: string;
  rating: string;
  avatar: string;
  status: 'warning' | 'success' | 'info' | 'error' | 'primary' | 'secondary';
}

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  width: theme.spacing(2),
  height: theme.spacing(2),
  display: 'inline-block',
  marginRight: theme.spacing(0.5),
  border: `${theme.palette.background.paper} solid 2px`,
}));

const RatingWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(0.5),
  marginLeft: theme.spacing(-0.5),
}));

const doctorsData: Doctor[] = [
  {
    name: 'James Workman',
    specialty: 'Pediatrician',
    rating: '5.0',
    avatar: '/avatars/3.png',
    status: 'warning',
  },
  {
    name: 'Abram Schleifer',
    specialty: 'Neurologist',
    rating: '4.7',
    avatar: '/avatars/4.png',
    status: 'success',
  },
  {
    name: 'Livia Culhane',
    specialty: 'Cardiologist',
    rating: '4.5',
    avatar: '/avatars/2.png',
    status: 'error',
  },
  {
    name: 'Andy Smith',
    specialty: 'Ophthalmologist',
    rating: '3.9',
    avatar: '/avatars/4.png',
    status: 'info',
  },
];

const Doctors = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title={t('Doctors')} />
      <Divider />
      <List>
        {doctorsData.map((doctor, index) => (
          <React.Fragment key={doctor.name}>
            <ListItem sx={{ py: 1.8, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Box
                display="flex"
                flex={1}
                width="100%"
              >
                <ListItemAvatar>
                  <Badge
                    overlap="rectangular"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    badgeContent={
                      <Tooltip
                        arrow
                        placement="top"
                        title={t('Idle for 5 minutes')}
                      >
                        <DotLegend style={{ background: theme.palette[doctor.status].main }} />
                      </Tooltip>
                    }
                  >
                    <Avatar
                      sx={{
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                      }}
                      variant="rounded"
                      alt={doctor.name}
                      src={doctor.avatar}
                    />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  sx={{ pl: 2 }}
                  primary={
                    <>
                      <RatingWrapper>
                        <GradeTwoToneIcon
                          sx={{
                            pr: 0.5,
                            color: 'warning.main',
                          }}
                        />
                        <b>{doctor.rating}</b>
                      </RatingWrapper>
                      <Typography variant="h5">{doctor.name}</Typography>
                    </>
                  }
                  secondary={t(doctor.specialty)}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                />
              </Box>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  alignSelf: 'center',
                  mt: { xs: 1, sm: 0 },
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                {t('View Profile')}
              </Button>
            </ListItem>
            {index < doctorsData.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all doctors')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Doctors;
