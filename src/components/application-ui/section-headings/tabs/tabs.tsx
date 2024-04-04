import { SaveAltOutlined, UnpublishedOutlined } from '@mui/icons-material';
import { Button, CardHeader, Chip, Divider, Stack, Typography } from '@mui/material';
import TabsGradient from 'src/components/application-ui/tabs/basic-gradient/basic-gradient';

const SectionHeadingTabs = () => {
  return (
    <>
      <CardHeader
        disableTypography
        title={
          <>
            <Stack
              pt={0.5}
              spacing={1}
              direction="row"
              alignItems="center"
            >
              <Typography
                noWrap
                variant="h3"
                fontWeight={600}
              >
                UI Design System
              </Typography>
              <Chip
                color="error"
                variant="outlined"
                label="Pending"
              />
            </Stack>
          </>
        }
        action={
          <Stack
            spacing={1}
            direction="row"
          >
            <Button
              startIcon={<UnpublishedOutlined fontSize="small" />}
              color="secondary"
              variant="outlined"
              size="small"
            >
              Unpublish
            </Button>
            <Button
              startIcon={<SaveAltOutlined fontSize="small" />}
              variant="contained"
            >
              Save
            </Button>
          </Stack>
        }
      />
      <TabsGradient />
      <Divider />
    </>
  );
};

export default SectionHeadingTabs;
