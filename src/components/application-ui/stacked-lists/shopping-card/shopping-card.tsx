import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

const IconButtonWrapper = styled(IconButton)(() => ({
  transform: 'scale(1)',
  transformOrigin: 'center',

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      title: t('Amazon Dot Echo 3'),
      image: '/placeholders/products/1.png',
      price: '79',
    },
    {
      id: 2,
      title: t('Autodesk 3D Printer PRO'),
      image: '/placeholders/products/2.png',
      price: '399',
    },
    {
      id: 3,
      title: t('Apple iPhone 12 PRO'),
      image: '/placeholders/products/3.png',
      price: '749',
    },
    {
      id: 4,
      title: t('GoPro Action Camera 3'),
      image: '/placeholders/products/4.png',
      price: '289',
    },
    {
      id: 5,
      title: t('Apple Watch 42mm Gen. 4'),
      image: '/placeholders/products/5.png',
      price: '199',
    },
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          position: 'relative',
        }}
        disableTypography
        title={
          <>
            <Typography
              variant="h4"
              textAlign="center"
            >
              {t('Shopping Cart')}
            </Typography>
            <IconButton
              sx={{
                position: 'absolute',
                right: theme.spacing(1.5),
                top: theme.spacing(1.5),
              }}
              color="secondary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </>
        }
        subheader={
          <>
            <Typography
              variant="subtitle2"
              textAlign="center"
              color="text.secondary"
            >
              {t('Checkout is almost done')}
            </Typography>
          </>
        }
      />
      <Divider />
      <Box
        sx={{
          height: 313,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    py: 1.5,
                    px: 2,
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    display="flex"
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    flex={1}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                  >
                    <Link
                      sx={{ display: 'flex' }}
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 80,
                          background: 'transparent',
                          height: 'auto',
                        }}
                        alt={item.title}
                        src={item.image}
                      />
                    </Link>
                    <Box
                      pl={1}
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Link
                        noWrap
                        color="text.primary"
                        variant="h5"
                        href=""
                        underline="hover"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.title}
                      </Link>
                      <Chip
                        sx={{ mt: 1 }}
                        label={`$${item.price}`}
                        color="primary"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <IconButtonWrapper
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        transition: theme.transitions.create(['all']),

                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                        },
                      }}
                      size="small"
                    >
                      <AddTwoToneIcon fontSize="small" />
                    </IconButtonWrapper>
                    <IconButtonWrapper
                      sx={{
                        ml: 1,
                        backgroundColor: alpha(theme.palette.error.main, 0.1),
                        color: theme.palette.error.main,
                        transition: theme.transitions.create(['all']),

                        '&:hover': {
                          backgroundColor: theme.palette.error.main,
                          color: theme.palette.error.contrastText,
                        },
                      }}
                      size="small"
                    >
                      <ClearTwoToneIcon fontSize="small" />
                    </IconButtonWrapper>
                  </Box>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
      <Divider />
      <Box
        sx={{
          textAlign: 'right',
          p: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
        }}
      >
        <Typography
          variant="h4"
          fontWeight={500}
          color="text.secondary"
        >
          {t('Total')}
          <Typography
            sx={{
              pl: 1,
            }}
            component="span"
            variant="h4"
            color="text.primary"
          >
            <b>$12,685</b>
          </Typography>
        </Typography>
      </Box>
      <Divider />

      <Box
        p={2}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            color: 'primary.main',
          }}
          fullWidth
          size="large"
        >
          {t('Proceed to checkout')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
