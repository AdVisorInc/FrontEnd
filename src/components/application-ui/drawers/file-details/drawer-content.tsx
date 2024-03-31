import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Avatar,
  Box,
  Button,
  DialogContent,
  Divider,
  Unstable_Grid2 as Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { format, formatDistance, subDays, subHours } from 'date-fns';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AvatarGroupsTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { TabsShadow } from 'src/components/base/styles/tabs';
import { MenuListWrapperRoundedPrimary } from 'src/components/base/styles/vertical-menus';

const Component = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [expanded, setExpanded] = useState<string | false>('section1');

  const handleChange = (section: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? section : false);
  };

  const [currentTab, setCurrentTab] = useState<string>('details');

  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'activity', label: t('Activity') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const handleSelectChange = (event) => {
    setCurrentTab(event.target.value);
  };

  return (
    <DialogContent sx={{ px: 0 }}>
      <Stack
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        flexDirection="column"
      >
        <AvatarState
          isSoft
          state="primary"
          sx={{
            width: 74,
            height: 74,
            mb: 2,
          }}
          variant="rounded"
        >
          <TextSnippetTwoToneIcon fontSize="large" />
        </AvatarState>
        <Box textAlign="center">
          <Typography
            variant="h3"
            noWrap
          >
            FileTransfer.txt
          </Typography>
          <Typography
            component="span"
            variant="subtitle1"
            color="text.secondary"
          >
            {t('Edited')}{' '}
            {formatDistance(subDays(new Date(), 1), new Date(), {
              addSuffix: true,
            })}{' '}
            {t('by')}{' '}
          </Typography>{' '}
          <Link
            href=""
            underline="hover"
            onClick={(e) => e.preventDefault()}
          >
            Kate
          </Link>
        </Box>
        <Box width="100%">
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
          >
            <Divider />
            <Box p={2}>
              {smUp ? (
                <TabsShadow
                  onChange={handleTabsChange}
                  value={currentTab}
                  centered
                >
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                    />
                  ))}
                </TabsShadow>
              ) : (
                <Select
                  value={currentTab}
                  onChange={handleSelectChange}
                  fullWidth
                >
                  {tabs.map((tab) => (
                    <MenuItem
                      key={tab.value}
                      value={tab.value}
                    >
                      {tab.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </Box>
            <Divider />
          </Box>
          {currentTab === 'details' && (
            <Box p={{ xs: 2, sm: 3 }}>
              <Stack
                spacing={{ xs: 2, sm: 3 }}
                divider={<Divider />}
              >
                <Box>
                  <Typography
                    gutterBottom
                    variant="h4"
                  >
                    {t('Members')}
                  </Typography>
                  <Box display="flex">
                    <AvatarGroupsTooltips />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                  >
                    {t('Details')}
                  </Typography>
                  <Grid
                    container
                    spacing={1.5}
                  >
                    <Grid
                      xs={12}
                      sm={4}
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {t('Type')}:
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={8}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                      >
                        PDF File
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={4}
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {t('Size')}:
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={8}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                      >
                        186MB
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={4}
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {t('Owner')}:
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={8}
                    >
                      <Link
                        href=""
                        onClick={(e) => e.preventDefault()}
                        variant="subtitle1"
                        fontWeight={500}
                      >
                        Kate Johnson
                      </Link>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={4}
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {t('Created')}:
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={8}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                      >
                        {format(subHours(new Date(), 64), 'MMMM dd yyyy')}
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={4}
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {t('Modified')}:
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={8}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                      >
                        {formatDistance(subDays(new Date(), 2), new Date(), {
                          addSuffix: true,
                        })}
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={4}
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {t('Opened')}:
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={8}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                      >
                        {formatDistance(subHours(new Date(), 4), new Date(), {
                          addSuffix: true,
                        })}
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={4}
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {t('Description')}:
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={8}
                    >
                      <Typography variant="subtitle1">
                        This file stores all transfers that have been triggered in the past 24
                        months.
                      </Typography>
                      <Button
                        sx={{
                          mt: 1,
                        }}
                        variant="outlined"
                        startIcon={<EditTwoToneIcon />}
                        size="small"
                      >
                        {t('Edit')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                <Box>
                  <Typography
                    gutterBottom
                    variant="h4"
                  >
                    {t('Actions')}
                  </Typography>
                  <Box
                    display="flex"
                    gap={1}
                    mb={2}
                  >
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Open')}
                    >
                      <ButtonIcon
                        variant="outlined"
                        size="large"
                        color="secondary"
                        sx={{
                          color: 'primary.main',
                        }}
                      >
                        <OpenInNewTwoToneIcon />
                      </ButtonIcon>
                    </Tooltip>
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Share')}
                    >
                      <ButtonIcon
                        variant="outlined"
                        size="large"
                        color="secondary"
                        sx={{
                          color: 'primary.main',
                        }}
                      >
                        <ShareTwoToneIcon />
                      </ButtonIcon>
                    </Tooltip>
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Delete')}
                    >
                      <ButtonIcon
                        variant="outlined"
                        size="large"
                        color="secondary"
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        <DeleteTwoToneIcon />
                      </ButtonIcon>
                    </Tooltip>
                  </Box>
                  <Accordion
                    sx={{
                      '&::before': {
                        display: 'none',
                      },

                      '& .MuiAccordionSummary-root': {
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? alpha(theme.palette.neutral[50], 0.03)
                            : 'neutral.50',
                        borderRadius: theme.shape.borderRadius + 'px',
                        '&:hover': {
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? alpha(theme.palette.neutral[100], 0.06)
                              : 'neutral.100',
                        },
                      },
                    }}
                    elevation={0}
                    expanded={expanded === 'section1'}
                    onChange={handleChange('section1')}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h5">{t('More actions')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ mt: 0.5, p: 0 }}>
                      <MenuListWrapperRoundedPrimary disablePadding>
                        <MenuItem>
                          <ListItemIcon sx={{ mr: 1 }}>
                            <DownloadTwoToneIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={t('Download')}
                            primaryTypographyProps={{ variant: 'h5' }}
                          />
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon sx={{ mr: 1 }}>
                            <ReportTwoToneIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={t('Report abuse')}
                            primaryTypographyProps={{ variant: 'h5' }}
                          />
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon sx={{ mr: 1 }}>
                            <ContentCopyTwoToneIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={t('Make a copy')}
                            primaryTypographyProps={{ variant: 'h5' }}
                          />
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon sx={{ mr: 1 }}>
                            <DriveFileRenameOutlineTwoToneIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={t('Rename')}
                            primaryTypographyProps={{ variant: 'h5' }}
                          />
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon sx={{ mr: 1 }}>
                            <GradeTwoToneIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={t('Add to starred')}
                            primaryTypographyProps={{ variant: 'h5' }}
                          />
                        </MenuItem>
                      </MenuListWrapperRoundedPrimary>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Stack>
            </Box>
          )}
          {currentTab === 'activity' && (
            <List disablePadding>
              <Typography
                component="li"
                sx={{ px: 1.5, py: 2 }}
                variant="h4"
              >
                {t('Last Week')}
              </Typography>
              <Divider />
              <ListSubheader
                disableSticky
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[25], 0.02)
                      : 'neutral.25',
                }}
              >
                {formatDistance(subDays(new Date(), 15), new Date(), {
                  addSuffix: true,
                })}
              </ListSubheader>
              <Divider />
              <ListItem
                alignItems="flex-start"
                sx={{
                  py: 2,
                }}
              >
                <ListItemAvatar>
                  <Avatar src="/avatars/1.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={t('You uploaded two new files')}
                  primaryTypographyProps={{
                    variant: 'subtitle2',
                    color: 'text.primary',
                    noWrap: true,
                    fontWeight: 600,
                    gutterBottom: true,
                  }}
                  secondary={
                    <>
                      <Box
                        display="flex"
                        alignItems="center"
                        py={0.5}
                      >
                        <PictureAsPdfTwoToneIcon />
                        <Typography
                          sx={{
                            pl: 1,
                          }}
                          variant="body1"
                          color="text.secondary"
                        >
                          PresentationDeck.pdf
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        py={0.5}
                      >
                        <ArchiveTwoToneIcon />
                        <Typography
                          sx={{
                            pl: 1,
                          }}
                          variant="body1"
                          color="text.secondary"
                        >
                          HolidayPictures.zip
                        </Typography>
                      </Box>
                      <Divider
                        sx={{
                          my: 2,
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        gutterBottom
                        noWrap
                      >
                        {t('You created a new folder')}
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        py={0.5}
                      >
                        <FolderOpenTwoToneIcon />
                        <Typography
                          sx={{
                            pl: 1,
                          }}
                          variant="body1"
                          color="text.secondary"
                        >
                          Clients Presentations
                        </Typography>
                      </Box>
                    </>
                  }
                  secondaryTypographyProps={{
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: true,
                  }}
                />
              </ListItem>
              <Divider />
              <Typography
                component="li"
                sx={{ px: 1.5, py: 2 }}
                variant="h4"
              >
                {t('Last Month')}
              </Typography>
              <Divider />
              <ListSubheader
                disableSticky
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[25], 0.02)
                      : 'neutral.25',
                }}
              >
                {formatDistance(subDays(new Date(), 22), new Date(), {
                  addSuffix: true,
                })}
              </ListSubheader>
              <Divider />
              <ListItem
                alignItems="flex-start"
                sx={{
                  py: 2,
                }}
              >
                <ListItemAvatar>
                  <Avatar src="/avatars/2.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={t('Kate uploaded one file')}
                  primaryTypographyProps={{
                    variant: 'subtitle2',
                    color: 'text.primary',
                    noWrap: true,
                    fontWeight: 600,
                    gutterBottom: true,
                  }}
                  secondary={
                    <Box
                      display="flex"
                      alignItems="center"
                      py={0.5}
                    >
                      <ArchiveTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1,
                        }}
                        variant="body1"
                        color="text.secondary"
                      >
                        InvoicesArchive.zip
                      </Typography>
                    </Box>
                  }
                  secondaryTypographyProps={{
                    variant: 'body1',
                    color: 'text.primary',
                    noWrap: true,
                  }}
                />
              </ListItem>
              <Divider />
            </List>
          )}
        </Box>
      </Stack>
    </DialogContent>
  );
};

export default Component;
