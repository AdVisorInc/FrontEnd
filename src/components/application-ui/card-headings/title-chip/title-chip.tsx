import { Card, CardContent, CardHeader, Chip, Divider, Typography } from '@mui/material';
import FooterDropdown from 'src/components/application-ui/dropdowns/footer/footer-dropdown';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const Component = () => {
  return (
    <Card>
      <CardHeader
        disableTypography
        title={
          <>
            <Typography
              variant="h6"
              component="div"
            >
              Support agents
            </Typography>
          </>
        }
        avatar={
          <Chip
            color="success"
            label={
              <>
                <InlineBadge>
                  <PulseBadge
                    variant="dot"
                    color="success"
                    sx={{
                      mr: 1,
                    }}
                  />
                  Online
                </InlineBadge>
              </>
            }
          />
        }
        action={<FooterDropdown />}
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={192} />
      </CardContent>
    </Card>
  );
};

export default Component;
