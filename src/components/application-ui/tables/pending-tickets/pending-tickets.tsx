import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subHours } from 'date-fns';
import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

type TicketData = {
  question: string;
  avatarAlt: string;
  avatarSrc: string;
  name: string;
  role: string;
  statusColor: 'success' | 'info' | 'warning';
  statusText: string;
  offlineTime: { type: 'hours' | 'minutes' | 'seconds'; value: number };
  tooltipStatusText: string;
};

const tickets: TicketData[] = [
  {
    question: "Why can't I connect my Stripe account?",
    avatarAlt: 'Remy Sharp',
    avatarSrc: '/avatars/4.png',
    name: 'Cristofer Aminoff',
    role: 'Social Accounts Manager',
    statusColor: 'success',
    statusText: 'Completed',
    offlineTime: { type: 'hours', value: 6 },
    tooltipStatusText: 'Offline since',
  },
  {
    question: 'Support Questions Regarding Integrations',
    avatarAlt: 'Remy Sharp',
    avatarSrc: '/avatars/1.png',
    name: 'Marilyn Stanton',
    role: 'Web Development Support Team',
    statusColor: 'info',
    statusText: 'In Progress',
    offlineTime: { type: 'minutes', value: 37 },
    tooltipStatusText: 'Online since',
  },
  {
    question: 'How can I purchase this product?',
    avatarAlt: 'Remy Sharp',
    avatarSrc: '/avatars/2.png',
    name: 'Hanna Siphron',
    role: 'Pre-Sales Questions',
    statusColor: 'warning',
    statusText: 'Pending',
    offlineTime: { type: 'seconds', value: 77 },
    tooltipStatusText: 'Idle since',
  },
];

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: 22,
  width: theme.spacing(1.5),
  height: theme.spacing(1.5),
  display: 'inline-block',
  marginRight: theme.spacing(0.5),
  border: `${theme.palette.background.paper} solid 2px`,
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
}));

function PendingTickets() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const periods = [
    {
      value: 'all',
      text: t('All tickets'),
    },
    {
      value: 'new',
      text: t('Newest'),
    },
    {
      value: 'updated',
      text: t('Recently updated'),
    },
    {
      value: 'progress',
      text: t('In progress'),
    },
    {
      value: 'closed',
      text: t('Closed'),
    },
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[2].text);

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
            <Button
              size="small"
              sx={{
                ml: 0.5,
              }}
              variant="contained"
            >
              {t('View all')}
            </Button>
          </>
        }
        title={t('Pending Tickets')}
      />
      <Divider />
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('Details')}</TableCell>
                <TableCell>{t('Assigned')}</TableCell>
                <TableCell align="right">{t('Status')}</TableCell>
                <TableCell align="right">{t('Actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow
                  hover
                  key={ticket.question}
                >
                  <TableCell>
                    <Box sx={{ maxWidth: 300, minWidth: 240 }}>
                      <Typography variant="h6">{t(ticket.question)}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <Badge
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        overlap="circular"
                        badgeContent={
                          <Tooltip
                            arrow
                            placement="top"
                            title={
                              t(ticket.tooltipStatusText) +
                              ' ' +
                              formatDistance(
                                subHours(new Date(), ticket.offlineTime.value),
                                new Date(),
                                { addSuffix: true }
                              )
                            }
                          >
                            <DotLegend
                              style={{ background: theme.palette[ticket.statusColor].main }}
                            />
                          </Tooltip>
                        }
                      >
                        <AvatarWrapper
                          alt={ticket.avatarAlt}
                          src={ticket.avatarSrc}
                        />
                      </Badge>
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          variant="h6"
                          noWrap
                        >
                          {ticket.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          noWrap
                        >
                          {t(ticket.role)}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      label={t(ticket.statusText)}
                      color={ticket.statusColor}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                    align="right"
                  >
                    <Tooltip
                      title={t('Open Ticket')}
                      arrow
                    >
                      <IconButton
                        sx={{
                          '&:hover': { background: alpha(theme.palette.primary.main, 0.1) },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <LaunchTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title={t('Delete Ticket')}
                      arrow
                    >
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.palette.error.light },
                          color: theme.palette.error.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Divider />
      <Box
        p={2}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          '.MuiTablePagination-select': {
            py: 0.55,
          },
        }}
      >
        <TablePagination
          component="div"
          count={100}
          page={page}
          showFirstButton
          showLastButton
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          slotProps={{
            select: {
              variant: 'outlined',
              size: 'small',
              sx: {
                p: 0,
              },
            },
          }}
        />
      </Box>
    </Card>
  );
}

export default PendingTickets;
