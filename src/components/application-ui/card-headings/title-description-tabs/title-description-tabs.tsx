import BarChartIcon from '@mui/icons-material/BarChartTwoTone';
import PieChartIcon from '@mui/icons-material/PieChartTwoTone';
import TimelineIcon from '@mui/icons-material/TimelineTwoTone';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import PlaceholderBox from 'src/components/base/placeholder-box';

type AnalyticsView = 'bar' | 'pie' | 'timeline';

const Component = () => {
  const [view, setView] = useState<AnalyticsView>('bar');

  const handleViewChange = (event: ChangeEvent<{}>, newView: AnalyticsView | null) => {
    if (newView) {
      setView(newView);
    }
  };

  return (
    <Card>
      <CardHeader
        title="User Analytics"
        subheader="Overview of monthly activity"
        action={
          <ToggleButtonGroup
            value={view}
            exclusive
            size="small"
            color="primary"
            onChange={handleViewChange}
            aria-label="analytics view"
          >
            <ToggleButton
              value="bar"
              aria-label="standard view"
            >
              <BarChartIcon fontSize="small" />
            </ToggleButton>

            <ToggleButton
              value="pie"
              aria-label="breakdown view"
            >
              <PieChartIcon fontSize="small" />
            </ToggleButton>

            <ToggleButton
              value="timeline"
              aria-label="chronological view"
            >
              <TimelineIcon fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>
        }
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
