import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { formatDistance, subHours, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const CardWrapperPrimary = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  maxWidth: '380px',
  display: 'inline-flex',
}));

const CardWrapperSecondary = styled(Card)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.neutral[300], 0.2)
      : alpha(theme.palette.neutral[300], 0.2),
  borderRadius: theme.shape.borderRadius,
  borderTopLeftRadius: theme.shape.borderRadius,
  maxWidth: '380px',
  display: 'inline-flex',
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: 'none',
  borderRadius: 0,
}));

function Component() {
  const { t } = useTranslation();
  const user = {
    avatar: '/avatars/1.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            sx={{
              pb: 1,
            }}
            variant="caption"
            fontWeight={600}
            color="text.secondary"
          >
            {t('Messenger')}
          </Typography>
          <Typography variant="h5">{t('Talking to Kate')}</Typography>
        </Box>
        <IconButton
          size="small"
          color="primary"
        >
          <AddCircleTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 480,
          overflowY: 'auto',
        }}
      >
        <Box px={2}>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            py={{ xs: 1, sm: 2, md: 3 }}
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 50,
                height: 50,
              }}
              alt="Zain Baptista"
              src="/avatars/3.png"
            />
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              justifyContent="flex-start"
              ml={2}
            >
              <CardWrapperSecondary sx={{ p: { xs: 1, md: 2 } }}>
                Hi. Can you send me the missing invoices asap?
              </CardWrapperSecondary>
              <Typography
                variant="subtitle2"
                color="text.secondary"
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
            py={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              display="flex"
              alignItems="flex-end"
              flexDirection="column"
              justifyContent="flex-end"
              mr={{ xs: 1, sm: 2 }}
            >
              <CardWrapperPrimary sx={{ p: { xs: 1, md: 2 } }}>
                Yes, I'll email them right now. I'll let you know once the remaining invoices are
                done.
              </CardWrapperPrimary>
              <Typography
                variant="subtitle2"
                color="text.secondary"
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

          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-end"
            py={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              display="flex"
              alignItems="flex-end"
              flexDirection="column"
              justifyContent="flex-end"
              mr={{ xs: 1, sm: 2 }}
            >
              <CardWrapperPrimary sx={{ p: { xs: 1, md: 2 } }}>
                Hey! Are you there?
              </CardWrapperPrimary>
              <CardWrapperPrimary
                sx={{
                  mt: { xs: 1, md: 2 },
                  p: { xs: 1, md: 2 },
                }}
              >
                Heeeelloooo????
              </CardWrapperPrimary>
              <Typography
                variant="subtitle2"
                color="text.secondary"
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
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            py={{ xs: 1, sm: 2, md: 3 }}
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 50,
                height: 50,
              }}
              alt="Zain Baptista"
              src="/avatars/3.png"
            />
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              justifyContent="flex-start"
              ml={2}
            >
              <CardWrapperSecondary sx={{ p: { xs: 1, md: 2 } }}>Hey there!</CardWrapperSecondary>
              <CardWrapperSecondary
                sx={{
                  mt: { xs: 1, md: 2 },
                  p: { xs: 1, md: 2 },
                }}
              >
                How are you? Is it ok if I call you?
              </CardWrapperSecondary>
              <Typography
                variant="subtitle2"
                color="text.secondary"
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
            py={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              display="flex"
              alignItems="flex-end"
              flexDirection="column"
              justifyContent="flex-end"
              mr={{ xs: 1, sm: 2 }}
            >
              <CardWrapperPrimary sx={{ p: { xs: 1, md: 2 } }}>
                Hello, I just got my Amazon order shipped and I’m very happy about that.
              </CardWrapperPrimary>
              <CardWrapperPrimary
                sx={{
                  mt: { xs: 1, md: 2 },
                  p: { xs: 1, md: 2 },
                }}
              >
                Can you confirm?
              </CardWrapperPrimary>
              <Typography
                variant="subtitle2"
                color="text.secondary"
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
      </Box>
      <Divider />
      <CardWrapper
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
          >
            {t('Create Post')}
          </Button>
        </Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {t('Posting as')}{' '}
          <Typography
            component="span"
            color="text.primary"
          >
            <b>Emma Taylor</b>
          </Typography>
        </Typography>
      </CardWrapper>
      <Divider />
      <Box
        p={2}
        display="flex"
        alignItems="center"
      >
        <Box
          sx={{
            flex: 1,
            mr: 1,
          }}
        >
          <TextField
            variant="outlined"
            hiddenLabel
            multiline
            minRows={1}
            maxRows={6}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment
                  sx={{ ml: -0.5 }}
                  position="start"
                >
                  <Avatar
                    variant="rounded"
                    alt={user.name}
                    src={user.avatar}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  sx={{ mr: -0.5 }}
                  position="end"
                >
                  <Stack
                    spacing={1}
                    direction="row"
                  >
                    <Tooltip title="Attach image">
                      <IconButton
                        sx={{
                          display: { xs: 'none', sm: 'flex' },
                        }}
                        color="primary"
                      >
                        <AttachFileTwoToneIcon />
                      </IconButton>
                    </Tooltip>
                    <Badge
                      color="warning"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <ButtonIcon
                        variant="contained"
                        startIcon={<SendTwoToneIcon />}
                      />
                    </Badge>
                  </Stack>
                </InputAdornment>
              ),
            }}
            placeholder={t('Write here...')}
          />
        </Box>
      </Box>
    </Card>
  );
}

export default Component;
