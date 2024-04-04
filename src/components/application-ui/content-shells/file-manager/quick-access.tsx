import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import ViewWeekTwoToneIcon from '@mui/icons-material/ViewWeekTwoTone';
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  styled,
  SwipeableDrawer,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subDays } from 'date-fns';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DrawerContent from 'src/components/application-ui/drawers/file-details/drawer-content';
import FilesTable from 'src/components/application-ui/tables/files/files';

export const CardActionAreaWrapper = styled(CardActionArea)(({ theme }) => ({
  height: theme.spacing(20),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,

  '& .MuiCardMedia-root': {
    width: '100%',
    height: '100%',
  },

  '.MuiTouchRipple-root': {
    opacity: 0.15,
  },

  '&:hover': {
    '.MuiCardActionArea-focusHighlight': {
      opacity: 0.02,
    },
  },
}));

function QuickAccess() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [tabs, setTab] = useState<string | null>('grid_view');

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setTab(newValue);
  };

  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 2,
        }}
      >
        <Typography variant="h3">{t('Quick Access')}</Typography>
        <ToggleButtonGroup
          value={tabs}
          color="primary"
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton value="grid_view">
            <ViewWeekTwoToneIcon />
          </ToggleButton>
          <ToggleButton value="table_view">
            <TableRowsTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        {tabs === 'grid_view' && (
          <>
            <Grid
              xs={12}
              sm={6}
            >
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerOpen}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${theme.typography.pxToRem(55)}`,
                    }}
                    color="text.secondary"
                  >
                    <TextSnippetTwoToneIcon fontSize="inherit" />
                  </Typography>
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      pb={0.5}
                    >
                      <TextSnippetTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1,
                        }}
                        fontWeight={600}
                        variant="h6"
                      >
                        FileTransfer.txt
                      </Typography>
                    </Box>
                    <Typography
                      component="span"
                      variant="subtitle1"
                    >
                      {t('Edited')}{' '}
                      {formatDistance(subDays(new Date(), 3), new Date(), {
                        addSuffix: true,
                      })}{' '}
                      {t('by')}{' '}
                    </Typography>
                    <Link
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >
                      Kate
                    </Link>
                  </Box>
                  <IconButton
                    size="small"
                    color="primary"
                  >
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerOpen}>
                  <CardMedia
                    image="/placeholders/covers/1.jpg"
                    title="..."
                  />
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      pb={0.5}
                    >
                      <TextSnippetTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1,
                        }}
                        fontWeight={600}
                        variant="h6"
                      >
                        2021Screenshot.jpg
                      </Typography>
                    </Box>
                    <Typography
                      component="span"
                      variant="subtitle1"
                    >
                      {t('Edited')}{' '}
                      {formatDistance(subDays(new Date(), 4), new Date(), {
                        addSuffix: true,
                      })}{' '}
                      {t('by')}{' '}
                    </Typography>
                    <Link
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >
                      John
                    </Link>
                  </Box>
                  <IconButton
                    size="small"
                    color="primary"
                  >
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerOpen}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${theme.typography.pxToRem(55)}`,
                    }}
                    color="text.secondary"
                  >
                    <PictureAsPdfTwoToneIcon fontSize="inherit" />
                  </Typography>
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      pb={0.5}
                    >
                      <PictureAsPdfTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1,
                        }}
                        fontWeight={600}
                        variant="h6"
                      >
                        PresentationDeck.pdf
                      </Typography>
                    </Box>
                    <Typography
                      component="span"
                      variant="subtitle1"
                    >
                      {t('Never opened')}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    color="primary"
                  >
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerOpen}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${theme.typography.pxToRem(55)}`,
                    }}
                    color="text.secondary"
                  >
                    <ArchiveTwoToneIcon fontSize="inherit" />
                  </Typography>
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      pb={0.5}
                    >
                      <ArchiveTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1,
                        }}
                        fontWeight={600}
                        variant="h6"
                      >
                        HolidayPictures.zip
                      </Typography>
                    </Box>
                    <Typography
                      component="span"
                      variant="subtitle1"
                    >
                      {t('You opened in the past year')}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    color="primary"
                  >
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </>
        )}

        {tabs === 'table_view' && (
          <Grid xs={12}>
            <FilesTable />
          </Grid>
        )}

        {!tabs && (
          <Grid xs={12}>
            <Card
              sx={{
                textAlign: 'center',
                p: { xs: 2, sm: 3 },
              }}
            >
              <Typography
                align="center"
                variant="h4"
                fontWeight={400}
                color="text.secondary"
                sx={{
                  my: 5,
                }}
                gutterBottom
              >
                {t('This is a default view used when none of the options are selected')}
              </Typography>
            </Card>
          </Grid>
        )}
      </Grid>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: { xs: 320, md: 480 },
            overflow: 'visible',
          },
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            left: { xs: theme.spacing(-3.6), sm: theme.spacing(-5) },
            top: { xs: theme.spacing(0.5), sm: theme.spacing(1.5) },
            color: 'common.white',
            '&:hover': {
              background: alpha(theme.palette.common.white, 0.08),
            },
          }}
          size="small"
          onClick={handleDrawerClose}
        >
          <CloseRoundedIcon />
        </IconButton>
        <DrawerContent />
      </SwipeableDrawer>
    </>
  );
}

export default QuickAccess;
