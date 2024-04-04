import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MarkChatReadTwoToneIcon from '@mui/icons-material/MarkChatReadTwoTone';
import { alpha, Badge, Box, Button, Divider, Menu, Theme, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBasic from 'src/components/application-ui/input/search/search-basic';
import ChatList from 'src/components/application-ui/stacked-lists/chat/chat-list';
import { AvatarGradient } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

interface Origin {
  vertical: 'top' | 'bottom' | 'center';
  horizontal: 'left' | 'right' | 'center';
}
interface ComposedDropdownProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
}

export const ComposedDropdown: FC<ComposedDropdownProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;

  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <>
      <Menu
        id="composed-menu"
        component="div"
        anchorEl={anchorEl}
        open={!!open}
        onClose={onClose}
        anchorOrigin={props.anchorOrigin || { vertical: 'top', horizontal: 'right' }}
        transformOrigin={props.transformOrigin || { vertical: 'top', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'composed-button',
          sx: {
            p: 0,
            maxHeight: 420,
            flexDirection: 'column',
            display: 'flex',
            '.MuiList-root': {
              overflow: 'auto',
            },
          },
        }}
        slotProps={{
          paper: {
            sx: {
              overflow: 'hidden',
              display: 'flex',
            },
          },
        }}
      >
        <Box
          p={1}
          width={smUp ? 360 : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            background: (theme) => alpha(theme.palette.background.default, 0.7),
          }}
        >
          {smUp ? (
            <Button
              size="small"
              color="primary"
              startIcon={<MarkChatReadTwoToneIcon />}
            >
              {t('Mark all as seen')}
            </Button>
          ) : (
            <ButtonIcon
              color="primary"
              startIcon={<MarkChatReadTwoToneIcon />}
            />
          )}

          <Badge
            color="error"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            variant="dot"
            overlap="circular"
          >
            <AvatarGradient>ET</AvatarGradient>
          </Badge>
        </Box>
        <Divider />
        <SearchBasic />
        <Divider />
        <ChatList />
        <Divider />
        <Box
          sx={{
            background: (theme) => alpha(theme.palette.background.default, 0.7),
            textAlign: 'center',
          }}
          py={2}
        >
          <Button
            size="small"
            color="primary"
            variant="contained"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            {t('View all participants')}
          </Button>
        </Box>
      </Menu>
    </>
  );
};

ComposedDropdown.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
