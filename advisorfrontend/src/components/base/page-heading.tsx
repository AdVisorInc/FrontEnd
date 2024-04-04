import { Stack, SxProps, Theme, Typography, useMediaQuery } from '@mui/material';
import React, { ReactNode } from 'react';

interface PageHeadingProps {
  iconBox?: ReactNode;
  title: string;
  description?: string;
  topSection?: ReactNode;
  bottomSection?: ReactNode;
  actions?: ReactNode;
  background?: string;
  sx?: SxProps<Theme>;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  iconBox,
  title,
  description,
  topSection,
  bottomSection,
  actions,
  background,
  sx,
}) => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Stack sx={{ backgroundColor: background, ...sx }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          className="PageTitleContent"
          spacing={2}
          display="flex"
          alignItems="center"
          overflow="hidden"
        >
          {iconBox}
          <Stack
            textAlign={{ xs: 'center', md: 'left' }}
            spacing={0.3}
            overflow="hidden"
          >
            {topSection}
            <Typography
              variant="h3"
              noWrap
            >
              {title}
            </Typography>
            {description && (
              <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={400}
                noWrap={mdUp && true}
              >
                {description}
              </Typography>
            )}
          </Stack>
        </Stack>
        {actions}
      </Stack>
      {bottomSection}
    </Stack>
  );
};

export default PageHeading;
