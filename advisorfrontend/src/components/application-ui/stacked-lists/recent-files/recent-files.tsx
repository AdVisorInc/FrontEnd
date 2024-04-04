import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import {
  alpha,
  Box,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonLight } from 'src/components/base/styles/button';
import { DividerLight } from 'src/components/base/styles/card';

const ListItemWrapper = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.04)
      : alpha(theme.palette.common.white, 0.1),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  boxShadow: `
    0 0.56875rem 3.3rem rgba(0, 0, 0, .05),
    0 0.9975rem 2.4rem rgba(0, 0, 0, .07),
    0 0.35rem 1rem rgba(0, 0, 0, .1),
    0 0.225rem 0.8rem rgba(0, 0, 0, .15)
  `,
  '&:last-of-type': {
    marginBottom: 0,
  },
}));

function Component1() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      name: 'feb2024_reports.xls',
      size: '386 KB',
    },
    {
      id: 2,
      name: 'feb2024_pres_8.doc',
      size: '1.34 MB',
    },
    {
      id: 3,
      name: 'PhotosArchive.zip',
      size: '34.2 GB',
    },
    {
      id: 4,
      name: 'homepage_new_12.tsx',
      size: '27 KB',
    },
    {
      id: 5,
      name: 'latest_comps_2022.sketch',
      size: '548.21 MB',
    },
  ];

  return (
    <Card
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.common.white, 0.04)
            : 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
        color: theme.palette.common.white,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.02)
              : alpha(theme.palette.common.white, 0.1),
        }}
        p={2}
      >
        <Box>
          <Typography
            variant="caption"
            fontWeight={700}
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
              fontSize: theme.typography.pxToRem(12),
            }}
          >
            {t('Storage')}
          </Typography>
          <Typography variant="h4">{t('Recent Files')}</Typography>
        </Box>
        <ButtonLight>View all</ButtonLight>
      </Box>
      <DividerLight />
      <Box
        sx={{
          height: 392,
        }}
      >
        <Scrollbar>
          <List
            sx={{
              p: 2,
            }}
          >
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItemWrapper
                  secondaryAction={<ButtonLight size="small">View file</ButtonLight>}
                >
                  <ListItemAvatar
                    sx={{
                      color: alpha(theme.palette.common.white, 0.5),
                      minWidth: 0,
                      mr: 2,
                    }}
                  >
                    <InsertDriveFileTwoToneIcon fontSize="large" />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      flexGrow: 0,
                      maxWidth: '50%',
                      flexBasis: '50%',
                    }}
                    disableTypography
                    primary={
                      <Typography
                        noWrap
                        sx={{
                          color: theme.palette.common.white,
                        }}
                        variant="h5"
                      >
                        {item.name}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{
                            color: alpha(theme.palette.common.white, 0.7),
                          }}
                          variant="body1"
                        >
                          {item.size}
                        </Typography>
                      </>
                    }
                  />
                </ListItemWrapper>
              </Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
    </Card>
  );
}

export default Component1;
