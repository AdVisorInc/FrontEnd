import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { Divider, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ChangeEvent, useState } from 'react';

type Format = 'bold' | 'italic' | 'underlined' | 'color';

const Component = () => {
  const [formats, setFormats] = useState<Format[]>(['bold', 'italic']);

  const handleFormat = (event: ChangeEvent<{}>, newFormats: Format[]) => {
    setFormats(newFormats);
  };

  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
          >
            <FormatBoldIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
          >
            <FormatItalicIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="underlined"
            aria-label="underlined"
          >
            <FormatUnderlinedIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="color"
            aria-label="color"
            disabled
          >
            <FormatColorFillIcon fontSize="small" />
            <ArrowDropDownIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
          >
            <FormatBoldIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
          >
            <FormatItalicIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="underlined"
            aria-label="underlined"
          >
            <FormatUnderlinedIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="color"
            aria-label="color"
            disabled
          >
            <FormatColorFillIcon fontSize="small" />
            <ArrowDropDownIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
          >
            <FormatBoldIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
          >
            <FormatItalicIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="underlined"
            aria-label="underlined"
          >
            <FormatUnderlinedIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="color"
            aria-label="color"
            disabled
          >
            <FormatColorFillIcon fontSize="small" />
            <ArrowDropDownIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
          >
            <FormatBoldIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
          >
            <FormatItalicIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="underlined"
            aria-label="underlined"
          >
            <FormatUnderlinedIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton
            value="color"
            aria-label="color"
            disabled
          >
            <FormatColorFillIcon fontSize="small" />
            <ArrowDropDownIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default Component;
