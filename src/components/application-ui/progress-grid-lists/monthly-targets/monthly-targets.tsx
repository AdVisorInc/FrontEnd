import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

const CardWrapper = styled(Card)(({ theme }) => ({
  background: alpha(alpha(theme.palette.common.black, 0.1), 0.02),
  borderRadius: 0,
}));

const ListWrapper = styled(List)(() => ({
  '.MuiListItem-root:last-of-type + .MuiDivider-root': {
    display: 'none',
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      title: t('Orders'),
      value: '345',
      progress: 34,
    },
    {
      id: 2,
      title: t('Sales'),
      value: '84',
      progress: 15,
    },
    {
      id: 3,
      title: t('Users'),
      value: '4,564',
      progress: 53,
    },
    {
      id: 4,
      title: t('Visits'),
      value: '1,54k',
      progress: 71,
    },
    {
      id: 5,
      title: t('Revenue'),
      value: '$34,325',
      progress: 47,
    },
  ];

  return (
    <Card>
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h5">{t('Monthly targets')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('These are your performance indicators')}
          </Typography>
        </Box>
        <IconButton
          size="small"
          color="secondary"
        >
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 301,
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: 'block',
                    py: 2,
                    px: 3,
                  }}
                >
                  <Box
                    display="flex"
                    mb={0.6}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">{t(item.title)}</Typography>
                    <Typography
                      sx={{
                        color: theme.palette.primary.main,
                      }}
                      variant="h4"
                    >
                      {item.value}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                  />
                  <Box
                    display="flex"
                    sx={{
                      pt: 0.4,
                    }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      0
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      100%
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
      <Divider />
      <CardWrapper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: 2,
        }}
      >
        <Button
          startIcon={<PageviewTwoToneIcon />}
          variant="outlined"
        >
          {t('View details')}
        </Button>
      </CardWrapper>
    </Card>
  );
}

export default Component;
