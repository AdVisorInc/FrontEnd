import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from 'src/components/base/logo';
import type { Invoice } from 'src/models/invoice';

interface InvoiceBodyProps {
  invoice: Invoice;
}

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
  currency: string;
}

const InvoiceBody: FC<InvoiceBodyProps> = ({ invoice }) => {
  const { t } = useTranslation();
  const user = {
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };

  const itemsList: Item[] = [
    {
      id: 1,
      name: 'Design services for March',
      quantity: 1,
      price: 8945,
      currency: '$',
    },
    {
      id: 2,
      name: 'Website migration services',
      quantity: 3,
      price: 2367,
      currency: '$',
    },
  ];

  const [items] = useState<Item[]>(itemsList);

  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          my: { xs: 2, sm: 3 },
          p: { xs: 2, sm: 3 },
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box pb={{ xs: 2, sm: 0 }}>
            <Typography variant="h2">{t('Invoice')}</Typography>
            <Typography
              variant="h5"
              color="text.secondary"
            >
              # {invoice.number}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
          >
            <Logo />
            <Typography
              sx={{
                pt: 1,
                pb: 2,
              }}
              variant="h5"
            >
              {user.name}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
            >
              83 Laurel Lane
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
              gutterBottom
            >
              Fort Walton Beach, FL 32547
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
            >
              New York, USA
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            my: { xs: 2, sm: 3 },
          }}
        />
        <Stack
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Box>
            <Typography variant="subtitle2">{t('Invoice for')}:</Typography>
            <Typography
              sx={{
                pb: 1,
              }}
              variant="h5"
              fontWeight={500}
            >
              {invoice.clientName}
            </Typography>
            <Typography variant="h5">519 Bay Meadows Ave.</Typography>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={500}
            >
              Scotch Plains, NJ 07076
            </Typography>
            <Typography
              variant="h5"
              fontWeight={500}
            >
              New York, USA
            </Typography>
          </Box>
          <Box>
            <Stack
              spacing={{ xs: 2, md: 3 }}
              pt={{ xs: 2, md: 0 }}
              direction={{ xs: 'column', md: 'row' }}
            >
              <Box>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                >
                  {t('Issued on')}:
                </Typography>
                <Typography variant="h5">{format(invoice.issuedDate, 'dd MMMM yyyy')}</Typography>
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                >
                  {t('Due on')}:
                </Typography>
                <Typography variant="h5">{format(invoice.dueDate, 'dd MMMM yyyy')}</Typography>
              </Box>
            </Stack>
            <Box
              pt={{ xs: 2, md: 4 }}
              textAlign={{ xs: 'left', md: 'right' }}
            >
              <Typography
                component="span"
                variant="h4"
                fontWeight={500}
                color="text.secondary"
              >
                {t('Balance due')}:{' '}
              </Typography>
              <Typography
                component="span"
                variant="h4"
              >
                {numeral(invoice.amount).format(`${invoice.currency}0,0.00`)}
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Card sx={{ my: { xs: 2, sm: 3 } }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('Item')}</TableCell>
                  <TableCell>{t('Qty')}</TableCell>
                  <TableCell>{t('Price')}</TableCell>
                  <TableCell align="right">{t('Total')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item: Item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Typography noWrap>{item.name}</Typography>
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{numeral(item.price).format(`${item.currency}0,0.00`)}</TableCell>
                    <TableCell align="right">
                      {numeral(item.price).format(`${item.currency}0,0.00`)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={0} />
                  <TableCell
                    colSpan={3}
                    align="right"
                  >
                    <Typography
                      gutterBottom
                      variant="caption"
                      color="text.secondary"
                      fontWeight={600}
                    >
                      {t('Total')}:
                    </Typography>
                    <Typography
                      variant="h3"
                      fontWeight={600}
                    >
                      {numeral(9458).format(`$0,0.00`)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Card>
        <Typography
          variant="h5"
          gutterBottom
        >
          {t('Additional informations')}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          fontWeight={400}
        >
          These projects were completed between January and February of 2021.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="center"
          mt={{ xs: 2, sm: 3 }}
          spacing={1}
        >
          <Button
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
            variant="contained"
            startIcon={<DownloadTwoToneIcon />}
          >
            {t('Download PDF')}
          </Button>
          <Button
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
            variant="outlined"
            startIcon={<PictureAsPdfTwoToneIcon />}
          >
            {t('Preview PDF')}
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

InvoiceBody.propTypes = {
  // @ts-ignore
  invoice: PropTypes.object.isRequired,
};

export default InvoiceBody;
