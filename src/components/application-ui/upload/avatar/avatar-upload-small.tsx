import { CloseRounded } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Badge,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Stack,
  Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const AvatarUploadSmall = () => {
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] } as DropzoneOptions['accept'],
    maxFiles: 1,
  });

  const removeImage = () => {
    setAvatar('');
    if (avatar) URL.revokeObjectURL(avatar);
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
    >
      <Typography
        variant="h6"
        gutterBottom
        component="label"
        fontWeight={500}
      >
        Avatar
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            avatar && (
              <ButtonIcon
                variant="contained"
                color="secondary"
                startIcon={<CloseRounded fontSize="inherit" />}
                sx={{
                  borderRadius: '50%',
                  boxShadow: (theme) => theme.shadows[18],
                }}
                size="small"
                onClick={removeImage}
              />
            )
          }
        >
          <AvatarState
            {...getRootProps()}
            src={avatar}
            state="primary"
            isSoft
            sx={{
              width: 74,
              height: 74,
              border: '2px solid transparent',

              '&:hover': {
                borderStyle: 'dashed',
                borderColor: 'currentcolor',
                cursor: 'pointer',
              },
            }}
            alt="Avatar Preview"
          >
            {!avatar && loading ? (
              <CircularProgress size={34} />
            ) : (
              <CloudUploadIcon fontSize="small" />
            )}
          </AvatarState>
        </Badge>

        <Box>
          <input {...getInputProps()} />
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            component="span"
            {...getRootProps()}
            disabled={loading}
            sx={{
              px: loading && 0,
            }}
          >
            {loading ? 'Please wait...' : 'Upload'}
          </Button>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              mt: 0.5,
            }}
          >
            Accepted files:{' '}
            <Typography
              color="text.primary"
              fontWeight={500}
              component="span"
            >
              .jpeg
            </Typography>
            ,{' '}
            <Typography
              color="text.primary"
              fontWeight={500}
              component="span"
            >
              .jpg
            </Typography>
            ,{' '}
            <Typography
              color="text.primary"
              fontWeight={500}
              component="span"
            >
              .png
            </Typography>
            .
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
          }}
        ></Box>
      </Stack>
    </FormControl>
  );
};

export default AvatarUploadSmall;
