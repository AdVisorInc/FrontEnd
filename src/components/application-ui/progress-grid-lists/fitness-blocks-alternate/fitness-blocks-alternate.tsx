import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import FoodBankTwoToneIcon from '@mui/icons-material/FoodBankTwoTone';
import KitchenTwoToneIcon from '@mui/icons-material/KitchenTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import {
  Card,
  CardContent,
  CardHeader,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Steps() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: 1,
          }}
        >
          <CardHeader
            avatar={
              <AvatarState
                isSoft
                state="primary"
                sx={{ height: 54, width: 54 }}
              >
                <KitchenTwoToneIcon />
              </AvatarState>
            }
            action={
              <>
                <Typography
                  align="right"
                  variant="h3"
                  lineHeight={1.5}
                >
                  2400
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {t('kCal')}
                </Typography>
              </>
            }
          />
          <CardContent
            sx={{
              pt: 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                pb: 3,
              }}
            >
              {t('Calories')}
            </Typography>
            <LinearProgress
              value={34}
              color="primary"
              variant="determinate"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: 1,
          }}
        >
          <CardHeader
            avatar={
              <AvatarState
                isSoft
                state="primary"
                sx={{ height: 54, width: 54 }}
              >
                <FastfoodTwoToneIcon />
              </AvatarState>
            }
            action={
              <>
                <Typography
                  align="right"
                  variant="h3"
                  lineHeight={1.5}
                >
                  3566
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {t('grams')}
                </Typography>
              </>
            }
          />
          <CardContent
            sx={{
              pt: 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                pb: 3,
              }}
            >
              {t('Protein')}
            </Typography>
            <LinearProgress
              value={49}
              color="primary"
              variant="determinate"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: 1,
          }}
        >
          <CardHeader
            avatar={
              <AvatarState
                isSoft
                state="primary"
                sx={{ height: 54, width: 54 }}
              >
                <FoodBankTwoToneIcon />
              </AvatarState>
            }
            action={
              <>
                <Typography
                  align="right"
                  variant="h3"
                  lineHeight={1.5}
                >
                  1000
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {t('grams')}
                </Typography>
              </>
            }
          />
          <CardContent
            sx={{
              pt: 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                pb: 3,
              }}
            >
              {t('Carbs')}
            </Typography>
            <LinearProgress
              value={22}
              color="primary"
              variant="determinate"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: 1,
          }}
        >
          <CardHeader
            avatar={
              <AvatarState
                isSoft
                state="primary"
                sx={{ height: 54, width: 54 }}
              >
                <LocalPharmacyTwoToneIcon />
              </AvatarState>
            }
            action={
              <>
                <Typography
                  align="right"
                  variant="h3"
                  lineHeight={1.5}
                >
                  1505
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {t('grams')}
                </Typography>
              </>
            }
          />
          <CardContent
            sx={{
              pt: 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                pb: 3,
              }}
            >
              {t('Fat')}
            </Typography>
            <LinearProgress
              value={79}
              color="primary"
              variant="determinate"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Steps;
