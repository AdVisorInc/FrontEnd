import { UploadFileRounded } from '@mui/icons-material';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import DoDisturbAltRoundedIcon from '@mui/icons-material/DoDisturbAltRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonLight } from 'src/components/base/styles/button';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardAddActionDashed, DividerLight } from 'src/components/base/styles/card';
import { LinearProgressDark } from 'src/components/base/styles/progress-bar';
import { TooltipLight } from 'src/components/base/styles/tooltips';

const fileIcon = (fileName) => {
  if (fileName.endsWith('.pdf')) return <PictureAsPdfTwoToneIcon />;
  if (fileName.match(/\.(doc|docx)$/)) return <DescriptionTwoToneIcon />;
  if (fileName.match(/\.(jpeg|jpg|png|gif)$/)) return <ImageTwoToneIcon />;
  return <InsertDriveFileTwoToneIcon />;
};

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const DocumentsUploadListAccent = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setUploadProgress((prevProgress) => ({
        ...prevProgress,
        [file.name]: { progress: 0 },
      }));
    });

    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) => ({ file, progress: 0 })),
    ]);

    acceptedFiles.forEach((file) => {
      // Simulate file upload progress
      const simulateProgress = (file) => {
        const progressInterval = setInterval(() => {
          setUploadProgress((prevProgress) => {
            if (!prevProgress[file.name]) {
              clearInterval(progressInterval);
              return prevProgress;
            }

            const currentProgress = prevProgress[file.name].progress;
            const nextProgress = Math.min(currentProgress + 10, 100);

            if (nextProgress === 100) {
              clearInterval(progressInterval);
            }

            return {
              ...prevProgress,
              [file.name]: { progress: nextProgress },
            };
          });
        }, 200);
      };

      simulateProgress(file);
    });
  }, []);

  const { getRootProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 10,
  });

  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter(({ file }) => file.name !== fileName));

    setUploadProgress((prevProgress) => {
      const newProgress = { ...prevProgress };
      delete newProgress[fileName];
      return newProgress;
    });

    if (uploadProgress[fileName]) {
      URL.revokeObjectURL(uploadProgress[fileName].url);
    }
  };

  return (
    <Container
      disableGutters
      maxWidth="sm"
    >
      <CardAddActionDashed
        variant="outlined"
        elevation={0}
        sx={{
          borderWidth: 1,
          borderColor: (theme) => alpha(theme.palette.common.white, 0.3),
          background: (theme) => alpha(theme.palette.common.white, 0.08),

          '&:hover': {
            borderColor: (theme) => alpha(theme.palette.common.white, 0.5),
          },
        }}
      >
        <CardActionArea {...getRootProps()}>
          <CardContent sx={{ py: 4 }}>
            <Stack
              spacing={1}
              justifyContent="center"
              direction="column"
              alignItems="center"
            >
              <AvatarState
                state="secondary"
                isSoft
                variant="rounded"
                sx={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: (theme) => alpha(theme.palette.common.white, 0.12),
                  background: (theme) => alpha(theme.palette.common.white, 0.08),
                }}
              >
                {isDragReject && (
                  <DoDisturbAltRoundedIcon
                    fontSize="small"
                    sx={{
                      color: 'error.main',
                    }}
                  />
                )}
                {isDragAccept && (
                  <DoneRoundedIcon
                    fontSize="small"
                    sx={{
                      color: 'success.main',
                    }}
                  />
                )}
                {!isDragActive && (
                  <CloudUploadRoundedIcon
                    fontSize="small"
                    sx={{
                      color: 'common.white',
                    }}
                  />
                )}
              </AvatarState>
              <Box>
                <Typography
                  textAlign="center"
                  variant="h6"
                  fontWeight={400}
                  color={
                    isDragAccept ? 'success.main' : isDragReject ? 'error.main' : 'neutral.500'
                  }
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    component="span"
                    color={
                      isDragAccept ? 'success.main' : isDragReject ? 'error.main' : 'common.white'
                    }
                  >
                    Click to upload
                  </Typography>{' '}
                  or drag and drop documents here. Max. 10 files
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </CardActionArea>
      </CardAddActionDashed>
      {files && files.length > 0 ? (
        <Card
          variant="outlined"
          elevation={0}
          sx={{
            mt: 3,
            background: (theme) => alpha(theme.palette.common.white, 0.06),
            color: 'neutral.500',
            borderColor: (theme) => alpha(theme.palette.common.white, 0.12),
          }}
        >
          <List
            component="div"
            disablePadding
          >
            {files.map(({ file }) => (
              <>
                <ListItem
                  sx={{
                    p: { xs: 1.5, sm: 2 },
                  }}
                  key={file.name}
                  component="div"
                  alignItems="flex-start"
                >
                  <ListItemIcon sx={{ minWidth: 38, color: 'neutral.300' }}>
                    {fileIcon(file.name)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="space-between"
                      >
                        <Box overflow="hidden">
                          <Typography
                            noWrap
                            variant="subtitle1"
                            fontWeight={500}
                            color="common.white"
                            gutterBottom
                          >
                            {file.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="neutral.500"
                            gutterBottom
                          >
                            {formatBytes(file.size)}
                          </Typography>
                        </Box>
                        <TooltipLight
                          title="Remove"
                          arrow
                          placement="top"
                        >
                          <ButtonIcon
                            aria-label="delete"
                            onClick={() => removeFile(file.name)}
                            size="small"
                            color="error"
                          >
                            <DeleteOutlineRoundedIcon fontSize="small" />
                          </ButtonIcon>
                        </TooltipLight>
                      </Box>
                    }
                    disableTypography
                    secondary={
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Box flex={1}>
                          <LinearProgressDark
                            variant="determinate"
                            value={uploadProgress[file.name]?.progress || 0}
                          />
                        </Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ minWidth: 54, textAlign: 'right' }}
                        >
                          {uploadProgress[file.name]?.progress || 0}%
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                <DividerLight />
              </>
            ))}
          </List>
        </Card>
      ) : (
        <Stack
          spacing={0.5}
          justifyContent="center"
          direction="column"
          alignItems="center"
          pt={3}
          pb={1}
        >
          <Box textAlign="center">
            <Typography
              variant="h5"
              color="neutral.25"
            >
              No files added
            </Typography>
            <Typography
              color="neutral.500"
              fontWeight={400}
            >
              Please upload the necessary documents
            </Typography>
          </Box>
          <Box width="100%">
            <DividerLight
              flexItem
              sx={{ my: 1, mx: 'auto', width: '55%' }}
            />
          </Box>
          <ButtonLight
            startIcon={<UploadFileRounded />}
            variant="outlined"
            color="secondary"
            size="small"
            {...getRootProps()}
          >
            Add files
          </ButtonLight>
        </Stack>
      )}
    </Container>
  );
};

export default DocumentsUploadListAccent;
