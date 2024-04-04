import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Stack,
  styled,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { VisuallyHiddenInputNative } from 'src/components/base/styles/visually-hidden';
import { User } from 'src/mocks/users';

const AvatarWrapper = styled(Card)(
  ({ theme }) => `
    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const ButtonUploadWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.palette.primary.dark};
      }
    }
`
);

const CardCover = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

const CardCoverAction = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`
);

interface ProfileCoverProps {
  user: User;
}

const ProfileCover: FC<ProfileCoverProps> = ({ user }) => {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        mb={{ xs: 2, sm: 3 }}
      >
        <Tooltip
          arrow
          placement="top"
          title={t('Go back')}
        >
          <ButtonSoft
            color="primary"
            sx={{
              p: 0,
              width: 44,
              height: 44,
              minWidth: 0,
              mr: 2,
            }}
          >
            <ArrowBackTwoToneIcon />
          </ButtonSoft>
        </Tooltip>
        <Box>
          <Typography
            variant="h3"
            component="h3"
            sx={{ pb: 0.5 }}
          >
            {user.name}'s {t('profile')}
          </Typography>
          <Typography variant="subtitle1">
            {t('This is a profile page. Easy to modify, always blazing fast')}
          </Typography>
        </Box>
      </Box>
      <CardCover>
        <CardMedia image={user.coverImg} />
        <CardCoverAction>
          <VisuallyHiddenInputNative
            accept="image/*"
            id="change-cover"
            multiple
            type="file"
          />
          <label htmlFor="change-cover">
            <Button
              startIcon={<UploadTwoToneIcon />}
              variant="outlined"
              color="secondary"
              component="span"
            >
              {t('Change cover')}
            </Button>
          </label>
        </CardCoverAction>
      </CardCover>
      <AvatarWrapper>
        <Avatar
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
        <ButtonUploadWrapper>
          <VisuallyHiddenInputNative
            accept="image/*"
            id="icon-button-file"
            name="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              component="span"
              color="primary"
            >
              <UploadTwoToneIcon />
            </IconButton>
          </label>
        </ButtonUploadWrapper>
      </AvatarWrapper>
      <Box
        pt={2}
        pl={2}
      >
        <Typography variant="h4">
          {user.name}
          <Typography
            variant="h6"
            fontWeight={500}
            sx={{ pl: 0.5 }}
            color="text.secondary"
            component="span"
          >
            ({user.jobtitle})
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
        >
          {user.description}
        </Typography>
        <Stack
          mt={2}
          gap={{ xs: 1, sm: 1.5 }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
        >
          <Chip
            variant="outlined"
            color="info"
            label={user.location}
          />
          <Chip
            variant="outlined"
            color="info"
            label={
              <>
                {user.followers} {t('followers')}
              </>
            }
          />
          <Button
            size="small"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            {t('See all')}
            {' ' + user.followers + ' '}
            {t('connections')}
          </Button>
        </Stack>
        <Divider sx={{ ml: -2.5, my: 2 }} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            spacing={1}
            direction="row"
          >
            <Button
              size="small"
              variant="contained"
            >
              {t('Follow')}
            </Button>
            <Button
              size="small"
              variant="outlined"
            >
              {t('View website')}
            </Button>
          </Stack>
          <ButtonIcon
            color="primary"
            size="small"
          >
            <MoreHorizTwoToneIcon />
          </ButtonIcon>
        </Box>
      </Box>
    </>
  );
};

ProfileCover.propTypes = {
  // @ts-ignore
  user: PropTypes.object.isRequired,
};

export default ProfileCover;
