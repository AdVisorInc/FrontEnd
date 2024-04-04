import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AccordionAlternate } from 'src/components/base/styles/accordion';

interface AccordionItem {
  name: string;
  jobTitle: string;
  avatarSrc: string;
  email: string;
  salary: string;
  resumeFile: string;
}

const Component = () => {
  const [expandedAccordion, setExpandedAccordion] = React.useState<number | null>(null);

  const { t } = useTranslation();

  const accordionData: AccordionItem[] = [
    {
      name: 'Jessica Martins',
      jobTitle: t('Full Stack Developer'),
      avatarSrc: '/avatars/1.png',
      email: 'jessica.martins@example.com',
      salary: '$150,000',
      resumeFile: 'resume_full_stack_developer.pdf',
    },
    {
      name: 'Michael Sanders',
      jobTitle: t('Data Analyst'),
      avatarSrc: '/avatars/2.png',
      email: 'michael.sanders@example.com',
      salary: '$95,000',
      resumeFile: 'resume_data_analyst.pdf',
    },
  ];

  const handleAccordionToggle =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordion(isExpanded ? index : null);
    };

  return (
    <>
      {accordionData.map((item, index) => (
        <AccordionAlternate
          expanded={expandedAccordion === index}
          onChange={handleAccordionToggle(index)}
          key={index}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowRightTwoToneIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Avatar
                variant="rounded"
                alt="..."
                sx={{ width: 52, height: 52 }}
                src={item.avatarSrc}
              />
              <Box ml={1}>
                <Typography
                  variant="h6"
                  component="div"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  noWrap
                >
                  {item.jobTitle}
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              mb={2}
              spacing={1}
              direction="row"
            >
              <Button
                size="small"
                variant="outlined"
                color="primary"
              >
                View profile
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
              >
                Edit details
              </Button>
            </Stack>
            <Card
              elevation={0}
              variant="outlined"
            >
              <ListItem>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h6' }}
                  primary="Email address"
                  secondary={item.email}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h6' }}
                  primary="Salary expectation"
                  secondary={item.salary}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ noWrap: true }}
                  primary={item.resumeFile}
                />
              </ListItem>
            </Card>
          </AccordionDetails>
        </AccordionAlternate>
      ))}
    </>
  );
};

export default Component;
