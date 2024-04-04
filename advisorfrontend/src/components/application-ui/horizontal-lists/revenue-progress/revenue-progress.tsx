import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type PersonData = {
  name: string;
  avatarSrc: string;
  rating: number;
  jobs: number;
};

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const peopleData: PersonData[] = [
    { name: 'Remy Sharp', avatarSrc: '/avatars/3.png', rating: 4.8, jobs: 34 },
    { name: 'Agnes Walker', avatarSrc: '/avatars/2.png', rating: 5.0, jobs: 74 },
    { name: 'Anabel Mayo', avatarSrc: '/avatars/1.png', rating: 2.9, jobs: 52 },
    { name: 'Travis Howard', avatarSrc: '/avatars/4.png', rating: 3.5, jobs: 82 },
  ];

  return (
    <Card>
      <CardHeader
        disableTypography
        sx={{
          p: { xs: 2, sm: 3 },
        }}
        title={
          <Typography
            textAlign="center"
            variant="h4"
          >
            {t('Revenue progress')}
          </Typography>
        }
        subheader={
          <Typography
            textAlign="center"
            fontWeight={400}
            color="text.secondary"
            variant="h5"
          >
            {t('Our company revenues, split by progress.')}
          </Typography>
        }
      />
      <Box
        pb={{ xs: 2, sm: 3 }}
        px={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={{ xs: 2, sm: 3 }}
        flexWrap="wrap"
      >
        {peopleData.map((person, index) => (
          <React.Fragment key={person.name}>
            <Box
              p={{ xs: 2, sm: 3, md: 4 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                borderRadius: theme.shape.borderRadius + 'px',
                backgroundColor: mdUp ? 'background.paper' : 'neutral.25',
              }}
            >
              <Avatar
                component={Link}
                href=""
                onClick={(e) => e.preventDefault()}
                sx={{
                  width: 84,
                  height: 84,
                }}
                alt={person.name}
                src={person.avatarSrc}
              />
              <Typography
                sx={{
                  pt: 1,
                }}
                variant="h5"
              >
                {person.name}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
              >
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <StarTwoToneIcon
                    sx={{ color: theme.palette.warning.main }}
                    fontSize="small"
                  />

                  <Typography
                    sx={{
                      pl: 0.2,
                    }}
                    component="span"
                    variant="h5"
                  >
                    {person.rating}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    pl: 0.5,
                  }}
                  component="span"
                  variant="subtitle2"
                >
                  | <b>{person.jobs}</b> {t('jobs')}
                </Typography>
              </Box>
            </Box>
            {index < peopleData.length - 1 && (
              <Divider
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                }}
                orientation="vertical"
                flexItem
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Card>
  );
}

export default Component;
