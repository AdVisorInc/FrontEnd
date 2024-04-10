import { Unstable_Grid2 as Grid } from '@mui/material';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';
import React from 'react';
import { AccordionPlus } from 'src/components/base/styles/accordion';
import AccentIconIndicators from "../stats-grid-lists/accent-icon-indicators/accent-icon-indicators";
import SalesStats from "../stats-grid-lists/sales-stats/sales-stats";
import RecentActivity from "../stacked-lists/recent-activity/recent-activity";
import MonthlySales from "../area-charts/monthly-sales/monthly-sales";
import RecentSalesSparklines from "../sparkline-charts/recent-sales-sparklines/recent-sales-sparklines";
import TrafficSources from "../bar-charts/traffic-sources/traffic-sources";
import Traffic from "../sparkline-charts/traffic/traffic";
import AudienceOverview from "../line-charts/audience-overview/audience-overview";
import UserOverview from "../sparkline-charts/user-overview/user-overview";
import Wallets from "../stats-grid-lists/wallets/wallets";

const Component = () => {
  const [expandedPanel, setExpandedPanel] = React.useState<string | false>('organizationSummary');

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : false);
    };

  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <AccordionPlus
          square
          expanded={expandedPanel === 'organizationSummary'}
          onChange={handleAccordionChange('organizationSummary')}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === 'organizationSummary' ? (
                <RemoveTwoToneIcon fontSize="small" />
              ) : (
                <AddTwoToneIcon fontSize="small" />
              )
            }
            aria-controls="organizationSummary-content"
            id="organizationSummary-header"
          >
            <Typography variant="h5">Organization Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid xs={12} >
                <Wallets />
              </Grid>
              <Grid xs={12} >
                <AccentIconIndicators />
              </Grid>
              <Grid xs={12} >
                <SalesStats />
              </Grid>
            </Grid>
          </AccordionDetails>
        </AccordionPlus>
      </Grid>

      <Grid xs={12}>
        <AccordionPlus
          square
          expanded={expandedPanel === 'recentActivity'}
          onChange={handleAccordionChange('recentActivity')}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === 'recentActivity' ? (
                <RemoveTwoToneIcon fontSize="small" />
              ) : (
                <AddTwoToneIcon fontSize="small" />
              )
            }
            aria-controls="recentActivity-content"
            id="recentActivity-header"
          >
            <Typography variant="h5">Recent Activity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <RecentActivity />
              </Grid>
            </Grid>
          </AccordionDetails>
        </AccordionPlus>
      </Grid>

      <Grid xs={12}>
        <AccordionPlus
          square
          expanded={expandedPanel === 'performanceSnapshot'}
          onChange={handleAccordionChange('performanceSnapshot')}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === 'performanceSnapshot' ? (
                <RemoveTwoToneIcon fontSize="small" />
              ) : (
                <AddTwoToneIcon fontSize="small" />
              )
            }
            aria-controls="performanceSnapshot-content"
            id="performanceSnapshot-header"
          >
            <Typography variant="h5">Performance Snapshot</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid xs={12}>
                <Typography variant="h6">Sales Performance</Typography>
              </Grid>
              <Grid xs={12} >
                <MonthlySales />
              </Grid>
              <Grid xs={12} >
                <RecentSalesSparklines />
              </Grid>
              <Grid xs={12}>
                <Typography variant="h6">Website Traffic</Typography>
              </Grid>
              <Grid xs={12} >
                <TrafficSources />
              </Grid>
              <Grid xs={12}>
                <Traffic />
              </Grid>
              <Grid xs={12}>
                <Typography variant="h6">User Engagement</Typography>
              </Grid>
              <Grid xs={12} >
                <AudienceOverview />
              </Grid>
              <Grid xs={12} >
                <UserOverview />
              </Grid>
            </Grid>
          </AccordionDetails>
        </AccordionPlus>
      </Grid>
    </Grid>
  );
};

export default Component;
