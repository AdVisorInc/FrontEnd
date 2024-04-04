import { Box, Card, Unstable_Grid2 as Grid, styled, Typography } from '@mui/material';
import numeral from 'numeral';
import { useTranslation } from 'react-i18next';

const DotInfo = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.palette.info.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPending = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.palette.warning.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function InvoiceStats() {
  const { t } = useTranslation();

  const data = {
    currency: '$',
    totalReceived: '78593',
    drafts: '16859',
    pending: '5748',
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
      >
        <Card
          sx={{
            px: 3,
            py: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            display="flex"
            flex={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h2">
              {numeral(data.totalReceived).format(`${data.currency}0,0.00`)}
            </Typography>
          </Box>
          <Box px={3}>
            <Typography
              variant="caption"
              fontWeight={600}
              color="text.primary"
              gutterBottom
            >
              {t('Total Received')}
            </Typography>
            <Typography variant="subtitle2">
              <Typography
                component="span"
                color="success.main"
              >
                +50%
              </Typography>{' '}
              {t('increase since last month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          sx={{
            height: '100%',
            px: 3,
            py: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <DotInfo />
              {t('In drafts')}
            </Typography>
            <Typography variant="h3">
              {numeral(data.drafts).format(`${data.currency}0,0.00`)}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          sx={{
            height: '100%',
            px: 3,
            py: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <DotPending />
              {t('Pending')}
            </Typography>
            <Typography variant="h3">
              {numeral(data.pending).format(`${data.currency}0,0.00`)}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default InvoiceStats;
