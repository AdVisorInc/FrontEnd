import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import { Box, Card, Unstable_Grid2 as Grid, Pagination, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { CardActionAreaWrapper } from './quick-access';

function AllFolders() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          py: 2,
        }}
      >
        <Typography variant="h3">{t('All Folders')}</Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          sm={6}
        >
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2,
                height: 'auto',
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <AvatarState
                    isSoft
                    state="primary"
                    sx={{
                      mr: 2,
                      width: 54,
                      height: 54,
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarState>
                  <Box>
                    <Typography
                      variant="h4"
                      fontWeight={500}
                      gutterBottom
                      noWrap
                    >
                      Documents for Clients
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>15</b> {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2,
                height: 'auto',
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <AvatarState
                    isSoft
                    state="primary"
                    sx={{
                      mr: 2,
                      width: 54,
                      height: 54,
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarState>
                  <Box>
                    <Typography
                      variant="h4"
                      fontWeight={500}
                      gutterBottom
                      noWrap
                    >
                      Old Various Documents
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>236</b> {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2,
                height: 'auto',
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <AvatarState
                    isSoft
                    state="primary"
                    sx={{
                      mr: 2,
                      width: 54,
                      height: 54,
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarState>
                  <Box>
                    <Typography
                      variant="h4"
                      fontWeight={500}
                      gutterBottom
                      noWrap
                    >
                      Holiday Pictures
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>354</b> {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2,
                height: 'auto',
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <AvatarState
                    isSoft
                    state="primary"
                    sx={{
                      mr: 2,
                      width: 54,
                      height: 54,
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarState>
                  <Box>
                    <Typography
                      variant="h4"
                      fontWeight={500}
                      gutterBottom
                      noWrap
                    >
                      2010 Invoices Archive
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>6</b> {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Box
            p={2}
            mb={2}
            display="flex"
            justifyContent="center"
          >
            <Pagination
              count={3}
              color="primary"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AllFolders;
