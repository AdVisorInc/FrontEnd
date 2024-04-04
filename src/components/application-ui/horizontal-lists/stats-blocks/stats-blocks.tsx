import { Box, Card, Unstable_Grid2 as Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TwoColumnStats from './two-column';

type StackItem = {
  titleKey: string;
  subtitleKey: string;
  value: string;
  valueColor: 'error.main' | 'warning.main' | 'success.main' | 'primary.main';
};

const stackItems: StackItem[] = [
  {
    titleKey: 'Revenue',
    subtitleKey: 'Quarterly Earnings',
    value: '$4.5M',
    valueColor: 'success.main',
  },
  {
    titleKey: 'Expenses',
    subtitleKey: 'Operational Costs',
    value: '$1.8M',
    valueColor: 'error.main',
  },
  {
    titleKey: 'Engagement',
    subtitleKey: 'User Interactions',
    value: '35K',
    valueColor: 'primary.main',
  },
  {
    titleKey: 'Signups',
    subtitleKey: 'New Users This Month',
    value: '1,240',
    valueColor: 'warning.main',
  },
  {
    titleKey: 'Traffic',
    subtitleKey: 'Website Visits',
    value: '87K',
    valueColor: 'primary.main',
  },
  {
    titleKey: 'Sales',
    subtitleKey: 'Monthly Transactions',
    value: '2,300',
    valueColor: 'success.main',
  },
];

function Component2() {
  const { t } = useTranslation();
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 4 } as const;

  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Card>
        <Grid
          container
          sx={(theme) => ({
            '--Grid-borderWidth': '1px',
            borderColor: 'divider',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              ...(Object.keys(colWidth) as Array<keyof typeof colWidth>).reduce(
                (result, key) => ({
                  ...result,
                  [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                    [theme.breakpoints.only(key)]: {
                      borderRight: 'none',
                    },
                  },
                }),
                {}
              ),
            },
          })}
        >
          {stackItems.map((item, index) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <Box p={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h5">{t(item.titleKey)}</Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {t(item.subtitleKey)}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    color={item.valueColor}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
      <TwoColumnStats />
    </Stack>
  );
}

export default Component2;
