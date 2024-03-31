import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  alpha,
  Box,
  Checkbox,
  Divider,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

interface ActionBarItemProps {
  mails: number;
  onDeselectAll?: () => void;
  onSelectAll?: () => void;
  selectedMails: number;
}

const ActionBarItem: FC<ActionBarItemProps> = ({
  mails,
  onDeselectAll,
  onSelectAll,
  selectedMails,
}) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) =>
    event.target.checked ? onSelectAll?.() : onDeselectAll?.();

  const selectedAllMails = selectedMails === mails && mails > 0;
  const selectedSomeMails = selectedMails > 0 && selectedMails < mails;
  const selectedBulkActions = selectedMails > 0;

  const { t } = useTranslation();

  const [onMenuOpen, menuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);

  const openMenu = (): void => {
    menuOpen(true);
  };

  const closeMenu = (): void => {
    menuOpen(false);
  };

  return (
    <>
      <Box p={{ xs: 2, sm: 3 }}>
        <TextField
          autoFocus
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            ),
          }}
          placeholder={t('Search messages...')}
          fullWidth
        />
      </Box>
      <Divider />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        pl={{ xs: 1, sm: 2 }}
        pr={{ xs: 2, sm: 3 }}
        py={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Tooltip
            arrow
            placement="top"
            title={t('Select all mails')}
          >
            <Checkbox
              checked={selectedAllMails}
              indeterminate={selectedSomeMails}
              onChange={handleCheckboxChange}
            />
          </Tooltip>
          {!selectedBulkActions && <Typography>{t('Select all')}</Typography>}
          {selectedBulkActions && (
            <Stack
              direction="row"
              spacing={1}
              pl={1}
            >
              <Tooltip
                arrow
                placement="top"
                title={t('Archive')}
              >
                <ButtonIcon
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  <ArchiveTwoToneIcon />
                </ButtonIcon>
              </Tooltip>
              <Tooltip
                arrow
                placement="top"
                title={t('Delete')}
              >
                <ButtonIcon
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  <DeleteTwoToneIcon />
                </ButtonIcon>
              </Tooltip>
              <Tooltip
                arrow
                placement="top"
                title={t('Mark as read')}
              >
                <ButtonIcon
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  <MarkEmailReadTwoToneIcon />
                </ButtonIcon>
              </Tooltip>
              <ButtonIcon
                color="primary"
                size="small"
                onClick={openMenu}
                ref={moreRef}
              >
                <MoreVertTwoToneIcon />
              </ButtonIcon>
            </Stack>
          )}
        </Box>

        {mails > 0 && (
          <Box
            display="flex"
            alignItems="center"
          >
            <ButtonIcon
              variant="outlined"
              size="small"
              color="secondary"
            >
              <ChevronLeftTwoToneIcon />
            </ButtonIcon>

            <Typography
              sx={{ px: 1 }}
              variant="body2"
              color="text.secondary"
            >
              <b>1</b> - <b>{mails}</b> {t('of')} <b>{mails}</b>
            </Typography>
            <ButtonIcon
              variant="outlined"
              size="small"
              color="secondary"
            >
              <ChevronRightTwoToneIcon />
            </ButtonIcon>
          </Box>
        )}
      </Box>
      <Menu
        disableScrollLock
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <List
          disablePadding
          sx={{
            '& .MuiListItemButton-root': {
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            },
          }}
          component="nav"
        >
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Mark as read')}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Mark as important')}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Show similar emails')}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Forward as attachment')}
            />
          </ListItemButton>
        </List>
      </Menu>
    </>
  );
};

ActionBarItem.propTypes = {
  mails: PropTypes.number.isRequired,
  onDeselectAll: PropTypes.func,
  onSelectAll: PropTypes.func,
  selectedMails: PropTypes.number.isRequired,
};

ActionBarItem.defaultProps = {
  onDeselectAll: () => {},
  onSelectAll: () => {},
};

export default ActionBarItem;
