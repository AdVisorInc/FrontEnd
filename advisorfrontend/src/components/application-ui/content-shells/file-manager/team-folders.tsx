import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import ViewWeekTwoToneIcon from '@mui/icons-material/ViewWeekTwoTone';
import {
  alpha,
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subDays, subMonths } from 'date-fns';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function TeamFolders() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [tabs, setTab] = useState<string | null>('grid_view');

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setTab(newValue);
  };

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
        <Typography variant="h3">{t('Team Folders')}</Typography>
        <ToggleButtonGroup
          value={tabs}
          exclusive
          color="primary"
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
              <Card
                sx={{
                  p: 2,
                }}
              >
                <Box
                  mb={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <AvatarState
                      isSoft
                      state="primary"
                      sx={{
                        height: 40,
                        width: 40,
                        mr: 1,
                      }}
                    >
                      <FolderOpenTwoToneIcon />
                    </AvatarState>
                    <AvatarGroup max={3}>
                      <Tooltip
                        arrow
                        title="Remy Sharp"
                      >
                        <Avatar
                          component={Link}
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          alt="Remy Sharp"
                          src="/avatars/1.png"
                        />
                      </Tooltip>
                      <Tooltip
                        arrow
                        title="Travis Howard"
                      >
                        <Avatar
                          component={Link}
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          alt="Travis Howard"
                          src="/avatars/2.png"
                        />
                      </Tooltip>
                      <Tooltip
                        arrow
                        title="Cindy Baker"
                      >
                        <Avatar
                          component={Link}
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          alt="Cindy Baker"
                          src="/avatars/3.png"
                        />
                      </Tooltip>
                      <Tooltip
                        arrow
                        title="Agnes Walker"
                      >
                        <Avatar
                          component={Link}
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          alt="Agnes Walker"
                          src="/avatars/4.png"
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </Box>
                  <IconButton
                    size="small"
                    color="primary"
                  >
                    <MoreVertTwoToneIcon />
                  </IconButton>
                </Box>

                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
                  variant="h3"
                  underline="hover"
                  color="text.primary"
                  fontWeight={500}
                >
                  Documents for Clients
                </Link>

                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1">
                    <b>15</b> {t('files')}
                  </Typography>
                  <Box textAlign="right">
                    <Typography
                      lineHeight={1}
                      variant="subtitle1"
                    >
                      {t('Created')}
                    </Typography>
                    <Typography
                      fontWeight={600}
                      color="text.primary"
                      variant="subtitle1"
                    >
                      {formatDistance(subDays(new Date(), 21), new Date(), {
                        addSuffix: true,
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Card
                sx={{
                  p: 2,
                }}
              >
                <Box
                  mb={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <AvatarState
                      isSoft
                      state="primary"
                      sx={{
                        height: 40,
                        width: 40,
                        mr: 1,
                      }}
                    >
                      <FolderOpenTwoToneIcon />
                    </AvatarState>
                    <AvatarGroup max={3}>
                      <Tooltip
                        arrow
                        title="Travis Howard"
                      >
                        <Avatar
                          component={Link}
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          alt="Travis Howard"
                          src="/avatars/2.png"
                        />
                      </Tooltip>
                      <Tooltip
                        arrow
                        title="Trevor Henderson"
                      >
                        <Avatar
                          component={Link}
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          alt="Trevor Henderson"
                          src="/avatars/5.png"
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </Box>
                  <IconButton
                    size="small"
                    color="primary"
                  >
                    <MoreVertTwoToneIcon />
                  </IconButton>
                </Box>

                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
                  variant="h3"
                  underline="hover"
                  color="text.primary"
                  fontWeight={500}
                >
                  2010 Invoices Archive
                </Link>

                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1">
                    <b>6</b> {t('files')}
                  </Typography>
                  <Box textAlign="right">
                    <Typography
                      lineHeight={1}
                      variant="subtitle1"
                    >
                      {t('Created')}
                    </Typography>
                    <Typography
                      fontWeight={600}
                      color="text.primary"
                      variant="subtitle1"
                    >
                      {formatDistance(subMonths(new Date(), 37), new Date(), {
                        addSuffix: true,
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </>
        )}

        {tabs === 'table_view' && (
          <Grid xs={12}>
            <Card>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('Name')}</TableCell>
                      <TableCell>{t('Files')}</TableCell>
                      <TableCell>{t('Members')}</TableCell>
                      <TableCell>{t('Created')}</TableCell>
                      <TableCell align="right">{t('Actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <FolderOpenTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1,
                            }}
                            variant="h6"
                            noWrap
                          >
                            Documents for Clients
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Typography
                            fontWeight={600}
                            variant="h6"
                          >
                            15
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex">
                          <AvatarGroup max={3}>
                            <Tooltip
                              arrow
                              title="Remy Sharp"
                            >
                              <Avatar
                                component={Link}
                                sx={{
                                  width: 40,
                                  height: 40,
                                }}
                                href=""
                                onClick={(e) => e.preventDefault()}
                                alt="Remy Sharp"
                                src="/avatars/1.png"
                              />
                            </Tooltip>
                            <Tooltip
                              arrow
                              title="Travis Howard"
                            >
                              <Avatar
                                component={Link}
                                sx={{
                                  width: 40,
                                  height: 40,
                                }}
                                href=""
                                onClick={(e) => e.preventDefault()}
                                alt="Travis Howard"
                                src="/avatars/2.png"
                              />
                            </Tooltip>
                            <Tooltip
                              arrow
                              title="Cindy Baker"
                            >
                              <Avatar
                                component={Link}
                                sx={{
                                  width: 40,
                                  height: 40,
                                }}
                                href=""
                                onClick={(e) => e.preventDefault()}
                                alt="Cindy Baker"
                                src="/avatars/3.png"
                              />
                            </Tooltip>
                            <Tooltip
                              arrow
                              title="Agnes Walker"
                            >
                              <Avatar
                                component={Link}
                                sx={{
                                  width: 40,
                                  height: 40,
                                }}
                                href=""
                                onClick={(e) => e.preventDefault()}
                                alt="Agnes Walker"
                                src="/avatars/4.png"
                              />
                            </Tooltip>
                          </AvatarGroup>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {formatDistance(subDays(new Date(), 21), new Date(), {
                          addSuffix: true,
                        })}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip
                          title={t('View')}
                          arrow
                        >
                          <IconButton
                            sx={{
                              '&:hover': { background: alpha(theme.palette.primary.main, 0.08) },
                              color: theme.palette.primary.main,
                            }}
                            color="inherit"
                            size="small"
                          >
                            <LaunchTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip
                          title={t('Delete')}
                          arrow
                        >
                          <IconButton
                            sx={{
                              '&:hover': { background: alpha(theme.palette.error.main, 0.08) },
                              color: theme.palette.error.main,
                            }}
                            color="inherit"
                            size="small"
                          >
                            <DeleteTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <FolderOpenTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1,
                            }}
                            variant="h6"
                            noWrap
                          >
                            2010 Invoices Archive
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Typography
                            fontWeight={600}
                            variant="h6"
                          >
                            6
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex">
                          <AvatarGroup max={3}>
                            <Tooltip
                              arrow
                              title="Travis Howard"
                            >
                              <Avatar
                                component={Link}
                                sx={{
                                  width: 40,
                                  height: 40,
                                }}
                                href=""
                                onClick={(e) => e.preventDefault()}
                                alt="Travis Howard"
                                src="/avatars/2.png"
                              />
                            </Tooltip>
                            <Tooltip
                              arrow
                              title="Trevor Henderson"
                            >
                              <Avatar
                                component={Link}
                                sx={{
                                  width: 40,
                                  height: 40,
                                }}
                                href=""
                                onClick={(e) => e.preventDefault()}
                                alt="Trevor Henderson"
                                src="/avatars/5.png"
                              />
                            </Tooltip>
                          </AvatarGroup>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {formatDistance(subMonths(new Date(), 37), new Date(), {
                          addSuffix: true,
                        })}{' '}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip
                          title={t('View')}
                          arrow
                        >
                          <IconButton
                            sx={{
                              '&:hover': { background: alpha(theme.palette.primary.main, 0.08) },
                              color: theme.palette.primary.main,
                            }}
                            color="inherit"
                            size="small"
                          >
                            <LaunchTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip
                          title={t('Delete')}
                          arrow
                        >
                          <IconButton
                            sx={{
                              '&:hover': { background: alpha(theme.palette.error.main, 0.08) },
                              color: theme.palette.error.main,
                            }}
                            color="inherit"
                            size="small"
                          >
                            <DeleteTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
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
    </>
  );
}

export default TeamFolders;
