import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { AccordionPlus } from 'src/components/base/styles/accordion';

interface AccordionData {
  question: string;
  answer?: string;
  disabled?: boolean;
}

const accordionItems: AccordionData[] = [
  {
    question: 'What is the refund policy?',
    answer:
      "Our refund policy lasts for 30 days. If you're not satisfied with the product, you can return it within this period for a full refund. Ensure the product is in its original condition.",
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Shipping times vary based on your location. Generally, domestic shipping takes 2-5 business days, while international shipping can take 7-15 business days. Expedited options are available at checkout.',
  },
];

const Component = () => {
  const [expandedPanel, setExpandedPanel] = React.useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : false);
    };

  return (
    <>
      {accordionItems.map((item, index) => (
        <AccordionPlus
          square
          key={index}
          disabled={item.disabled}
          expanded={expandedPanel === `panel${index + 1}a-content`}
          onChange={handleAccordionChange(`panel${index + 1}a-content`)}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === `panel${index + 1}a-content` ? (
                <RemoveTwoToneIcon fontSize="small" />
              ) : (
                <AddTwoToneIcon fontSize="small" />
              )
            }
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography variant="h5">{item.question}</Typography>
          </AccordionSummary>
          {item.answer && (
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          )}
        </AccordionPlus>
      ))}
    </>
  );
};

export default Component;
