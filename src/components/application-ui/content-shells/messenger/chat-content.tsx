import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import { Avatar, Box, Card, Chip, Divider, styled, Typography } from '@mui/material';
import { format, formatDistance, subDays, subHours, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';

const CardWrapperPrimary = styled(Card)(
  ({ theme }) => `
      background: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
      padding: ${theme.spacing(2)};
      border-radius: ${theme.shape.borderRadius};
      border-top-right-radius: ${theme.shape.borderRadius};
      max-width: 380px;
      display: inline-flex;
`
);

const CardWrapperSecondary = styled(Card)(
  ({ theme }) => `
      background: ${theme.palette.neutral[100]};
      color: ${theme.palette.common.black};
      padding: ${theme.spacing(2)};
      border-radius: ${theme.shape.borderRadius};
      border-top-left-radius: ${theme.shape.borderRadius};
      max-width: 380px;
      display: inline-flex;
`
);

function ChatContent() {
  const { t } = useTranslation();
  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
  };

  return (
    <Box py={{ xs: 2, sm: 3 }}>
      <Divider>
        <Chip
          variant="outlined"
          color="secondary"
          label={format(subDays(new Date(), 3), 'MMMM dd yyyy')}
        />
      </Divider>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        py={3}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 50,
            height: 50,
          }}
          alt="Zain Baptista"
          src="/avatars/1.png"
        />
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="flex-start"
          ml={2}
        >
          <CardWrapperSecondary
            elevation={0}
            variant="outlined"
          >
            Hi. Can you send me the missing invoices asap?
          </CardWrapperSecondary>
          <Typography
            variant="subtitle1"
            sx={{
              pt: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ScheduleTwoToneIcon
              sx={{
                mr: 0.5,
              }}
              fontSize="small"
            />
            {formatDistance(subHours(new Date(), 115), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        py={3}
      >
        <Box
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          justifyContent="flex-end"
          mr={2}
        >
          <CardWrapperPrimary elevation={10}>
            Yes, I'll email them right now. I'll let you know once the remaining invoices are done.
          </CardWrapperPrimary>
          <Typography
            variant="subtitle1"
            sx={{
              pt: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ScheduleTwoToneIcon
              sx={{
                mr: 0.5,
              }}
              fontSize="small"
            />
            {formatDistance(subHours(new Date(), 125), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Avatar
          variant="rounded"
          sx={{
            width: 50,
            height: 50,
          }}
          alt={user.name}
          src={user.avatar}
        />
      </Box>
      <Divider>
        <Chip
          variant="outlined"
          color="secondary"
          label={format(subDays(new Date(), 5), 'MMMM dd yyyy')}
        />
      </Divider>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        py={3}
      >
        <Box
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          justifyContent="flex-end"
          mr={2}
        >
          <CardWrapperPrimary elevation={10}>Hey! Are you there?</CardWrapperPrimary>
          <CardWrapperPrimary
            elevation={10}
            sx={{
              mt: 2,
            }}
          >
            Heeeelloooo????
          </CardWrapperPrimary>
          <Typography
            variant="subtitle1"
            sx={{
              pt: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ScheduleTwoToneIcon
              sx={{
                mr: 0.5,
              }}
              fontSize="small"
            />
            {formatDistance(subHours(new Date(), 60), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Avatar
          variant="rounded"
          sx={{
            width: 50,
            height: 50,
          }}
          alt={user.name}
          src={user.avatar}
        />
      </Box>
      <Divider>
        <Chip
          variant="outlined"
          color="secondary"
          label={t('Today')}
        />
      </Divider>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        py={3}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 50,
            height: 50,
          }}
          alt="Zain Baptista"
          src="/avatars/1.png"
        />
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="flex-start"
          ml={2}
        >
          <CardWrapperSecondary
            elevation={0}
            variant="outlined"
          >
            Hey there!
          </CardWrapperSecondary>
          <CardWrapperSecondary
            variant="outlined"
            sx={{
              mt: 1,
            }}
          >
            How are you? Is it ok if I call you?
          </CardWrapperSecondary>
          <Typography
            variant="subtitle1"
            sx={{
              pt: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ScheduleTwoToneIcon
              sx={{
                mr: 0.5,
              }}
              fontSize="small"
            />
            {formatDistance(subMinutes(new Date(), 6), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        py={3}
      >
        <Box
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          justifyContent="flex-end"
          mr={2}
        >
          <CardWrapperPrimary elevation={10}>
            Hello, I just got my Amazon order shipped and I'm very happy about that.
          </CardWrapperPrimary>
          <CardWrapperPrimary
            elevation={10}
            sx={{
              mt: 1,
            }}
          >
            Can you confirm?
          </CardWrapperPrimary>
          <Typography
            variant="subtitle1"
            sx={{
              pt: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ScheduleTwoToneIcon
              sx={{
                mr: 0.5,
              }}
              fontSize="small"
            />
            {formatDistance(subMinutes(new Date(), 8), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Avatar
          variant="rounded"
          sx={{
            width: 50,
            height: 50,
          }}
          alt={user.name}
          src={user.avatar}
        />
      </Box>
    </Box>
  );
}

export default ChatContent;
