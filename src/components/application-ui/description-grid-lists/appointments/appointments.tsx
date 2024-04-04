import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { format, subDays } from 'date-fns';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  width: theme.spacing(1.5),
  height: theme.spacing(1.5),
  display: 'inline-block',
  marginRight: theme.spacing(1),
  marginTop: theme.spacing(-0.1),
}));

const BoxItemWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.neutral[25], 0.02)
      : theme.palette.neutral[25],
  border:
    theme.palette.mode === 'dark'
      ? `2px solid ${theme.palette.neutral[800]}`
      : `2px solid ${theme.palette.neutral[100]}`,
  position: 'relative',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(2),
  width: '100%',

  '&::before': {
    content: "'.'",
    background: theme.palette.error.main,
    color: theme.palette.error.main,
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    textAlign: 'center',
    width: theme.spacing(0.6),
    left: theme.spacing(0.7),
    height: '90%',
    top: '5%',
  },

  '&.wrapper-info::before': {
    background: theme.palette.info.main,
    color: theme.palette.info.main,
  },

  '&.wrapper-warning::before': {
    background: theme.palette.warning.main,
    color: theme.palette.warning.main,
  },
}));

function Appointments() {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleDelete = () => {
    toast.error(t('You clicked on delete!'));
  };

  const handleClick = () => {
    toast.success(t('You clicked on the chip!'));
  };

  return (
    <Card>
      <CardHeader
        sx={{
          px: 1.5,
        }}
        action={
          <Button
            size="small"
            variant="contained"
          >
            {t('All patients')}
          </Button>
        }
        title={t('Appointments')}
      />
      <Divider />
      <List
        component="div"
        disablePadding
      >
        <ListSubheader
          component="div"
          color="primary"
          sx={{
            background: theme.palette.background.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 1,
          }}
        >
          <Typography fontWeight={500}>{t('Upcoming Appointments')}</Typography>
          <Chip
            label={t('Today')}
            color="warning"
          />
        </ListSubheader>
        <Divider />
        <ListItem
          component="div"
          sx={{
            pt: 2,
            pb: 0,
          }}
        >
          <BoxItemWrapper>
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <Tooltip
                arrow
                placement="top"
                title={t('Appointment has been confirmed with the Patient.')}
              >
                <DotLegend style={{ background: theme.palette.success.main }} />
              </Tooltip>
              <span>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Veronica Culhane
                </Typography>{' '}
                - {t('General Checkup')}
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                pl: 2.3,
                py: 1,
              }}
            >
              10:00 AM - <b>45 mins</b>
            </Typography>
            <Stack
              pl={2.3}
              direction="row"
              gap={1}
              flexWrap="wrap"
            >
              <Chip
                variant="outlined"
                sx={{
                  mr: 0.5,
                }}
                size="small"
                label={t('Reports')}
                color="primary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                variant="outlined"
                sx={{
                  mr: 0.5,
                }}
                size="small"
                label={t('High Risk Patient')}
                color="primary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Stack>
          </BoxItemWrapper>
        </ListItem>
        <ListItem
          component="div"
          sx={{
            pt: 2,
            pb: 0,
          }}
        >
          <BoxItemWrapper className="wrapper-warning">
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <Tooltip
                arrow
                placement="top"
                title={t('Appointment has been canceled!')}
              >
                <DotLegend style={{ background: theme.palette.error.main }} />
              </Tooltip>
              <span>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Bonnie Bryan
                </Typography>{' '}
                - {t('General Checkup')}
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                pl: 2.3,
                py: 1,
              }}
            >
              11:30 AM - <b>90 mins</b>
            </Typography>
            <Stack
              pl={2.3}
              direction="row"
              gap={1}
              flexWrap="wrap"
            >
              <Chip
                variant="outlined"
                sx={{
                  mr: 0.5,
                }}
                size="small"
                label={t('Chronic Patient')}
                color="primary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                variant="outlined"
                sx={{
                  mr: 0.5,
                }}
                size="small"
                label={t('Medical History')}
                color="primary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Stack>
          </BoxItemWrapper>
        </ListItem>
        <Divider
          sx={{
            mt: 2,
          }}
        />
        <ListSubheader
          component="div"
          color="primary"
          sx={{
            background: theme.palette.background.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 1,
          }}
        >
          <Typography fontWeight={500}>{t('Past Appointments')}</Typography>
          <Box>
            <Typography
              color="text.secondary"
              fontWeight={500}
            >
              {format(subDays(new Date(), 14), 'MMMM dd yyyy')}
            </Typography>
          </Box>
        </ListSubheader>
        <Divider />
        <ListItem
          component="div"
          sx={{
            py: 2,
          }}
        >
          <BoxItemWrapper className="wrapper-info">
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <DotLegend style={{ background: theme.palette.success.main }} />
              <span>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Wesley Joyce
                </Typography>{' '}
                - {t('Surgery')}
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                pl: 2.3,
                py: 1,
              }}
            >
              09:30 AM - <b>60 mins</b>
            </Typography>
            <Stack
              pl={2.3}
              direction="row"
              gap={1}
              flexWrap="wrap"
            >
              <Chip
                variant="outlined"
                sx={{
                  mr: 0.5,
                }}
                size="small"
                label={t('Medical History')}
                color="primary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Stack>
          </BoxItemWrapper>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
}

export default Appointments;
