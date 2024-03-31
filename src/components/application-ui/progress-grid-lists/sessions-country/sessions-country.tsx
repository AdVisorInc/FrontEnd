import { Box, Card, CardHeader, Divider, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

interface SessionData {
  countryCode: string;
  countryName: string;
  progress: number;
}

function SessionsByCountry() {
  const { t }: { t: (key: string) => string } = useTranslation();

  const sessions: SessionData[] = [
    { countryCode: 'US', countryName: 'USA', progress: 57 },
    { countryCode: 'DE', countryName: 'Germany', progress: 34 },
    { countryCode: 'FR', countryName: 'France', progress: 21 },
    { countryCode: 'ES', countryName: 'Spain', progress: 13 },
    { countryCode: 'CN', countryName: 'China', progress: 71 },
  ];

  return (
    <Card>
      <CardHeader title={t('Sessions by Country')} />
      <Divider />
      <List
        disablePadding
        component="nav"
        sx={{
          svg: {
            width: 26,
            mr: 1,
          },
        }}
      >
        {sessions.map((session, index) => (
          <React.Fragment key={session.countryCode}>
            <ListItem
              sx={{
                px: 2,
                py: { xs: 2, sm: 3 },
              }}
            >
              <ReactCountryFlag
                style={{
                  width: '2em',
                  height: '2em',
                }}
                countryCode={session.countryCode}
                svg
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 1,
                  minWidth: 80,
                }}
              >
                {session.countryName}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                sx={{
                  ml: 1,
                  flexGrow: 1,
                }}
              >
                <Box
                  flex={1}
                  mr={2}
                >
                  <LinearProgressSlim
                    value={session.progress}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Typography
                  variant="h5"
                  color="text.secondary"
                >
                  {session.progress}%
                </Typography>
              </Box>
            </ListItem>
            {index < sessions.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}

export default SessionsByCountry;
