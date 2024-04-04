import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
import PollTwoToneIcon from '@mui/icons-material/PollTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type TableRowData = {
  name: string;
  title: string;
  amount: string;
  delta: string;
  deltaColor: 'error.main' | 'warning.main' | 'success.main';
  status: 'Pending' | 'Failed' | 'Done';
  total: string;
  arrowIcon: 'up' | 'down';
};

const BoxComposed = styled(Box)(() => ({
  position: 'relative',
}));

const BoxComposedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 7,

  '.MuiTypography-root': {
    color: theme.palette.primary.contrastText,

    '& + .MuiTypography-root': {
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
}));

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

const Label = styled(Box)(({ theme }) => ({
  background: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 600,
  lineHeight: '23px',
  height: '22px',
  padding: theme.spacing(0, 1.2),
  borderRadius: '50px',
}));

const BoxOverlineButton = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 7,

  '.MuiButton-root': {
    borderRadius: '50px',
    height: theme.spacing(4.8),
    marginTop: theme.spacing(-2.4),
    padding: theme.spacing(0, 3),
    fontWeight: 500,
    border: `3px solid ${theme.palette.background.paper}`,
  },
}));

function Component() {
  const { t } = useTranslation();

  const tableData: TableRowData[] = [
    {
      name: 'Inez Conley',
      title: t('Project Manager'),
      amount: '$18,386',
      delta: '-$392',
      deltaColor: 'error.main',
      status: 'Pending',
      total: '$68,492',
      arrowIcon: 'up',
    },
    {
      name: 'Adyan Sosa',
      title: t('User Experience Designer'),
      amount: '$6,356',
      delta: '-374',
      deltaColor: 'warning.main',
      status: 'Failed',
      total: '483',
      arrowIcon: 'up',
    },
    {
      name: 'Beck Simpson',
      title: t('Senior Consultant'),
      amount: '$16,281',
      delta: '+684',
      deltaColor: 'success.main',
      status: 'Done',
      total: '$12,1M',
      arrowIcon: 'down',
    },
  ];

  return (
    <Card>
      <BoxComposed
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
        }}
      >
        <CardActions>
          <Label>{t('New')}</Label>
        </CardActions>
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.1,
            backgroundImage: 'url("/placeholders/covers/2.jpg")',
          }}
        />
        <BoxComposedContent p={{ xs: 4, md: 6 }}>
          <Typography
            textAlign="center"
            variant="h4"
            gutterBottom
          >
            {t('Technical Support')}
          </Typography>
          <Typography
            textAlign="center"
            fontWeight={400}
            variant="h5"
            lineHeight={1.4}
          >
            {t('If you have questions regarding you order, you can send us a message')}
          </Typography>
        </BoxComposedContent>
      </BoxComposed>
      <BoxOverlineButton>
        <Button
          variant="contained"
          size="large"
          color="success"
        >
          {t('Send message')}
        </Button>
      </BoxOverlineButton>
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
        >
          <Grid
            xs={12}
            sm={4}
          >
            <Card
              variant="outlined"
              elevation={0}
              sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              }}
            >
              <PersonTwoToneIcon
                sx={{
                  color: 'warning.main',
                }}
                fontSize="large"
              />
              <Typography
                variant="h3"
                sx={{
                  pt: 1,
                }}
              >
                2,345
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('users')}
              </Typography>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={4}
          >
            <Card
              variant="outlined"
              elevation={0}
              sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              }}
            >
              <PointOfSaleTwoToneIcon
                sx={{
                  color: 'success.main',
                }}
                fontSize="large"
              />
              <Typography
                variant="h3"
                sx={{
                  pt: 1,
                }}
              >
                $3,586
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('sales')}
              </Typography>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={4}
          >
            <Card
              variant="outlined"
              elevation={0}
              sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              }}
            >
              <PollTwoToneIcon
                sx={{
                  color: 'info.main',
                }}
                fontSize="large"
              />
              <Typography
                variant="h3"
                sx={{
                  pt: 1,
                }}
              >
                $9,693
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('revenue')}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <TableContainer>
        <Table>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                hover
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Box>
                    <Link
                      href=""
                      onClick={(e) => e.preventDefault()}
                      variant="h5"
                      noWrap
                    >
                      {row.name}
                    </Link>
                    <Typography
                      variant="subtitle2"
                      noWrap
                    >
                      {row.title}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h5"
                    noWrap
                  >
                    {row.amount}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h5"
                    noWrap
                    color={row.deltaColor}
                  >
                    {row.delta}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {row.status === 'Pending' && (
                    <Chip
                      color="warning"
                      variant="outlined"
                      label={t(row.status)}
                    />
                  )}
                  {row.status === 'Failed' && (
                    <Chip
                      color="error"
                      variant="outlined"
                      label={t(row.status)}
                    />
                  )}
                  {row.status === 'Done' && (
                    <Chip
                      color="success"
                      variant="outlined"
                      label={t(row.status)}
                    />
                  )}
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                    color="text.secondary"
                  >
                    <Typography
                      sx={{
                        pr: 0.5,
                      }}
                      component="span"
                      variant="h5"
                      color="text.primary"
                    >
                      {row.total}
                    </Typography>
                    {row.arrowIcon === 'up' && (
                      <ArrowUpwardTwoToneIcon
                        sx={{
                          opacity: 0.6,
                        }}
                      />
                    )}
                    {row.arrowIcon === 'down' && (
                      <ArrowDownwardTwoToneIcon
                        sx={{
                          opacity: 0.6,
                        }}
                      />
                    )}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Component;
