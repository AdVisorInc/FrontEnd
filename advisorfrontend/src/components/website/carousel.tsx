import { Box, useTheme } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';
import ApplicationUiGaugeIndicatorsServerStatus from 'src/components/application-ui/gauge-indicators/server-status/server-status';
import ApplicationUiLineChartsAudienceOverview from 'src/components/application-ui/line-charts/audience-overview/audience-overview';
import ApplicationUiLineChartsSales from 'src/components/application-ui/line-charts/sales/sales';
import ApplicationUiSparklineChartsCryptoWatchlist from 'src/components/application-ui/sparkline-charts/crypto-watchlist/crypto-watchlist';
import ApplicationUiStackedListsLandingPages from 'src/components/application-ui/stacked-lists/landing-pages/landing-pages';
import ApplicationUiStackedListsMessenger from 'src/components/application-ui/stacked-lists/messenger/messenger';
import ApplicationUiStackedListsPortfolio from 'src/components/application-ui/stacked-lists/portfolio/portfolio';
import ApplicationUiStackedListsRecentActivity from 'src/components/application-ui/stacked-lists/recent-activity/recent-activity';

import WeeklySales from 'src/components/application-ui/area-charts/weekly-sales/weekly-sales'
import OrdersList from '../application-ui/tables/orders-list/orders-list'
import RevenueProgress from '../application-ui/horizontal-lists/revenue-progress/revenue-progress'

type MarqueeDirection = 'left' | 'right' | 'up' | 'down';

interface CarouselProps {
  marqueeDirection?: MarqueeDirection;
}

function withOverlay<T>(WrappedComponent: React.ComponentType<T>): React.ComponentType<T> {
  // The returned component accepts all props of type T
  const WithOverlayComponent: React.ComponentType<T> = (props: T): React.ReactElement => {
    return (
      <div style={{ pointerEvents: 'none' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithOverlayComponent;
}

const WeeklySalesWithOverlay = withOverlay(WeeklySales);
const OrdersListWithOverlay = withOverlay(OrdersList);
const RevenueProgressWithOverlay = withOverlay(RevenueProgress);

const components: {
  element: JSX.Element;
  width: number;
}[] = [
  {
    element: <WeeklySalesWithOverlay />,
    width: 1080,
  },
  {
    element: <OrdersListWithOverlay />,
    width: 1080,
  },
  {
    element: <RevenueProgressWithOverlay />,
    width: 1080,
  },
];

const Carousel: React.FC<CarouselProps> = ({ marqueeDirection = 'left' }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        '& .rfm-initial-child-container': {
          alignItems: 'flex-start',
          overflow: 'hidden',
        },
      }}
    >
      <Marquee
        speed={100}
        gradient
        direction={marqueeDirection}
        gradientColor={theme.palette.background.default}
        gradientWidth={120}
      >
        {components.map((component, index) => (
          <Tilt
            key={index}
            scale={1.05}
            tiltMaxAngleX={1}
            perspective={500}
            glareEnable={false}
            glareMaxOpacity={0}
            tiltMaxAngleY={1.56}
          >
            <Box
              width={component.width}
              maxHeight={468}
              sx={{
                m: 2,
                transform: 'scale(.94)',
                borderRadius: theme.shape.borderRadius + 'px',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden',

                '&:after': {
                  content: '" "',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: 84,
                  zIndex: 55,
                  backgroundImage: `linear-gradient(180deg, transparent 0%, ${theme.palette.background.default} 100%)`,
                },
              }}
            >
              {component.element}
            </Box>
          </Tilt>
        ))}
      </Marquee>
    </Box>
  );
};

export default Carousel;
