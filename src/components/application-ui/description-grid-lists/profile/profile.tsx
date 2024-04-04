import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Rating,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

function Profile() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Avatar
        sx={{
          mx: 'auto',
          mb: 1.5,
          width: theme.spacing(12),
          height: theme.spacing(12),
        }}
        variant="rounded"
        alt="Craig Donin"
        src="/avatars/3.png"
      />
      <Typography
        align="center"
        variant="h4"
      >
        Craig Donin
      </Typography>
      <Typography
        align="center"
        variant="h5"
        fontWeight={400}
        color="text.secondary"
        gutterBottom
      >
        {t('Senior Web Developer')}
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Rating
          value={4}
          defaultValue={5}
          precision={1}
          readOnly
        />
        <Typography
          variant="h5"
          sx={{
            pl: 0.5,
          }}
        >
          4.1
        </Typography>
      </Box>

      <Stack
        spacing={1}
        py={{ xs: 2, sm: 3 }}
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Tooltip
          arrow
          placement="top"
          title={t('Call')}
        >
          <ButtonIcon
            color="secondary"
            variant="contained"
          >
            <PhoneTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title={t('Send email')}
        >
          <ButtonIcon
            color="secondary"
            variant="contained"
          >
            <EmailTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title={t('Send message')}
        >
          <ButtonIcon
            color="secondary"
            variant="contained"
          >
            <MessageTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
      </Stack>
      <List
        sx={{
          width: '100%',
        }}
      >
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5,
          }}
        >
          <ListItemText
            primary={t('Join Date')}
            primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
          >
            22 January 2021
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5,
          }}
        >
          <ListItemText
            primary={t('Company')}
            primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
          >
            Google Inc.
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5,
          }}
        >
          <ListItemText
            primary={t('Tasks')}
            primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
            fontWeight={700}
          >
            67 active
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default Profile;
