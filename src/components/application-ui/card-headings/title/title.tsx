import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        disableTypography
        title={
          <Typography
            variant="h6"
            component="div"
          >
            Analytics Insights
          </Typography>
        }
        avatar={<DashboardTwoToneIcon />}
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
