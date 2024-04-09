import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function loadScript(src: string, position: HTMLElement | null, id: string) {
  return new Promise((resolve, reject) => {
    if (!position) {
      reject(new Error('Invalid position element'));
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    position.appendChild(script);
  });
}

interface GoogleMapsDropdownProps {
  value: PlaceType | null;
  onChange: (value: PlaceType | null) => void;
}

interface MainTextMatchedSubstrings {
  offset: number;
  length: number;
}

interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}

export interface PlaceType {
  description: string;
  structured_formatting: StructuredFormatting;
}

export default function GoogleMapsDropdown({ value, onChange }: GoogleMapsDropdownProps) {
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<readonly PlaceType[]>([]);
  const autocompleteService = React.useRef<google.maps.places.AutocompleteService | null>(null);

  const fetch = React.useMemo(
    () =>
      debounce(
        async (request: { input: string }, callback: (results?: readonly PlaceType[]) => void) => {
          if (autocompleteService.current) {
            console.log('Fetching place predictions...');
            const response = await autocompleteService.current.getPlacePredictions(request);
            console.log('Place predictions response:', response);
            callback(response.predictions);
          }
        },
        400,
      ),
    [],
  );

  React.useEffect(() => {
    const initializeAutocomplete = async () => {
      console.log('Initializing Google Maps Autocomplete...');

      if (!autocompleteService.current) {
        try {
          console.log('Loading Google Maps script...');
          await loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
            document.querySelector('head'),
            'google-maps',
          );
          console.log('Google Maps script loaded successfully');

          autocompleteService.current = new google.maps.places.AutocompleteService();
          console.log('AutocompleteService initialized');
        } catch (error) {
          console.error('Error loading Google Maps script:', error);
        }
      }

      if (autocompleteService.current) {
        console.log('Fetching place predictions...');
        await fetch({ input: inputValue }, (results) => {
          console.log('Place predictions fetched:', results);
          let newOptions: readonly PlaceType[] = [];

          if (value) {
            newOptions = [value];
          }

          if (results) {
            newOptions = [...newOptions, ...results];
          }

          setOptions(newOptions);
        });
      }
    };

    initializeAutocomplete();
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      id="google-map-demo"
      sx={{ width: 300 }}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText="No locations"
      onChange={(event: any, newValue: PlaceType | null) => {
        onChange(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Add a location" fullWidth />}
      renderOption={(props, option) => {
        const matches = option.structured_formatting.main_text_matched_substrings || [];

        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [match.offset, match.offset + match.length]),
        );

        return (
          <li {...props}>
            <Grid container alignItems="center">
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationOnIcon sx={{ color: 'text.secondary' }} />
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                {parts.map((part, index) => (
                  <Box key={index} component="span" sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}>
                    {part.text}
                  </Box>
                ))}
                <Typography variant="body2" color="text.secondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}
