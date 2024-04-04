import {
  alpha,
  Box,
  Button,
  Drawer,
  List,
  ListSubheader,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';
import type { Tag } from 'src/models/mailbox';
import { MailboxSidebarItem } from './sidebar-item';

interface MailboxSidebarProps {
  tag?: string;
  tags: Tag[];
  open?: boolean;
  parentContainer?: HTMLDivElement | null;
  onClose?: () => void;
  onOpen?: () => void;
}

const groupTags = (tags) => {
  const groups = {
    category_tag: [],
    label_tag: [],
  };

  tags.forEach((tag) => {
    if (tag.type === 'category_tag') {
      groups.category_tag.push(tag);
    } else {
      groups.label_tag.push(tag);
    }
  });

  return groups;
};

export const MailboxSidebar: FC<MailboxSidebarProps> = (props) => {
  const { tag: currentTag, parentContainer, tags, open, onClose, onOpen } = props;
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const theme = useTheme();
  const groupedTags = groupTags(tags);

  const handleTagClick = () => {
    onClose?.();
  };

  const sidebarContent = (
    <Box p={{ xs: 2, sm: 3 }}>
      <Button
        sx={{ mb: { xs: 2, sm: 3 } }}
        fullWidth
        variant="contained"
      >
        {t('Compose message')}
      </Button>

      {Object.keys(groupedTags).map((type) => (
        <List
          key={type}
          disablePadding
          component="div"
        >
          {type === 'label_tag' && (
            <ListSubheader
              disableGutters
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
              disableSticky={true}
            >
              {t('Labels')}
            </ListSubheader>
          )}
          {groupedTags[type].map((tag) => (
            <MailboxSidebarItem
              active={currentTag === tag.id || (!currentTag && tag.id === 'inbox')}
              key={tag.id}
              tag={tag}
              onClick={handleTagClick}
            />
          ))}
        </List>
      ))}
    </Box>
  );
  if (lgUp) {
    return (
      <>
        <Drawer
          variant="permanent"
          anchor="left"
          SlideProps={{ container: parentContainer }}
          open
          PaperProps={{
            sx: {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
              position: 'relative',
              width: 260,
            },
          }}
        >
          <Scrollbar>{sidebarContent}</Scrollbar>
        </Drawer>
      </>
    );
  }

  return (
    <SwipeableDrawer
      variant="temporary"
      anchor="left"
      onClose={onClose}
      onOpen={onOpen}
      SlideProps={{ container: parentContainer }}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: 280,
          pointerEvents: 'auto',
          position: 'absolute',
          boxShadow: (theme) => theme.shadows[24],
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
    >
      <Scrollbar>{sidebarContent}</Scrollbar>
    </SwipeableDrawer>
  );
};

MailboxSidebar.propTypes = {
  open: PropTypes.bool,
  tag: PropTypes.string,
  tags: PropTypes.array.isRequired,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};
