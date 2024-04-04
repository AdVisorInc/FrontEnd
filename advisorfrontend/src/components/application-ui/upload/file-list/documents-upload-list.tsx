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
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  LinearProgress,
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
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardAddActionDashed } from 'src/components/base/styles/card';

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

const DocumentsUploadList = () => {
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
    <>
      <CardAddActionDashed
        variant="outlined"
        elevation={0}
        sx={{
          borderWidth: 1,
        }}
      >
        <CardActionArea {...getRootProps()}>
          <CardContent>
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
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.400',
                  backgroundColor: 'background.paper',
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
                      color: 'text.primary',
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
                    isDragAccept ? 'success.main' : isDragReject ? 'error.main' : 'text.secondary'
                  }
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    component="span"
                    color={
                      isDragAccept ? 'success.main' : isDragReject ? 'error.main' : 'primary.main'
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
        <List
          component="div"
          disablePadding
        >
          <Stack
            spacing={2}
            mt={2}
          >
            {files.map(({ file }) => (
              <Card
                variant="outlined"
                elevation={0}
                key={file.name}
                sx={{
                  '&:hover': {
                    borderColor: (theme) =>
                      theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.500',
                  },
                }}
              >
                <ListItem
                  component="div"
                  alignItems="flex-start"
                >
                  <ListItemIcon sx={{ minWidth: 38, color: 'neutral.700' }}>
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
                            color="text.primary"
                          >
                            {file.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {formatBytes(file.size)}
                          </Typography>
                        </Box>
                        <ButtonIcon
                          aria-label="delete"
                          onClick={() => removeFile(file.name)}
                          size="small"
                          color="error"
                        >
                          <DeleteOutlineRoundedIcon fontSize="small" />
                        </ButtonIcon>
                      </Box>
                    }
                    disableTypography
                    secondary={
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Box flex={1}>
                          <LinearProgress
                            variant="determinate"
                            value={uploadProgress[file.name]?.progress || 0}
                          />
                        </Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ pl: 0.5 }}
                        >
                          {uploadProgress[file.name]?.progress || 0}%
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </Card>
            ))}
          </Stack>
        </List>
      ) : (
        <Stack
          spacing={0.5}
          justifyContent="center"
          direction="column"
          alignItems="center"
          pt={3}
          pb={2}
        >
          <Box textAlign="center">
            <Typography
              variant="h5"
              color="text.primary"
            >
              No files added
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={400}
            >
              Please upload the necessary documents
            </Typography>
          </Box>
          <Box width="100%">
            <Divider
              flexItem
              sx={{ my: 1, mx: 'auto', width: '55%' }}
            />
          </Box>
          <Button
            startIcon={<UploadFileRounded />}
            variant="outlined"
            color="secondary"
            size="small"
            {...getRootProps()}
          >
            Add files
          </Button>
        </Stack>
      )}
    </>
  );
};

export default DocumentsUploadList;
