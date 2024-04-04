import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import { Button, Card, CardContent, CardHeader, Divider } from '@mui/material';
import AvatarTitleDescriptionAlternate from 'src/components/application-ui/avatars/with-text/avatar-title-description-alternate';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        sx={{ '.MuiCardHeader-content': { overflow: 'visible' } }}
        disableTypography
        action={
          <>
            <Button
              startIcon={<ChatBubbleTwoToneIcon />}
              variant="outlined"
              color="secondary"
              size="small"
            >
              Contact
            </Button>
            <Button
              startIcon={<PermIdentityTwoToneIcon />}
              variant="outlined"
              color="secondary"
              size="small"
            >
              View profile
            </Button>
          </>
        }
        title={<AvatarTitleDescriptionAlternate />}
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
