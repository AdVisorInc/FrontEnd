import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { format, formatDistance } from 'date-fns';
import NextLink from 'next/link';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { VisuallyHiddenInputNative } from 'src/components/base/styles/visually-hidden';
import { useCustomization } from 'src/hooks/use-customization';
import { getMail } from 'src/slices/mailbox';
import { useDispatch, useSelector } from 'src/store';

interface MailboxSingleProps {
  mailId: string;
  tag: string;
}

export const MailboxSingle: FC<MailboxSingleProps> = (props) => {
  const { mailId, tag } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const mailbox = useSelector((state) => state.mailbox.mails.byId[mailId]);
  const [onMenuOpen, menuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    dispatch(getMail(mailId));
  }, [mailId]);
  if (!mailbox) {
    return null;
  }

  const handleBack = tag && tag !== 'inbox' ? `?tag=${tag}` : '?';

  const openMenu = (): void => {
    menuOpen(true);
  };

  const closeMenu = (): void => {
    menuOpen(false);
  };

  const user = {
    avatar: '/avatars/1.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };
  const customization = useCustomization();

  return (
    <Container maxWidth={customization.stretch ? false : 'xl'}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={{ xs: 2, sm: 3 }}
      >
        <NextLink
          href={handleBack}
          passHref
        >
          <Tooltip
            arrow
            placement="top"
            title={t('Go back')}
          >
            <ButtonIcon
              size="small"
              color="secondary"
              variant="outlined"
            >
              <ArrowBackTwoToneIcon />
            </ButtonIcon>
          </Tooltip>
        </NextLink>

        <Stack
          direction="row"
          spacing={0.5}
        >
          <Tooltip
            arrow
            placement="top"
            title={t('Archive')}
          >
            <IconButton color="primary">
              <ArchiveTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title={t('Delete')}
          >
            <IconButton color="primary">
              <DeleteTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title={t('Mark as read')}
          >
            <IconButton color="primary">
              <MarkEmailReadTwoToneIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            color="primary"
            onClick={openMenu}
            ref={moreRef}
          >
            <MoreVertTwoToneIcon />
          </IconButton>
        </Stack>
      </Box>
      <Divider />
      <Box py={{ xs: 2, sm: 3 }}>
        <Typography
          variant="h4"
          fontWeight={500}
        >
          {mailbox.subject}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          borderRadius: (theme) => theme.shape.borderRadius + 'px',
        }}
        p={2}
        display="flex"
        alignItems="flex-start"
        overflow="hidden"
        justifyContent="space-between"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box
          display="flex"
          alignItems="center"
          overflow="hidden"
          width="100%"
        >
          <Avatar
            sx={{
              mr: 1,
            }}
            src={mailbox.from.avatar}
          />
          <Box overflow="hidden">
            <Typography
              noWrap
              variant="h6"
            >
              {mailbox.from.email}{' '}
              <Typography
                component="span"
                variant="h6"
                noWrap
                color="text.secondary"
                fontWeight={400}
              >
                ({mailbox.from.name})
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              color="text.secondary"
              fontWeight={400}
            >
              {t('to')}{' '}
              {mailbox.to.map((to) => (
                <Typography
                  component="span"
                  noWrap
                  key={to.name}
                >
                  {to.name} ({to.email})
                </Typography>
              ))}
            </Typography>
          </Box>
        </Box>
        <Box
          pt={{ xs: 2, md: 0 }}
          display="flex"
          flexDirection={{ xs: 'row', md: 'column' }}
          gap={{ xs: 1, md: 0 }}
          textAlign={{ xs: 'left', md: 'right' }}
        >
          <Typography
            variant="subtitle2"
            color="text.primary"
            fontWeight={600}
            noWrap
          >
            {format(mailbox.date, 'MMMM dd yyyy')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {formatDistance(mailbox.date, new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </Box>
      <Box p={{ xs: 1, sm: 2 }}>
        <div dangerouslySetInnerHTML={{ __html: mailbox.content }} />
      </Box>
      <Divider />
      <Box
        py={{ xs: 2, sm: 3 }}
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="flex-start"
      >
        <Avatar
          sx={{
            width: 54,
            height: 54,
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
        <Box
          ml={{ xs: 0, sm: 2 }}
          mt={{ xs: 2, sm: 0 }}
          flexGrow={1}
        >
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
            p={2}
          >
            <Typography
              component="span"
              variant="subtitle1"
            >
              {t('Sending as')}:{' '}
            </Typography>
            <Typography
              component="span"
              variant="h5"
              color="text.primary"
              fontWeight={500}
            >
              {mailbox.from.email}{' '}
              <Typography
                component="span"
                variant="h5"
                color="text.secondary"
                fontWeight={400}
              >
                ({mailbox.from.name})
              </Typography>
            </Typography>
            <TextField
              sx={{
                mt: 2,
              }}
              fullWidth
              multiline
              minRows={4}
              name="mail_reply"
              variant="outlined"
              placeholder={t('Write your reply here...')}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pt={2}
          >
            <Stack
              spacing={2}
              alignItems="center"
              divider={
                <Divider
                  flexItem
                  orientation="vertical"
                />
              }
              direction="row"
            >
              <Button
                startIcon={<ReplyTwoToneIcon />}
                variant="contained"
              >
                {t('Reply')}
              </Button>
              <Stack
                direction="row"
                spacing={1}
              >
                <Tooltip
                  arrow
                  placement="top"
                  title={t('Insert an emoji')}
                >
                  <ButtonIcon
                    variant="outlined"
                    color="secondary"
                    sx={{
                      width: 42,
                      height: 42,
                      fontSize: 22,
                    }}
                  >
                    😀
                  </ButtonIcon>
                </Tooltip>

                <Tooltip
                  arrow
                  placement="top"
                  title={t('Attach a file')}
                >
                  <label htmlFor="messenger-upload-file">
                    <ButtonIcon
                      variant="outlined"
                      color="secondary"
                      sx={{
                        width: 42,
                        height: 42,
                      }}
                    >
                      <AttachFileTwoToneIcon fontSize="small" />
                    </ButtonIcon>
                  </label>
                </Tooltip>
              </Stack>
            </Stack>

            <Tooltip
              arrow
              placement="top"
              title={t('Delete draft')}
            >
              <ButtonIcon
                sx={{
                  width: 42,
                  height: 42,
                  color: 'error.main',
                }}
                variant="outlined"
                color="secondary"
              >
                <DeleteTwoToneIcon fontSize="small" />
              </ButtonIcon>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <VisuallyHiddenInputNative
        accept="image/*"
        id="messenger-upload-file"
        type="file"
      />
      <Menu
        disableScrollLock
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
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
          <ListItemButton onClick={closeMenu}>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Mark as read')}
            />
          </ListItemButton>
          <ListItemButton onClick={closeMenu}>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Mark as important')}
            />
          </ListItemButton>
          <ListItemButton onClick={closeMenu}>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Show similar emails')}
            />
          </ListItemButton>
          <ListItemButton onClick={closeMenu}>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
              }}
              primary={t('Forward as attachment')}
            />
          </ListItemButton>
        </List>
      </Menu>
    </Container>
  );
};
