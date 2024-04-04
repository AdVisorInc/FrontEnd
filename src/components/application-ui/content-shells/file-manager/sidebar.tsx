import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import {
  alpha,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  SwipeableDrawer,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';
import DocumentsUploadListAccent from 'src/components/application-ui/upload/file-list-accent/documents-upload-list-accent';
import { Scrollbar } from 'src/components/base/scrollbar';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonLight } from 'src/components/base/styles/button';
import { DividerLight } from 'src/components/base/styles/card';

const BoxUpgrade = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,

  img: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

interface FileManagerSidebarProps {
  parentContainer?: HTMLDivElement | null;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
}

export const FileManagerSidebar: FC<FileManagerSidebarProps> = (props) => {
  const { parentContainer, onClose, onOpen, open, ...other } = props;
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const theme = useTheme();

  const data = {
    percentage: 68.45,
  };

  const sidebarContent = (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      divider={<DividerLight />}
      sx={{
        p: { xs: 2, sm: 3 },
      }}
    >
      <Box>
        <Typography
          sx={{ pb: { xs: 2, sm: 3 } }}
          color="common.white"
          variant="h3"
        >
          {t('Storage')}
        </Typography>
        <Box display="flex">
          <Box width={110}>
            <CircularProgressbarWithChildren
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2.2 + 1 / 5.85,
                trailColor: alpha(theme.palette.common.white, 0.15),
                pathColor: theme.palette.common.white,
                strokeLinecap: 'round',
              })}
              strokeWidth={6}
              value={data.percentage}
            >
              <Typography
                variant="h5"
                fontWeight={500}
                color="common.white"
                sx={{ mt: -1.5 }}
              >
                {data.percentage}%
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Box pl={2}>
            <WarningTwoToneIcon
              fontSize="large"
              sx={{
                color: 'warning.light',
              }}
            />
            <Typography
              color="common.white"
              variant="subtitle1"
              gutterBottom
            >
              {t('Storage almost up')}!
            </Typography>
            <Typography
              color="common.white"
              variant="h4"
            >
              <b>27GB</b>
              {t(' of ')}
              <b>49GB</b> {t('used')}
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{ mt: 1 }}
          variant="contained"
        >
          {t('Increase storage')}
        </Button>
      </Box>

      <List
        disablePadding
        component="div"
      >
        <ListItem
          component="div"
          disableGutters
        >
          <ListItemAvatar>
            <AvatarState
              state="light"
              variant="rounded"
              sx={{
                width: 74,
                height: 74,
              }}
            >
              <ImageTwoToneIcon fontSize="large" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            sx={{
              pl: 2,
            }}
            primary={
              <Typography
                color="common.white"
                variant="h4"
              >
                {t('Images')}
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="subtitle1"
              >
                2.584 {t('files')}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography
              color="common.white"
              variant="h4"
            >
              15.23 GB
            </Typography>
          </Box>
        </ListItem>
        <DividerLight variant="inset" />
        <ListItem
          component="div"
          disableGutters
        >
          <ListItemAvatar>
            <AvatarState
              state="light"
              variant="rounded"
              sx={{
                width: 74,
                height: 74,
              }}
            >
              <VideocamTwoToneIcon fontSize="large" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            sx={{
              pl: 2,
            }}
            primary={
              <Typography
                color="common.white"
                variant="h4"
              >
                {t('Videos')}
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="subtitle1"
              >
                376 {t('files')}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography
              color="common.white"
              variant="h4"
            >
              6.71 GB
            </Typography>
          </Box>
        </ListItem>
        <DividerLight variant="inset" />
        <ListItem
          component="div"
          disableGutters
        >
          <ListItemAvatar>
            <AvatarState
              state="light"
              variant="rounded"
              sx={{
                width: 74,
                height: 74,
              }}
            >
              <TextSnippetTwoToneIcon fontSize="large" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            sx={{
              pl: 2,
            }}
            primary={
              <Typography
                color="common.white"
                variant="h4"
              >
                {t('Documents')}
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="subtitle1"
              >
                14.748 {t('files')}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography
              color="common.white"
              variant="h4"
            >
              9.46 GB
            </Typography>
          </Box>
        </ListItem>
      </List>

      <DocumentsUploadListAccent />

      <BoxUpgrade
        sx={{
          p: { xs: 2, sm: 3 },
        }}
      >
        <Box pr={13}>
          <Typography
            color="common.white"
            variant="h2"
            sx={{
              pb: 1,
            }}
          >
            {t('Get more space now')}!
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
              pb: 3,
              pr: 2,
            }}
            variant="subtitle1"
          >
            {t('Upgrade to an Enterprise account')}
          </Typography>
        </Box>
        <ButtonLight
          startIcon={<SpeedTwoToneIcon />}
          variant="contained"
        >
          {t('Increase storage')}
        </ButtonLight>
        <img
          src="/placeholders/illustrations/2.png"
          alt="..."
        />
      </BoxUpgrade>
    </Stack>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="right"
        open={open}
        PaperProps={{
          sx: {
            position: 'relative',
            width: 420,
            background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
            boxShadow: (theme) => theme.shadows[0],
          },
        }}
        SlideProps={{ container: parentContainer }}
        variant="persistent"
        {...other}
      >
        <Scrollbar>{sidebarContent}</Scrollbar>
      </Drawer>
    );
  }

  return (
    <SwipeableDrawer
      anchor="left"
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: { xs: 340, sm: 380, md: 400 },
          pointerEvents: 'auto',
          position: 'absolute',
          boxShadow: (theme) => theme.shadows[24],
          background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
        },
      }}
      ModalProps={{
        BackdropProps: {
          sx: {
            backdropFilter: 'blur(3px) !important',
            background: `linear-gradient(90deg, ${alpha(
              theme.palette.neutral[200],
              0.7
            )} 10%, ${alpha(theme.palette.neutral[900], 0.6)} 100%) !important`,
          },
        },
      }}
      variant="temporary"
      {...other}
    >
      <Scrollbar>{sidebarContent}</Scrollbar>
    </SwipeableDrawer>
  );
};

FileManagerSidebar.propTypes = {
  parentContainer: PropTypes.any,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
