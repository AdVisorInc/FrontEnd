import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Divider, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ChangeEvent, useState } from 'react';

type Volume = 'mute' | 'low' | 'high' | 'music';

const Component = () => {
  const [volume, setVolume] = useState<Volume>('mute');

  const handleVolume = (event: ChangeEvent<{}>, newVolume: Volume | null) => {
    if (newVolume) {
      setVolume(newVolume);
    }
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
          orientation="vertical"
          value={volume}
          exclusive
          onChange={handleVolume}
          aria-label="volume control"
        >
          <ToggleButton
            value="mute"
            aria-label="mute"
          >
            <VolumeMuteIcon />
          </ToggleButton>
          <ToggleButton
            value="low"
            aria-label="low volume"
          >
            <VolumeDownIcon />
          </ToggleButton>
          <ToggleButton
            value="high"
            aria-label="high volume"
          >
            <VolumeUpIcon />
          </ToggleButton>
          <ToggleButton
            value="music"
            aria-label="music mode"
            disabled
          >
            <MusicNoteIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          orientation="vertical"
          color="primary"
          value={volume}
          exclusive
          onChange={handleVolume}
          aria-label="volume control"
        >
          <ToggleButton
            value="mute"
            aria-label="mute"
          >
            <VolumeMuteIcon />
          </ToggleButton>
          <ToggleButton
            value="low"
            aria-label="low volume"
          >
            <VolumeDownIcon />
          </ToggleButton>
          <ToggleButton
            value="high"
            aria-label="high volume"
          >
            <VolumeUpIcon />
          </ToggleButton>
          <ToggleButton
            value="music"
            aria-label="music mode"
            disabled
          >
            <MusicNoteIcon />
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
          orientation="vertical"
          value={volume}
          exclusive
          size="small"
          onChange={handleVolume}
          aria-label="volume control"
        >
          <ToggleButton
            value="mute"
            aria-label="mute"
          >
            <VolumeMuteIcon />
          </ToggleButton>
          <ToggleButton
            value="low"
            aria-label="low volume"
          >
            <VolumeDownIcon />
          </ToggleButton>
          <ToggleButton
            value="high"
            aria-label="high volume"
          >
            <VolumeUpIcon />
          </ToggleButton>
          <ToggleButton
            value="music"
            aria-label="music mode"
            disabled
          >
            <MusicNoteIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          orientation="vertical"
          color="primary"
          value={volume}
          size="small"
          exclusive
          onChange={handleVolume}
          aria-label="volume control"
        >
          <ToggleButton
            value="mute"
            aria-label="mute"
          >
            <VolumeMuteIcon />
          </ToggleButton>
          <ToggleButton
            value="low"
            aria-label="low volume"
          >
            <VolumeDownIcon />
          </ToggleButton>
          <ToggleButton
            value="high"
            aria-label="high volume"
          >
            <VolumeUpIcon />
          </ToggleButton>
          <ToggleButton
            value="music"
            aria-label="music mode"
            disabled
          >
            <MusicNoteIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default Component;
