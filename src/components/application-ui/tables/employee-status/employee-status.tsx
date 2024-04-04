import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const BoxComposedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 7,

  '.MuiTypography-root': {
    color: theme.palette.primary.contrastText,

    '& + .MuiTypography-root': {
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
}));

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  zIndex: 7,
}));

const TableHeadWrapper = styled(TableHead)(({ theme }) => ({
  '.MuiTableCell-root': {
    textTransform: 'none',
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(16),
    paddingTop: 0,
    paddingBottom: theme.spacing(1),
    background: 'transparent',
  },

  '.MuiTableRow-root': {
    background: 'transparent',
  },
}));

const TableWrapper = styled(Table)(() => ({
  '.MuiTableCell-root': {
    borderBottom: 0,
  },
}));

type EmployeeData = {
  name: string;
  jobFunction: string;
  avatar: string;
  status: string;
  statusColor: 'warning' | 'success' | 'error';
};

const employees: EmployeeData[] = [
  {
    name: 'Shanelle Wynn',
    jobFunction: 'UI Engineer, Apple Inc.',
    avatar: '/avatars/1.png',
    status: 'Pending',
    statusColor: 'warning',
  },
  {
    name: 'Beck Simpson',
    jobFunction: 'Frontend Developer',
    avatar: '/avatars/2.png',
    status: 'Completed',
    statusColor: 'success',
  },
  {
    name: 'Regan Norris',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{
        '&:hover': {
          boxShadow: `0 2rem 8rem 0 ${theme.palette.background.default}, 
                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.1)}`,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
        }}
      >
        <CardActions>
          <Chip
            label={t('New')}
            variant="filled"
            color="success"
            sx={{
              backgroundColor: 'success.main',
              color: 'common.white',
            }}
          />
        </CardActions>
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.3,
            backgroundImage: (theme) =>
              theme.palette.mode === 'dark'
                ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders//covers/1.jpg")`
                : `url("/placeholders/covers/1.jpg")`,
          }}
        />
        <BoxComposedContent
          sx={{
            textAlign: 'center',
          }}
          py={{ xs: 3, md: 6 }}
        >
          <Typography
            sx={{
              px: { xs: 4, md: 12 },
              lineHeight: 1.5,
            }}
            variant="h3"
          >
            {t('Active employees')}
          </Typography>
          <Typography
            sx={{
              mb: 2.5,
              px: { xs: 4, md: 8 },
              lineHeight: 1.6,
            }}
            variant="h6"
            fontWeight={500}
          >
            {t('Employee listing with status indicator')}.
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="error"
            sx={{
              fontSize: theme.typography.pxToRem(12),
              textTransform: 'uppercase',
              boxShadow: theme.palette.mode === 'dark' ? theme.shadows[3] : theme.shadows[16],
            }}
          >
            {t('Contact us')}
          </Button>
        </BoxComposedContent>
      </Box>
      <Box p={{ xs: 0, sm: 1, md: 2 }}>
        <TableContainer sx={{ mt: { xs: 1, sm: 0 } }}>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('Employee')}</TableCell>
                <TableCell align="center">{t('Status')}</TableCell>
                <TableCell align="right">{t('Actions')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow
                  key={index}
                  hover
                >
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <Avatar
                        sx={{ width: 50, height: 50 }}
                        src={employee.avatar}
                      />
                      <Box ml={1.5}>
                        <Link
                          href=""
                          onClick={(e) => e.preventDefault()}
                          color="text.primary"
                          variant="h6"
                          noWrap
                        >
                          {employee.name}
                        </Link>
                        <Typography
                          variant="subtitle2"
                          noWrap
                          color="text.secondary"
                        >
                          {employee.jobFunction}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={t(employee.status)}
                      variant="filled"
                      color={employee.statusColor}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      size="small"
                      color="secondary"
                    >
                      {t('Chat')}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
    </Card>
  );
}

export default Component;
