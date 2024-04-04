import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Container,
  InputBase,
  Stack,
  Theme,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { VisuallyHiddenInputNative } from 'src/components/base/styles/visually-hidden';
import { useCustomization } from 'src/hooks/use-customization';

function BottomBarContent() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const customization = useCustomization();

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',

        p: { xs: 1, sm: 2 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        maxWidth={customization.stretch ? false : 'xl'}
      >
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
        >
          <Avatar
            src="/avatars/3.png"
            sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
          />
          <InputBase
            autoFocus
            sx={{
              fontSize: 18,
              p: 1,
            }}
            placeholder={t('Write your message here...')}
            fullWidth
          />
        </Box>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2 }}
        >
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
          <VisuallyHiddenInputNative
            accept="image/*"
            id="messenger-upload-file"
            type="file"
          />
          {smUp ? (
            <Button
              startIcon={<SendTwoToneIcon />}
              variant="contained"
            >
              {t('Send')}
            </Button>
          ) : (
            <ButtonIcon
              startIcon={<SendTwoToneIcon />}
              variant="contained"
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default BottomBarContent;
