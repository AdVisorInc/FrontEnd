import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AccordionMinimal } from 'src/components/base/styles/accordion';

const Component = () => {
  const { t } = useTranslation();

  const typeOfEmployment = [
    {
      id: 1,
      amount: 12,
      value: 'full_time',
      text: t('Full Time'),
    },
    {
      id: 2,
      amount: 16,
      value: 'part_time',
      text: t('Part Time'),
    },
    {
      id: 3,
      amount: 9,
      value: 'remote',
      text: t('Remote'),
    },
    {
      id: 4,
      amount: 19,
      value: 'internship',
      text: t('Internship'),
    },
    {
      id: 5,
      amount: 25,
      value: 'freelance',
      text: t('Freelance'),
    },
  ];

  const seniorityLevel = [
    {
      id: 1,
      amount: 7,
      value: 'student',
      text: t('Student'),
    },
    {
      id: 2,
      amount: 35,
      value: 'entry',
      text: t('Entry Level'),
    },
    {
      id: 3,
      amount: 27,
      value: 'mid',
      text: t('Mid Level'),
    },
    {
      id: 4,
      amount: 8,
      value: 'director',
      text: t('Director'),
    },
    {
      id: 5,
      amount: 4,
      value: 'vp',
      text: t('VP and above'),
    },
  ];

  const salaryRange = [
    {
      id: 1,
      amount: 65,
      value: '700_1200',
      text: '$700 - $1200',
    },
    {
      id: 2,
      amount: 345,
      value: '1200_3000',
      text: '$1200 - $3000',
    },
    {
      id: 3,
      amount: 23,
      value: '3000_5000',
      text: '$3000 - $5000',
    },
    {
      id: 4,
      amount: 12,
      value: '5000_above',
      text: t('$5000 and above'),
    },
  ];

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [checked2, setChecked2] = useState([0]);

  const handleToggle2 = (value: number) => () => {
    const currentIndex = checked2.indexOf(value);
    const newChecked = [...checked2];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked2(newChecked);
  };

  const [checked3, setChecked3] = useState([0]);

  const handleToggle3 = (value: number) => () => {
    const currentIndex = checked3.indexOf(value);
    const newChecked = [...checked3];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked3(newChecked);
  };

  return (
    <Stack divider={<Divider />}>
      <AccordionMinimal defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{t('Type of Employment')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            disablePadding
            component="div"
            sx={{
              px: 2,
              pb: 2,

              '& .MuiListItemButton-root': {
                borderRadius: (theme) => theme.shape.borderRadius + 'px',
                pl: 1.5,
                pr: 1,
              },
            }}
          >
            {typeOfEmployment.map((value) => {
              return (
                <ListItemButton
                  sx={{
                    py: 0,
                    px: 2,
                  }}
                  key={value.id}
                  onClick={handleToggle(value.id)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                    }}
                  >
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value.id) !== -1}
                      tabIndex={-1}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={value.text}
                    primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 500 }}
                  />
                  <Chip
                    label={value.amount}
                    size="small"
                    variant="outlined"
                    color="secondary"
                  />
                </ListItemButton>
              );
            })}
          </List>
        </AccordionDetails>
      </AccordionMinimal>
      <AccordionMinimal defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{t('Seniority Level')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            disablePadding
            component="div"
            sx={{
              px: 2,
              pb: 2,

              '& .MuiListItemButton-root': {
                borderRadius: (theme) => theme.shape.borderRadius + 'px',
                pl: 1.5,
                pr: 1,
              },
            }}
          >
            {seniorityLevel.map((value) => {
              return (
                <ListItemButton
                  sx={{
                    py: 0,
                    px: 2,
                  }}
                  key={value.id}
                  onClick={handleToggle2(value.id)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                    }}
                  >
                    <Checkbox
                      edge="start"
                      checked={checked2.indexOf(value.id) !== -1}
                      tabIndex={-1}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={value.text}
                    primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 500 }}
                  />
                  <Chip
                    label={value.amount}
                    size="small"
                    variant="outlined"
                    color="secondary"
                  />
                </ListItemButton>
              );
            })}
          </List>
        </AccordionDetails>
      </AccordionMinimal>
      <AccordionMinimal defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{t('Salary Range')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            disablePadding
            component="div"
            sx={{
              px: 2,
              pb: 2,

              '& .MuiListItemButton-root': {
                borderRadius: (theme) => theme.shape.borderRadius + 'px',
                pl: 1.5,
                pr: 1,
              },
            }}
          >
            {salaryRange.map((value) => {
              return (
                <ListItemButton
                  sx={{
                    py: 0,
                    px: 2,
                  }}
                  key={value.id}
                  onClick={handleToggle3(value.id)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                    }}
                  >
                    <Checkbox
                      edge="start"
                      checked={checked3.indexOf(value.id) !== -1}
                      tabIndex={-1}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={value.text}
                    primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 500 }}
                  />
                  <Chip
                    label={value.amount}
                    size="small"
                    variant="outlined"
                    color="secondary"
                  />
                </ListItemButton>
              );
            })}
          </List>
        </AccordionDetails>
      </AccordionMinimal>
      <Box />
    </Stack>
  );
};

export default Component;
