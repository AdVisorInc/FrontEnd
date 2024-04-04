import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subDays } from 'date-fns';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TableRowData {
  id: string;
  filename: string;
  owner: string;
  avatarUrl?: string;
  dateCreated: Date;
  icon?: JSX.Element;
}

interface SortConfig {
  key: keyof TableRowData;
  direction: 'ascending' | 'descending';
}

const Component = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'dateCreated',
    direction: 'ascending',
  });

  const sortData = (data: TableRowData[], config: SortConfig): TableRowData[] => {
    return [...data].sort((a, b) => {
      if (a[config.key] < b[config.key]) {
        return config.direction === 'ascending' ? -1 : 1;
      }
      if (a[config.key] > b[config.key]) {
        return config.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const requestSort = (key: keyof TableRowData) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    //@ts-ignore
    setSortConfig({ key, direction });
  };

  const renderSortIcon = (columnName: keyof TableRowData) => {
    if (sortConfig.key !== columnName) return null;
    return sortConfig.direction === 'ascending' ? (
      <ExpandMoreRoundedIcon
        sx={{
          color: 'text.secondary',
        }}
        fontSize="small"
      />
    ) : (
      <ExpandLessRoundedIcon
        sx={{
          color: 'text.secondary',
        }}
        fontSize="small"
      />
    );
  };

  const tableData: TableRowData[] = [
    {
      id: '1',
      icon: <PictureAsPdfTwoToneIcon />,
      filename: 'PresentationDeck.pdf',
      owner: 'You',
      dateCreated: subDays(new Date(), 54),
    },
    {
      id: '2',
      filename: '2021Screenshot.jpg',
      owner: 'Kitty Herbert',
      avatarUrl: '/avatars/3.png',
      dateCreated: subDays(new Date(), 15),
    },
    {
      id: '3',
      icon: <TextSnippetTwoToneIcon />,
      filename: 'FileTransfer.txt',
      owner: 'Ash Carleton',
      avatarUrl: '/avatars/4.png',
      dateCreated: subDays(new Date(), 32),
    },
    {
      id: '4',
      icon: <ArchiveTwoToneIcon />,
      filename: 'HolidayPictures.zip',
      owner: 'You',
      dateCreated: subDays(new Date(), 19),
    },
    {
      id: '5',
      icon: <TextSnippetTwoToneIcon />,
      filename: 'AnnualReport.docx',
      owner: 'Morgan Freeman',
      avatarUrl: '/avatars/5.png',
      dateCreated: subDays(new Date(), 10),
    },
    {
      id: '6',
      icon: <TextSnippetTwoToneIcon />,
      filename: 'Budget_Planning.xlsx',
      owner: 'Jennifer Dunn',
      avatarUrl: '/avatars/1.png',
      dateCreated: subDays(new Date(), 25),
    },
  ];

  const sortedData = sortData(tableData, sortConfig);

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => requestSort('filename')}>
                <Box
                  sx={{
                    cursor: 'pointer',
                  }}
                  display="flex"
                  alignItems="center"
                >
                  {t('Filename')} {renderSortIcon('filename')}
                </Box>
              </TableCell>
              <TableCell onClick={() => requestSort('owner')}>
                <Box
                  sx={{
                    cursor: 'pointer',
                  }}
                  display="flex"
                  alignItems="center"
                >
                  {t('Owner')} {renderSortIcon('owner')}
                </Box>
              </TableCell>
              <TableCell onClick={() => requestSort('dateCreated')}>
                <Box
                  sx={{
                    cursor: 'pointer',
                  }}
                  display="flex"
                  alignItems="center"
                >
                  {t('Date Created')} {renderSortIcon('dateCreated')}
                </Box>
              </TableCell>
              <TableCell align="right">{t('Actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow
                key={row.id}
                hover
              >
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    {row.icon}
                    <Typography
                      sx={{ pl: 1 }}
                      variant="h6"
                    >
                      {row.filename}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    {row.avatarUrl ? (
                      <Avatar
                        src={row.avatarUrl}
                        sx={{ mr: 1, height: 28, width: 28 }}
                      />
                    ) : null}
                    <Link
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                      variant="h6"
                      noWrap
                      fontWeight={500}
                    >
                      {row.owner}
                    </Link>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    noWrap
                  >
                    {formatDistance(row.dateCreated, new Date(), { addSuffix: true })}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: 'nowrap',
                  }}
                  align="right"
                >
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Component;
