import { CloseRounded } from '@mui/icons-material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import { alpha, Badge, Box, CircularProgress } from '@mui/material';
import { useCallback, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const AvatarUploadSmallAlt = () => {
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

  const { getRootProps } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] } as DropzoneOptions['accept'],
    maxFiles: 1,
  });

  const removeImage = () => {
    setAvatar('');
    if (avatar) URL.revokeObjectURL(avatar);
  };

  return (
    <Badge
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{
        '& .MuiBadge-badge': {
          top: 10,
          right: 10,
        },
      }}
      badgeContent={
        avatar && (
          <ButtonIcon
            variant="contained"
            color="error"
            size="small"
            startIcon={<CloseRounded fontSize="inherit" />}
            sx={{
              borderRadius: '50%',
              boxShadow: (theme) =>
                theme.palette.mode === 'dark' ? theme.shadows[13] : theme.shadows[18],
            }}
            onClick={removeImage}
          />
        )
      }
    >
      <AvatarState
        {...getRootProps()}
        src={avatar}
        variant="rounded"
        isSoft
        sx={{
          width: 124,
          height: 124,
          boxShadow: (theme) =>
            theme.palette.mode === 'dark' ? theme.shadows[13] : theme.shadows[18],
          border: '2px solid transparent',
          borderColor: 'background.paper',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'neutral.900' : 'neutral.50',

          '&:hover': {
            borderColor: 'currentColor',
            cursor: 'pointer',
          },
        }}
        alt="Avatar Preview"
      >
        {!avatar &&
          (loading ? (
            <CircularProgress size={34} />
          ) : (
            <AccountCircleRoundedIcon
              sx={{
                fontSize: 44,
                color: 'neutral.500',
              }}
            />
          ))}
      </AvatarState>
      {avatar && (
        <Box
          {...getRootProps()}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: (theme) => theme.shape.borderRadius + 'px',
            left: 0,
            top: 0,
            backgroundColor: (theme) => alpha(theme.palette.neutral[900], 0.7),
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: loading ? 1 : 0,

            '&:hover': {
              cursor: 'pointer',
              opacity: 1,
            },
          }}
        >
          {loading ? (
            <CircularProgress
              sx={{
                color: 'common.white',
              }}
              size={34}
            />
          ) : (
            <AutoFixHighRoundedIcon
              fontSize="large"
              sx={{
                color: 'common.white',
              }}
            />
          )}
        </Box>
      )}
    </Badge>
  );
};

export default AvatarUploadSmallAlt;
