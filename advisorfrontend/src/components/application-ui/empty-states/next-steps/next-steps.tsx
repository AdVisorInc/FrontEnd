import { CardHeader, Divider, Typography } from '@mui/material';
import AvatarLabelActionList from 'src/components/application-ui/stacked-lists/avatar-label-action/avatar-label-action-list';

const EmptyStateNextSteps = () => {
  return (
    <>
      <CardHeader
        disableTypography
        title={
          <>
            <Typography
              noWrap
              variant="h4"
              fontWeight={500}
              lineHeight={1}
              gutterBottom
            >
              Setup your new instance
            </Typography>
          </>
        }
        subheader="Quickly get started with your new instance."
        subheaderTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
      />
      <Divider />
      <AvatarLabelActionList />
    </>
  );
};

export default EmptyStateNextSteps;
