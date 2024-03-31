import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        disableTypography
        title={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography
              variant="h4"
              component="div"
            >
              Analytics
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              noWrap
            >
              Comprehensive Insights for Informed Decisions
            </Typography>
          </Box>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
