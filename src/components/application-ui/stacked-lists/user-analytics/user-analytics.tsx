import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

function Component() {
  const { t } = useTranslation();

  return (
    <Card>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="caption"
            fontWeight={600}
            color="text.secondary"
          >
            {t('Progress')}
          </Typography>
          <Typography variant="h5">{t('Users Analytics')}</Typography>
        </Box>
        <Chip
          variant="filled"
          color="warning"
          label={
            <InlineBadge>
              <PulseBadge
                variant="dot"
                color="warning"
              />
              <Typography
                variant="body2"
                color="warning.main"
                fontWeight={500}
                sx={{
                  pl: 1,
                  display: { xs: 'none', md: 'block' },
                }}
              >
                {t('Pending')}
              </Typography>
            </InlineBadge>
          }
        />
      </Box>
      <Divider />
      <Box
        sx={{
          height: 310,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2,
              }}
            >
              <Box
                py={1}
                flex={1}
                display="flex"
                alignItems="center"
              >
                <Box>
                  <Tooltip
                    arrow
                    placement="top"
                    title="Travis Howard"
                  >
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                      }}
                      component={Link}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      alt="Travis Howard"
                      src="/avatars/1.png"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5,
                  }}
                >
                  <LinearProgressAlternate
                    color="info"
                    variant="determinate"
                    value={35}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {t('Total')}
                  </Typography>
                  <Typography variant="h5">$1,375</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2,
              }}
            >
              <Box
                py={1}
                flex={1}
                display="flex"
                alignItems="center"
              >
                <Box>
                  <Tooltip
                    arrow
                    placement="top"
                    title="Chad Wright"
                  >
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                      }}
                      component={Link}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      alt="Chad Wright"
                      src="/avatars/2.png"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5,
                  }}
                >
                  <LinearProgressAlternate
                    color="success"
                    variant="determinate"
                    value={45}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {t('Total')}
                  </Typography>
                  <Typography variant="h5">$786</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2,
              }}
            >
              <Box
                py={1}
                flex={1}
                display="flex"
                alignItems="center"
              >
                <Box>
                  <Tooltip
                    arrow
                    placement="top"
                    title="Alaina Henry"
                  >
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                      }}
                      component={Link}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      alt="Alaina Henry"
                      src="/avatars/3.png"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5,
                  }}
                >
                  <LinearProgressAlternate
                    color="warning"
                    variant="determinate"
                    value={25}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {t('Total')}
                  </Typography>
                  <Typography variant="h5">$5,695</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2,
              }}
            >
              <Box
                py={1}
                flex={1}
                display="flex"
                alignItems="center"
              >
                <Box>
                  <Tooltip
                    arrow
                    placement="top"
                    title="Vlad Jacobson"
                  >
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                      }}
                      component={Link}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      alt="Vlad Jacobson"
                      src="/avatars/4.png"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5,
                  }}
                >
                  <LinearProgressAlternate
                    color="primary"
                    variant="determinate"
                    value={65}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {t('Total')}
                  </Typography>
                  <Typography variant="h5">$2,685</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2,
              }}
            >
              <Box
                py={1}
                flex={1}
                display="flex"
                alignItems="center"
              >
                <Box>
                  <Tooltip
                    arrow
                    placement="top"
                    title="Cerys Mckinney"
                  >
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                      }}
                      component={Link}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      alt="Cerys Mckinney"
                      src="/avatars/5.png"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5,
                  }}
                >
                  <LinearProgressAlternate
                    color="error"
                    variant="determinate"
                    value={85}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {t('Total')}
                  </Typography>
                  <Typography variant="h5">$8,684</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
          </List>
        </Scrollbar>
      </Box>
      <Divider />
      <CardActions>
        <Button startIcon={<AssessmentTwoToneIcon />}>{t('Generate reports')}</Button>
      </CardActions>
    </Card>
  );
}

export default Component;
