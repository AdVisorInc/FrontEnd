import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  TablePagination,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Job } from 'src/models/job';

interface ResultsProps {
  jobs: Job[];
}

const applyPagination = (jobs: Job[], page: number, limit: number): Job[] => {
  return jobs.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ jobs }) => {
  const theme = useTheme();
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const { t } = useTranslation();

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const paginatedJobs = applyPagination(jobs, page, limit);

  const actionRef = useRef<any>(null);
  const [openSort, setOpenMenuSort] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('Sort by...');

  const sorts = [
    {
      value: '1',
      text: t('Most recent'),
    },
    {
      value: '2',
      text: t('Company name'),
    },
    {
      value: '3',
      text: t('Location'),
    },
    {
      value: '4',
      text: t('Salary range'),
    },
  ];

  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
        height: ${theme.spacing(12)};
        width: ${theme.spacing(12)};
`
  );

  const ChipWrapper = styled(Chip)(
    ({ theme }) => `
        margin: ${theme.spacing(0.5)};
        padding: ${theme.spacing(1)};
        height: 28px;
        line-height: 28px;
        font-weight: 600;
        font-size: 13px;
`
  );

  const IconButtonSuccess = styled(IconButton)(
    ({ theme }) => `
        background: ${alpha(theme.palette.success.main, 0.08)};
        color: ${theme.palette.success.main};
        width: ${theme.spacing(10)};
        height: ${theme.spacing(10)};
        margin: ${theme.spacing(1.5)};

        &:hover {
        background: ${alpha(theme.palette.success.main, 0.14)};
        }
`
  );

  const IconButtonError = styled(IconButton)(
    ({ theme }) => `
        background: ${alpha(theme.palette.error.main, 0.08)};
        color: ${theme.palette.error.main};
        width: ${theme.spacing(10)};
        height: ${theme.spacing(10)};
        margin: ${theme.spacing(1.5)};

        &:hover {
        background: ${alpha(theme.palette.error.main, 0.14)};
        }
`
  );

  return (
    <>
      {jobs.length === 0 ? (
        <Stack
          spacing={0.5}
          justifyContent="center"
          direction="column"
          alignItems="center"
          py={{ xs: 2, sm: 3 }}
        >
          <SearchOffRoundedIcon
            sx={{ color: 'neutral.500' }}
            fontSize="large"
          />
          <Box textAlign="center">
            <Typography
              variant="h4"
              color="text.primary"
            >
              No jobs found
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={400}
              variant="subtitle1"
            >
              Try changing the tags and locations filters
            </Typography>
          </Box>
        </Stack>
      ) : (
        <>
          <Box
            mb={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                component="span"
                variant="subtitle1"
              >
                {t('Showing')}
              </Typography>{' '}
              <b>{limit}</b> {t('job positions')}
            </Box>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef}
              onClick={() => setOpenMenuSort(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {sort}
            </Button>
            <Menu
              disableScrollLock
              anchorEl={actionRef.current}
              onClose={() => setOpenMenuSort(false)}
              open={openSort}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {sorts.map((_sort) => (
                <MenuItem
                  key={_sort.value}
                  onClick={() => {
                    setSort(_sort.text);
                    setOpenMenuSort(false);
                  }}
                >
                  {_sort.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
          >
            <Grid
              xs={12}
              md={6}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  flexDirection: 'column',
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: `${theme.typography.pxToRem(23)}`,
                  }}
                >
                  {t('Are these jobs right for you?')}
                </Typography>
                <Box py={2}>
                  <IconButtonSuccess>
                    <ThumbUpTwoToneIcon fontSize="large" />
                  </IconButtonSuccess>
                  <IconButtonError>
                    <ThumbDownTwoToneIcon fontSize="large" />
                  </IconButtonError>
                </Box>
                <Typography
                  variant="h4"
                  fontWeight={400}
                  color="text.secondary"
                  sx={{
                    px: 2,
                    lineHeight: 1.5,
                  }}
                >
                  {t("We'll use your feedback to improve future recommendations")}
                </Typography>
              </Card>
            </Grid>
            {paginatedJobs.map((job) => {
              return (
                <Grid
                  key={job.id}
                  xs={12}
                  md={6}
                >
                  <Card>
                    <Box
                      p={{ xs: 2, sm: 3 }}
                      display="flex"
                      alignItems="flex-start"
                      justifyContent="space-between"
                    >
                      <AvatarWrapper
                        src={job.company_logo}
                        variant="rounded"
                      />
                      <IconButton color="primary">
                        <MoreVertTwoToneIcon />
                      </IconButton>
                    </Box>
                    <Box px={3}>
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 1,
                        }}
                      >
                        {job.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                      >
                        {job.company_name}
                      </Typography>
                      <Typography variant="subtitle1">{job.location}</Typography>
                    </Box>
                    <Box p={2}>
                      {job.tags.map((value) => {
                        return (
                          <ChipWrapper
                            key={value}
                            color="primary"
                            variant="outlined"
                            label={value}
                          />
                        );
                      })}
                    </Box>

                    <Divider />
                    <Box p={2}>
                      <Grid
                        container
                        spacing={2}
                      >
                        <Grid sm={6}>
                          <Button
                            fullWidth
                            variant="contained"
                          >
                            {t('Apply Now')}
                          </Button>
                        </Grid>
                        <Grid sm={6}>
                          <Button
                            fullWidth
                            variant="outlined"
                            color="secondary"
                          >
                            {t('View details')}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
            <Grid xs={12}>
              <Card
                sx={{
                  p: 1,
                  '& .MuiTablePagination-select': {
                    py: 0.55,
                  },
                }}
              >
                <TablePagination
                  component="div"
                  count={jobs.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 15]}
                  slotProps={{
                    select: {
                      variant: 'outlined',
                      size: 'small',
                      sx: {
                        p: 0,
                      },
                    },
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

Results.propTypes = {
  jobs: PropTypes.array.isRequired,
};

Results.defaultProps = {
  jobs: [],
};

export default Results;
