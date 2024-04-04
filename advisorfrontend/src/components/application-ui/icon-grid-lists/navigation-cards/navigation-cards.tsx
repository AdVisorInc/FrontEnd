import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import {
  Box,
  Card,
  CardActionArea,
  Chip,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const CardActionAreaWrapper = styled(CardActionArea)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '.MuiTouchRipple-root': {
    opacity: 0.15,
  },

  '&:hover': {
    '.MuiCardActionArea-focusHighlight': {
      opacity: 0.02,
    },
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <CardActionAreaWrapper>
            <Box
              component="span"
              overflow="hidden"
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="success"
                sx={{
                  width: 64,
                  height: 64,
                }}
              >
                <PersonTwoToneIcon />
              </AvatarState>
              <Box
                ml={1.5}
                overflow="hidden"
              >
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{
                    fontSize: theme.typography.pxToRem(16),
                  }}
                  noWrap
                >
                  {t('Project management')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: theme.typography.pxToRem(14),
                  }}
                  color="success.main"
                >
                  +5,46%
                </Typography>
              </Box>
            </Box>
            <Typography
              component="span"
              color="text.secondary"
              sx={{
                opacity: 0.7,
              }}
            >
              <ArrowForwardTwoToneIcon />
            </Typography>
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <CardActionAreaWrapper>
            <Box
              component="span"
              display="flex"
              overflow="hidden"
              alignItems="center"
            >
              <AvatarState
                state="warning"
                sx={{
                  width: 64,
                  height: 64,
                }}
              >
                <SubscriptionsTwoToneIcon />
              </AvatarState>
              <Box
                ml={1.5}
                overflow="hidden"
              >
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{
                    fontSize: theme.typography.pxToRem(16),
                  }}
                  noWrap
                >
                  {t('Analytics statistics')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: theme.typography.pxToRem(14),
                  }}
                  color="warning.main"
                >
                  487 {t('new users')}
                </Typography>
              </Box>
            </Box>
            <Typography
              component="span"
              color="text.secondary"
              sx={{
                opacity: 0.7,
              }}
            >
              <ArrowForwardTwoToneIcon />
            </Typography>
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <CardActionAreaWrapper>
            <Box
              component="span"
              overflow="hidden"
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="primary"
                isSoft
                sx={{
                  width: 64,
                  height: 64,
                }}
              >
                <SubscriptionsTwoToneIcon />
              </AvatarState>
              <Box
                ml={1.5}
                overflow="hidden"
              >
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{
                    fontSize: theme.typography.pxToRem(16),
                  }}
                  noWrap
                >
                  {t('Tasks overview')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: theme.typography.pxToRem(14),
                  }}
                >
                  <Chip
                    size="small"
                    label={`5 ${t('tasks')}`}
                    color="error"
                  />
                  <Box
                    component="span"
                    pl={1}
                    sx={{
                      color: 'error.main',
                    }}
                  >
                    {t('due')}
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Typography
              component="span"
              color="text.secondary"
              sx={{
                opacity: 0.7,
              }}
            >
              <ArrowForwardTwoToneIcon />
            </Typography>
          </CardActionAreaWrapper>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
