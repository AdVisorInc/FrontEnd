import { Divider } from '@mui/material';
import AvatarUploadLogo from './avatar-upload-logo';
import AvatarUploadSmall from './avatar-upload-small';
import AvatarUploadSmallAlt from './avatar-upload-small-alt';

const Component = () => {
  return (
    <>
      <AvatarUploadSmall />
      <Divider sx={{ my: { xs: 2, md: 4 } }} />
      <AvatarUploadSmallAlt />
      <Divider sx={{ my: { xs: 2, md: 4 } }} />
      <AvatarUploadLogo />
    </>
  );
};

export default Component;
