import { alpha, Box, Card, CardHeader, Divider, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { TooltipLight } from 'src/components/base/styles/tooltips';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: '22px',
  width: theme.spacing(1.5),
  height: theme.spacing(1.5),
  display: 'inline-block',
  marginRight: theme.spacing(0.5),
}));

function DataCenters() {
  const { t } = useTranslation();
  const geoUrl =
    'https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson';
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardHeader title={t('Europe Data Centers')} />
      <Divider />
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -48.5, 0],
          scale: 1350,
        }}
      >
        <Geographies geography={geoUrl}>
          {({
            //@ts-ignore
            geographies,
          }) =>
            //@ts-ignore
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[200], 0.08)
                    : theme.palette.neutral[200]
                }
                strokeWidth={4}
                stroke={
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.background.paper, 0.5)
                    : alpha(theme.palette.common.white, 0.5)
                }
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[-3.4, 52.3]}>
          <TooltipLight
            placement="top"
            arrow
            title="United Kingdom"
          >
            <circle
              r={12}
              fill={theme.palette.error.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[3.12, 48.37]}>
          <TooltipLight
            placement="top"
            arrow
            title="France"
          >
            <circle
              r={12}
              fill={theme.palette.success.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[10.51, 51.72]}>
          <TooltipLight
            placement="top"
            arrow
            title="Germany 1"
          >
            <circle
              r={12}
              fill={theme.palette.error.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[9.05, 50.74]}>
          <TooltipLight
            placement="top"
            arrow
            title="Germany 2"
          >
            <circle
              r={12}
              fill={theme.palette.success.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[18.5, 51.39]}>
          <TooltipLight
            placement="top"
            arrow
            title="Poland"
          >
            <circle
              r={12}
              fill={theme.palette.error.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[-4.2, 39.68]}>
          <TooltipLight
            placement="top"
            arrow
            title="Spain"
          >
            <circle
              r={12}
              fill={theme.palette.success.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[14.18, 57.83]}>
          <TooltipLight
            placement="top"
            arrow
            title="Sweden"
          >
            <circle
              r={12}
              fill={theme.palette.error.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[27.88, 50.08]}>
          <TooltipLight
            placement="top"
            arrow
            title="Ukraine"
          >
            <circle
              r={12}
              fill={theme.palette.success.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[24.19, 44.87]}>
          <TooltipLight
            placement="top"
            arrow
            title="Romania"
          >
            <circle
              r={16}
              fill={theme.palette.error.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[10.15, 48.73]}>
          <TooltipLight
            placement="top"
            arrow
            title="Germany 3"
          >
            <circle
              r={12}
              fill={theme.palette.success.main}
            />
          </TooltipLight>
        </Marker>
        <Marker coordinates={[21.89, 49.03]}>
          <TooltipLight
            placement="top"
            arrow
            title="Slovakia"
          >
            <circle
              r={12}
              fill={theme.palette.error.main}
            />
          </TooltipLight>
        </Marker>
      </ComposableMap>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={2}
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{
            mx: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <DotLegend style={{ background: theme.palette.error.main }} />
          {t('Highest downtime')}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{
            mx: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <DotLegend style={{ background: theme.palette.success.main }} />
          {t('Optimal uptime')}
        </Typography>
      </Box>
    </Card>
  );
}

export default DataCenters;
