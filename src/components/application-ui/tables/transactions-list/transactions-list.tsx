import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardMedia,
  IconButton,
  lighten,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { format, subDays } from 'date-fns';
import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

const LabelInfo = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  background: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(12),
  fontWeight: 600,
  lineHeight: '28px',
  height: '28px',
  padding: theme.spacing(0, 2),
  borderRadius: theme.shape.borderRadius,
}));

const TableHeadWrapper = styled(TableHead)(({ theme }) => ({
  '.MuiTableCell-root': {
    textTransform: 'none',

    paddingTop: 0,
    paddingBottom: theme.spacing(1),
    background: 'transparent',
  },

  '.MuiTableRow-root': {
    background: 'transparent',
  },
}));

const TableWrapper = styled(Table)(() => ({
  '.MuiTableCell-root': {
    borderBottom: 0,
  },
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  transition: theme.transitions.create(['transform', 'background']),
  transform: 'scale(1)',
  transformOrigin: 'center',

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: '22px',
  width: '10px',
  height: '10px',
  display: 'inline-block',
  marginRight: theme.spacing(0.5),
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: `0 2rem 8rem 0 ${theme.palette.background.default}, 
                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.1)}`,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          height="197"
          image="/placeholders/covers/5.jpg"
          alt="..."
        />
        <CardActions>
          <LabelInfo
            sx={{
              borderRadius: 50,
            }}
          >
            {t('Live transations')}
          </LabelInfo>
        </CardActions>
      </Box>
      <Box p={2}>
        <TableContainer>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('Order')}</TableCell>
                <TableCell align="right">{t('Status')}</TableCell>
                <TableCell align="right">{t('Actions')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{
                        background: lighten(theme.palette.error.main, 0.8),
                        color: theme.palette.error.main,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <TrendingUpTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography
                        variant="h6"
                        noWrap
                      >
                        Paypal Withdraw
                      </Typography>
                      <Typography
                        variant="body2"
                        noWrap
                        color="text.secondary"
                      >
                        {format(subDays(new Date(), 1), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">39FJDSHE84H</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: theme.palette.error.main,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: theme.typography.pxToRem(12),
                        lineHeight: 1,
                      }}
                      variant="body1"
                      color="error.main"
                    >
                      {t('Deposit')}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper
                      size="small"
                      color="error"
                    >
                      <CloseRoundedIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{
                        background: lighten(theme.palette.info.main, 0.8),
                        color: theme.palette.info.main,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <TrendingDownTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography
                        variant="h6"
                        noWrap
                      >
                        Incoming funds
                      </Typography>
                      <Typography
                        variant="body2"
                        noWrap
                        color="text.secondary"
                      >
                        {format(subDays(new Date(), 2), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">76GHJD54HB</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: theme.palette.info.main,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: theme.typography.pxToRem(12),
                        lineHeight: 1,
                      }}
                      variant="body1"
                      color="info.main"
                    >
                      {t('Processing')}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper
                      size="small"
                      color="error"
                    >
                      <CloseRoundedIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{
                        background: lighten(theme.palette.warning.main, 0.8),
                        color: theme.palette.warning.main,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <TrendingFlatTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography
                        variant="h6"
                        noWrap
                      >
                        Held funds
                      </Typography>
                      <Typography
                        variant="body2"
                        noWrap
                        color="text.secondary"
                      >
                        {format(subDays(new Date(), 3), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">54GDSA98HT</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: theme.palette.warning.main,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: theme.typography.pxToRem(12),
                        lineHeight: 1,
                      }}
                      variant="body1"
                      color="warning.main"
                    >
                      {t('Pending')}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper
                      size="small"
                      color="error"
                    >
                      <CloseRoundedIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{
                        background: lighten(theme.palette.success.main, 0.8),
                        color: theme.palette.success.main,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <TrendingUpTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography
                        variant="h6"
                        noWrap
                      >
                        Fiat deposit
                      </Typography>
                      <Typography
                        variant="body2"
                        noWrap
                        color="text.secondary"
                      >
                        {format(subDays(new Date(), 4), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">54XHGSA34GJ</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: theme.palette.success.main,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: theme.typography.pxToRem(12),
                        lineHeight: 1,
                      }}
                      variant="body1"
                      color="success.main"
                    >
                      {t('Withdrawal')}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper
                      size="small"
                      color="error"
                    >
                      <CloseRoundedIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
    </Card>
  );
}

export default Component;
