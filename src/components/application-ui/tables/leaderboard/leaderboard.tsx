import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Menu,
  MenuItem,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MemberData {
  ranking: number;
  avatarSrc: string;
  name: string;
  points: number;
  trend: 'up' | 'down';
  dotColor: 'success' | 'warning';
}

const membersData: MemberData[] = [
  {
    ranking: 1,
    avatarSrc: '/avatars/2.png',
    name: 'Brandon Jonas',
    points: 456,
    trend: 'up',
    dotColor: 'success',
  },
  {
    ranking: 2,
    avatarSrc: '/avatars/4.png',
    name: 'Erin Donin',
    points: 345,
    trend: 'up',
    dotColor: 'success',
  },
  {
    ranking: 3,
    avatarSrc: '/avatars/5.png',
    name: 'Charlie Rhiel Madsen',
    points: 265,
    trend: 'down',
    dotColor: 'warning',
  },
];

const AvatarLight = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold,
}));

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: 22,
  width: theme.spacing(2),
  height: theme.spacing(2),
  display: 'inline-block',
  border: `${theme.palette.background.paper} solid 2px`,
}));

function Leaderboard() {
  const { t } = useTranslation();
  const theme = useTheme();

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>('Select team...');

  const periods = [
    {
      value: '1',
      text: t('UX Designers'),
    },
    {
      value: '2',
      text: t('Frontend Developers'),
    },
    {
      value: '3',
      text: t('Team Leaders'),
    },
    {
      value: '4',
      text: t('Project Managers'),
    },
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
          </>
        }
        title={t('Leaderboard')}
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ py: 2 }}>{t('Ranking')}</TableCell>
              <TableCell sx={{ py: 2 }}>{t('Member')}</TableCell>
              <TableCell
                sx={{ py: 2 }}
                align="right"
              >
                {t('Points')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {membersData.map((member) => (
              <TableRow
                hover
                key={member.ranking}
              >
                <TableCell sx={{ py: 2.84 }}>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <AvatarLight sx={{ mr: 1 }}>{member.ranking}</AvatarLight>
                    {member.trend === 'up' ? (
                      <ArrowUpwardTwoToneIcon sx={{ color: 'success.main' }} />
                    ) : (
                      <ArrowDownwardTwoToneIcon sx={{ color: 'error.main' }} />
                    )}
                  </Box>
                </TableCell>
                <TableCell sx={{ py: 2.84 }}>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Badge
                      sx={{ mr: 1 }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      overlap="circular"
                      badgeContent={
                        <DotLegend style={{ background: theme.palette[member.dotColor].main }} />
                      }
                    >
                      <Avatar src={member.avatarSrc} />
                    </Badge>
                    <Typography
                      variant="h6"
                      noWrap
                    >
                      {member.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h4">{member.points}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions
        disableSpacing
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button>{t('View all rankings')}</Button>
      </CardActions>
    </Card>
  );
}

export default Leaderboard;
