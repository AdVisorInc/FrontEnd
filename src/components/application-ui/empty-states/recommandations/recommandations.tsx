import CloseTwoTone from '@mui/icons-material/CloseTwoTone';
import {
  Box,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ComposedWithSelect from 'src/components/application-ui/input/composed/composed-with-select';
import MembersSelect from 'src/components/application-ui/stacked-lists/members-select-input/members-select-list';

const EmptyStateRecommandations = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <>
      <CardHeader
        sx={{
          p: 0,
          justifyContent: 'flex-start',
          '.MuiCardHeader-action': {
            alignSelf: 'flex-start',
          },
        }}
        disableTypography
        title={
          <>
            <Typography
              noWrap
              variant="h4"
              fontWeight={600}
              lineHeight={1}
              gutterBottom
            >
              Share project
            </Typography>
          </>
        }
        action={
          mdUp && (
            <Stack
              spacing={1}
              direction="row"
            >
              <IconButton size="small">
                <CloseTwoTone />
              </IconButton>
            </Stack>
          )
        }
        subheader="Share your project with your team"
        subheaderTypographyProps={{ variant: 'subtitle1', color: 'text.secondary' }}
      />
      <Box py={2}>
        <ComposedWithSelect />
      </Box>
      <Box pt={1}>
        <Typography
          sx={{ pb: 1 }}
          variant="h6"
          color="text.secondary"
        >
          Select members
        </Typography>
        <Divider />
        <MembersSelect />
        <Divider />
      </Box>
    </>
  );
};

export default EmptyStateRecommandations;
