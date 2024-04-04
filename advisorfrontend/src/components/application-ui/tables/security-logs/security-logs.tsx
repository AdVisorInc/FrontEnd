import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
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
import { format, subDays, subHours, subWeeks } from 'date-fns';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PaginationActions } from 'src/components/application-ui/pagination/simple/simple';

function SettingsSecurity() {
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

  const logs = [
    {
      id: 1,
      browser: ' Safari/537.36',
      ipaddress: '3.70.73.142',
      location: 'United States',
      date: subDays(new Date(), 2).getTime(),
    },
    {
      id: 2,
      browser: 'Chrome/36.0.1985.67',
      ipaddress: '138.13.136.179',
      location: 'China',
      date: subDays(new Date(), 6).getTime(),
    },
    {
      id: 3,
      browser: 'Googlebot/2.1',
      ipaddress: '119.229.170.253',
      location: 'China',
      date: subHours(new Date(), 15).getTime(),
    },
    {
      id: 4,
      browser: 'AppleWebKit/535.1',
      ipaddress: '206.8.99.49',
      location: 'Philippines',
      date: subDays(new Date(), 4).getTime(),
    },
    {
      id: 5,
      browser: 'Mozilla/5.0',
      ipaddress: '235.40.59.85',
      location: 'China',
      date: subWeeks(new Date(), 3).getTime(),
    },
  ];

  return (
    <Card>
      <CardHeader
        subheaderTypographyProps={{}}
        titleTypographyProps={{}}
        title={t('Access Logs')}
        subheader={t('Recent sign in activity logs')}
      />
      <Divider />
      <TableContainer
        sx={{
          td: {
            whiteSpace: 'nowrap',
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('Browser')}</TableCell>
              <TableCell>{t('IP Address')}</TableCell>
              <TableCell>{t('Location')}</TableCell>
              <TableCell>{t('Date/Time')}</TableCell>
              <TableCell align="right">{t('Actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow
                key={log.id}
                hover
              >
                <TableCell>{log.browser}</TableCell>
                <TableCell>{log.ipaddress}</TableCell>
                <TableCell>{log.location}</TableCell>
                <TableCell>{format(log.date, 'dd MMMM, yyyy - h:mm:ss a')}</TableCell>
                <TableCell align="right">
                  <Tooltip
                    placement="top"
                    title={t('Delete')}
                    arrow
                  >
                    <IconButton
                      sx={{
                        '&:hover': {},
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
      <CardActions
        sx={{
          p: 2,
          '.MuiTablePagination-toolbar': {
            justifyContent: 'space-between',
          },

          '.MuiTablePagination-spacer': {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{ pr: 1 }}
          variant="subtitle2"
          color="text.secondary"
        >
          Showing
        </Typography>
        <TablePagination
          component="div"
          count={80}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[]}
          ActionsComponent={PaginationActions}
        />
      </CardActions>
    </Card>
  );
}

export default SettingsSecurity;
