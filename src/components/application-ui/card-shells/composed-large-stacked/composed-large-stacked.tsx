import { Box, Card, CardContent, CardHeader, Divider, styled } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const Component = () => {
  return (
    <Card>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          minHeight: '100%',
          background: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%) !important',
        }}
      >
        <BoxComposedBg
          sx={{
            opacity: 0.6,
            background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.4,
            backgroundImage: 'url("/placeholders/covers/4.jpg")',
          }}
        />
        <Box
          position="relative"
          zIndex={6}
          flex={1}
        >
          <CardHeader
            sx={{
              opacity: 0.8,
            }}
            title={
              <PlaceholderBox
                dark
                disableHover
                height={128}
              />
            }
          />
        </Box>
      </Box>
      <Divider />
      <CardContent>
        <PlaceholderBox height={256} />
      </CardContent>
    </Card>
  );
};

export default Component;
