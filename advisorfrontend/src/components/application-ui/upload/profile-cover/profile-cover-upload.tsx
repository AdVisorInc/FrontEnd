import { CloseRounded } from '@mui/icons-material';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import DoDisturbAltRoundedIcon from '@mui/icons-material/DoDisturbAltRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardAddActionDashed } from 'src/components/base/styles/card';

const ProfileCoverUpload: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [avatar, setAvatar] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setLoading(true);
    const file = acceptedFiles[0];
    if (file) {
      setTimeout(() => {
        setAvatar(URL.createObjectURL(file));
        setLoading(false);
      }, 2000);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] } as DropzoneOptions['accept'],
    maxFiles: 1,
  });

  const removeImage = () => {
    setAvatar('');
    if (avatar) URL.revokeObjectURL(avatar);
  };

  return (
    <Box
      height={avatar ? 320 : 240}
      maxHeight={320}
      position="relative"
    >
      {avatar ? (
        <Card
          elevation={0}
          variant="outlined"
        >
          <CardMedia
            sx={{ height: 320 }}
            image={avatar}
            title="Placeholder image"
          />

          <Box
            position="absolute"
            top={theme.spacing(2)}
            right={theme.spacing(2)}
          >
            <Card
              elevation={18}
              sx={{ pl: 1 }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                  />
                }
              >
                {avatar && (
                  <Tooltip
                    arrow
                    placement="left"
                    title="Remove profile photo"
                  >
                    <ButtonIcon
                      size="small"
                      variant="contained"
                      color="error"
                      startIcon={<CloseRounded fontSize="inherit" />}
                      onClick={removeImage}
                    />
                  </Tooltip>
                )}
                <Box
                  sx={{
                    ml: '0 !important',
                  }}
                >
                  <input {...getInputProps()} />
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      border: 0,
                      borderRadius: '0',
                      boxShadow: 'none',
                      '&:hover': {
                        border: 0,
                      },
                    }}
                    component="span"
                    startIcon={loading ? <CircularProgress size={14} /> : <UploadTwoToneIcon />}
                    {...getRootProps()}
                    disabled={loading}
                  >
                    {loading ? 'Please wait...' : t('Change cover')}
                  </Button>
                </Box>
              </Stack>
            </Card>
          </Box>
        </Card>
      ) : (
        <CardAddActionDashed
          variant="outlined"
          elevation={0}
        >
          <CardActionArea
            disabled={loading}
            {...getRootProps()}
          >
            <CardContent>
              <Stack
                spacing={1}
                justifyContent="center"
                direction="column"
                alignItems="center"
              >
                {!avatar &&
                  (loading ? (
                    <CircularProgress size={34} />
                  ) : (
                    <>
                      {isDragReject && (
                        <DoDisturbAltRoundedIcon
                          sx={{
                            color: 'error.main',
                            fontSize: 34,
                          }}
                        />
                      )}
                      {isDragAccept && (
                        <DoneRoundedIcon
                          sx={{
                            color: 'success.main',
                            fontSize: 34,
                          }}
                        />
                      )}
                      {!isDragActive && (
                        <CloudUploadRoundedIcon
                          sx={{
                            color: 'neutral.600',
                            fontSize: 34,
                          }}
                        />
                      )}
                    </>
                  ))}
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h5"
                    fontWeight={500}
                  >
                    Upload profile cover photo
                  </Typography>
                  <Typography
                    variant="body2"
                    color={
                      isDragAccept ? 'success.main' : isDragReject ? 'error.main' : 'text.primary'
                    }
                    sx={{
                      mt: 0.5,
                      opacity: 0.72,
                    }}
                  >
                    Accepted files:{' '}
                    <Typography
                      fontWeight={500}
                      component="span"
                    >
                      .jpeg
                    </Typography>
                    ,{' '}
                    <Typography
                      fontWeight={500}
                      component="span"
                    >
                      .jpg
                    </Typography>
                    ,{' '}
                    <Typography
                      fontWeight={500}
                      component="span"
                    >
                      .png
                    </Typography>
                    .
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </CardActionArea>
        </CardAddActionDashed>
      )}
    </Box>
  );
};

export default ProfileCoverUpload;
