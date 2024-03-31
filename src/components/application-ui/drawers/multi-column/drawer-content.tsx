import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Button,
  DialogContent,
  Divider,
  Stack,
  Theme,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { ButtonSoft } from 'src/components/base/styles/button-soft';

interface MultiDrawerContentProps {
  onClose?: () => void;
}

export const MultiDrawerContent: FC<MultiDrawerContentProps> = (props) => {
  const { t } = useTranslation();
  const { onClose } = props;

  const [showDrawerSide, setshowDrawerSide] = useState(true);
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const toggleNewReleases = () => {
    setshowDrawerSide((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      width={{ xs: '100%', md: 620 }}
      height={'100vh'}
      flex={1}
    >
      <Box
        display="flex"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        {!smUp && (
          <>
            <Button
              onClick={toggleNewReleases}
              color="secondary"
              sx={{
                px: 0,
                backgroundColor: 'background.paper',
                borderRadius: 0,
                width: (theme) => theme.spacing(3),
                minWidth: (theme) => theme.spacing(3),
              }}
            >
              {showDrawerSide ? (
                <KeyboardArrowRightTwoToneIcon fontSize="small" />
              ) : (
                <KeyboardArrowLeftTwoToneIcon fontSize="small" />
              )}
            </Button>
            <Divider
              flexItem
              orientation="vertical"
            />
            <Box
              sx={{
                flex: 1,
                width: showDrawerSide ? 180 : 0,
                display: 'flex',
                flexDirection: 'column',
                transition: (theme) => theme.transitions.create(['width']),
              }}
            >
              <DialogContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 180,
                  flex: 1,
                  transition: (theme) => theme.transitions.create(['opacity']),
                  opacity: showDrawerSide ? 1 : 0,
                }}
              >
                <Stack
                  spacing={2}
                  divider={<Divider flexItem />}
                >
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                  <PlaceholderBox height={48} />
                </Stack>
              </DialogContent>
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: (theme) => theme.shadows[12],
          minWidth: 50,
        }}
      >
        <Box sx={{ p: 2 }}>
          <PlaceholderBox height={28} />
        </Box>
        <Divider />
        <DialogContent>
          <PlaceholderBox height={728} />
        </DialogContent>
        <Divider />
        <Stack
          p={2}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
        >
          <ButtonSoft
            fullWidth
            color="secondary"
            onClick={onClose}
          >
            {t('Close')}
          </ButtonSoft>
          <Button
            color="primary"
            variant="contained"
            onClick={onClose}
            fullWidth
          >
            {t('Save')}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

MultiDrawerContent.propTypes = {
  onClose: PropTypes.func,
};
