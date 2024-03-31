import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import AvatarUploadSmallAlt from 'src/components/application-ui/upload/avatar/avatar-upload-small-alt';
import ProfileCoverUpload from './profile-cover-upload';

const Component: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        mb={2}
        alignItems="center"
      >
        <Tooltip
          arrow
          placement="top"
          title={t('Go back')}
        >
          <IconButton
            color="primary"
            sx={{
              p: 1.5,
              mr: 1,
            }}
          >
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography
            variant="h4"
            fontWeight={600}
          >
            {t('Profile details')}
          </Typography>
          <Typography variant="subtitle2">
            {t('This is a profile page. Easy to modify, always blazing fast')}
          </Typography>
        </Box>
      </Box>
      <Box>
        <ProfileCoverUpload />
        <Box
          mt={{ xs: -3, md: -6 }}
          pl={{ xs: 2, md: 3 }}
          position="relative"
        >
          <AvatarUploadSmallAlt />
        </Box>
      </Box>
    </>
  );
};

export default Component;
