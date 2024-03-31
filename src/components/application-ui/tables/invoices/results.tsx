import { DeleteRounded } from '@mui/icons-material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { format, formatDistance } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import type { Invoice, InvoiceStatus } from 'src/models/invoice';

interface ResultsProps {
  invoices: Invoice[];
}

interface Filters {
  status?: InvoiceStatus;
}

const getInvoiceStatusLabel = (invoiceStatus: InvoiceStatus): JSX.Element => {
  const map = {
    pending: {
      text: 'Pending Payment',
      color: 'warning',
    },
    completed: {
      text: 'Completed',
      color: 'success',
    },
    draft: {
      text: 'Draft',
      color: 'info',
    },
    progress: {
      text: 'In progress',
      color: 'primary',
    },
  };

  const { text, color }: any = map[invoiceStatus];

  return (
    <Chip
      variant="outlined"
      label={text}
      color={color}
      sx={{
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
    />
  );
};

const applyFilters = (invoices: Invoice[], query: string, filters: Filters): Invoice[] => {
  return invoices.filter((invoice) => {
    let matches = true;

    if (query) {
      const properties = ['clientName'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (invoice[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.status && invoice.status !== filters.status) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && invoice[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (invoices: Invoice[], page: number, limit: number): Invoice[] => {
  return invoices.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ invoices }) => {
  const [selectedItems, setSelectedInvoices] = useState<string[]>([]);
  const { t } = useTranslation();

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'Show all',
    },
    {
      id: 'pending',
      name: t('Pending Payment'),
    },
    {
      id: 'completed',
      name: t('Completed'),
    },
    {
      id: 'draft',
      name: t('Draft'),
    },
    {
      id: 'progress',
      name: t('In Progress'),
    },
  ];

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllInvoices = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedInvoices(event.target.checked ? invoices.map((invoice) => invoice.id) : []);
  };

  const handleSelectOneInvoice = (
    _event: ChangeEvent<HTMLInputElement>,
    invoiceId: string
  ): void => {
    if (!selectedItems.includes(invoiceId)) {
      setSelectedInvoices((prevSelected) => [...prevSelected, invoiceId]);
    } else {
      setSelectedInvoices((prevSelected) => prevSelected.filter((id) => id !== invoiceId));
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredInvoices = applyFilters(invoices, query, filters);
  const paginatedInvoices = applyPagination(filteredInvoices, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeInvoices = selectedItems.length > 0 && selectedItems.length < invoices.length;
  const selectedAllInvoices = selectedItems.length === invoices.length;

  return (
    <>
      <Card>
        <Box
          py={2}
          pl={1}
          pr={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Checkbox
              checked={selectedAllInvoices}
              indeterminate={selectedSomeInvoices}
              onChange={handleSelectAllInvoices}
              disabled={paginatedInvoices.length === 0}
            />
            {selectedBulkActions ? (
              <ButtonSoft
                color="error"
                variant="contained"
                size="small"
                startIcon={<DeleteRounded />}
              >
                Delete selected
              </ButtonSoft>
            ) : (
              <>
                <Box>
                  <Typography
                    sx={{
                      display: { xs: 'none', md: 'inline-flex' },
                    }}
                    component="span"
                    variant="subtitle1"
                  >
                    {t('Showing')}:
                  </Typography>{' '}
                  <b>{paginatedInvoices.length}</b> <b>{t('invoices')}</b>
                </Box>
              </>
            )}
          </Stack>
          <Stack
            direction="row"
            spacing={1}
          >
            <FormControl
              size="small"
              variant="outlined"
            >
              <Select
                value={filters.status || 'all'}
                onChange={handleStatusChange}
                label=""
              >
                {statusOptions.map((statusOption) => (
                  <MenuItem
                    key={statusOption.id}
                    value={statusOption.id}
                  >
                    {statusOption.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                endAdornment: query && (
                  <InputAdornment
                    sx={{
                      mr: -0.7,
                    }}
                    position="end"
                  >
                    <IconButton
                      color="error"
                      aria-label="clear input"
                      onClick={() => setQuery('')}
                      edge="end"
                      size="small"
                      sx={{
                        color: 'error.main',
                      }}
                    >
                      <ClearRoundedIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              margin="none"
              onChange={handleQueryChange}
              placeholder={t('Filter by client name')}
              value={query}
              variant="outlined"
            />
          </Stack>
        </Box>
        <Divider />

        {paginatedInvoices.length === 0 ? (
          <Typography
            sx={{
              py: { xs: 2, sm: 3, md: 6, lg: 10 },
            }}
            variant="h3"
            color="text.secondary"
            fontWeight={500}
            align="center"
          >
            {t("We couldn't find any invoices matching your search criteria")}
          </Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t('#')}</TableCell>
                    <TableCell>{t('Date')}</TableCell>
                    <TableCell>{t('Client')}</TableCell>
                    <TableCell>{t('Amount')}</TableCell>
                    <TableCell>{t('Status')}</TableCell>
                    <TableCell align="center">{t('Actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedInvoices.map((invoice) => {
                    const isInvoiceSelected = selectedItems.includes(invoice.id);
                    return (
                      <TableRow
                        hover
                        key={invoice.id}
                        selected={isInvoiceSelected}
                      >
                        <TableCell>
                          <Box
                            display="flex"
                            alignItems="center"
                          >
                            <Checkbox
                              checked={isInvoiceSelected}
                              onChange={(event) => handleSelectOneInvoice(event, invoice.id)}
                              value={isInvoiceSelected}
                            />
                            <Box pl={1}>
                              <Typography
                                noWrap
                                variant="subtitle2"
                              >
                                {invoice.number}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            noWrap
                            variant="body2"
                          >
                            {format(invoice.issuedDate, 'MMMM dd yyyy')}
                          </Typography>
                          <Typography
                            noWrap
                            variant="subtitle1"
                          >
                            {t('Due')}{' '}
                            <Typography
                              component="span"
                              fontWeight={600}
                            >
                              {formatDistance(invoice.dueDate, invoice.issuedDate, {
                                addSuffix: true,
                              })}
                            </Typography>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            display="flex"
                            alignItems="center"
                          >
                            <Avatar
                              sx={{
                                mr: 1,
                                width: 38,
                                height: 38,
                              }}
                              src={invoice.clientAvatar}
                            />
                            <Typography
                              variant="h6"
                              fontWeight={500}
                            >
                              {invoice.clientName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                          >
                            {numeral(invoice.amount).format(`${invoice.currency}0,0.00`)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography noWrap>{getInvoiceStatusLabel(invoice.status)}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip
                              title={t('View')}
                              arrow
                            >
                              <IconButton color="primary">
                                <LaunchTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip
                              title={t('Delete')}
                              arrow
                            >
                              <IconButton
                                color="error"
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              p={2}
              sx={{
                '.MuiTablePagination-select': {
                  py: 0.55,
                },
              }}
            >
              <TablePagination
                component="div"
                count={filteredInvoices.length}
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
            </Box>
          </>
        )}
      </Card>
    </>
  );
};

Results.propTypes = {
  invoices: PropTypes.array.isRequired,
};

Results.defaultProps = {
  invoices: [],
};

export default Results;
