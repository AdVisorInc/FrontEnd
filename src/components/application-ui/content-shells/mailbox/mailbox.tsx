import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Divider, Theme, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useSearchParams } from 'src/hooks/use-search-params';
import { closeSidebar, getTags, openSidebar } from 'src/slices/mailbox';
import { useDispatch, useSelector } from 'src/store';
import { MailboxResults } from './results';
import { MailboxSidebar } from './sidebar';
import { MailboxSingle } from './single';

const Component = () => {
  const dispatch = useDispatch();
  const { tags, sidebarOpen } = useSelector((state) => state.mailbox);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const theme = useTheme();

  const pageRef = useRef<HTMLDivElement | null>(null);

  const searchParams = useSearchParams();
  const mailId = searchParams.get('mailId') as string;
  const tag = searchParams.get('tag') as string;

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  const handleDrawerToggle = (): void => {
    if (sidebarOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <Box
      display="flex"
      flex={1}
      position="relative"
      zIndex={2}
      ref={pageRef}
      overflow="hidden"
    >
      <MailboxSidebar
        tag={tag}
        onClose={handleCloseSidebar}
        onOpen={handleOpenSidebar}
        open={sidebarOpen}
        parentContainer={pageRef.current}
        tags={tags}
      />
      <Box
        flex={1}
        position="relative"
        zIndex={5}
        overflow="hidden"
        sx={{
          transition: sidebarOpen
            ? theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              })
            : theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
        }}
      >
        {!lgUp && (
          <>
            <ButtonIcon
              variant="outlined"
              color="secondary"
              sx={{
                mx: { xs: 2, sm: 3 },
                my: 2,
                color: 'primary.main',
              }}
              onClick={handleDrawerToggle}
              size="small"
            >
              <MenuRoundedIcon />
            </ButtonIcon>
            <Divider />
          </>
        )}

        {mailId ? (
          <MailboxSingle
            tag={tag}
            mailId={mailId}
          />
        ) : (
          <MailboxResults tag={tag} />
        )}
      </Box>
    </Box>
  );
};

export default Component;
