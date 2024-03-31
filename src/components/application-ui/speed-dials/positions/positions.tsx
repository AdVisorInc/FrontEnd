import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import {
  Unstable_Grid2 as Grid,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from '@mui/material';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const Component = () => {
  return (
    <Grid
      container
      spacing={{ xs: 3, md: 6 }}
      sx={{
        backgroundColor: 'background.paper',
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        },
      }}
    >
      <Grid
        xs={12}
        md={6}
      >
        <Typography
          sx={{ mb: 2 }}
          variant="h5"
          textAlign="center"
        >
          direction="down"
        </Typography>
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          direction="down"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
        <Typography
          sx={{ mt: 2 }}
          variant="h5"
          textAlign="center"
        >
          direction="up"
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Typography
          sx={{ mb: 2 }}
          variant="h5"
          textAlign="right"
        >
          direction="left"
        </Typography>
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          direction="left"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Typography
          sx={{ mb: 2 }}
          variant="h5"
          textAlign="left"
        >
          direction="right"
        </Typography>
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          direction="right"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Grid>
    </Grid>
  );
};

export default Component;
