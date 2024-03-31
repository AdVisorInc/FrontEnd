import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { neutral } from 'src/theme/colors';

interface Tenant {
  id: number;
  name: string;
  logo: string;
  description: string;
}

interface Props {
  tenants: Tenant[];
  isHovered: boolean;
  sidebarCollapsed: boolean;
  currentTenant: Tenant;
  onSwitch: (tenant: Tenant) => void;
}

const TenantSwitcher: React.FC<Props> = ({
  tenants,
  sidebarCollapsed,
  isHovered,
  currentTenant,
  onSwitch,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTenantSelect = (tenant: Tenant) => {
    onSwitch(tenant);
    handleClose();
  };

  const tenantDescription = (
    <Box
      ml={1}
      overflow="hidden"
    >
      <Typography
        variant="subtitle2"
        fontWeight={600}
        lineHeight={1.2}
        sx={{
          pb: 0.2,
          color: (theme) => theme.palette.common.white,
        }}
      >
        {currentTenant.name}
      </Typography>
      <Typography
        variant="body1"
        noWrap
        lineHeight={1.2}
        sx={{
          color: (theme) => alpha(theme.palette.common.white, 0.6),
        }}
      >
        {currentTenant.description}
      </Typography>
    </Box>
  );

  return (
    <Box
      px={2}
      py={1.5}
    >
      <Badge
        color="success"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          display: 'flex',
          '.MuiBadge-badge': {
            animation: 'pulse 1s infinite',
            transition: (theme) => theme.transitions.create(['all']),
          },
        }}
        variant="dot"
      >
        <Button
          color="primary"
          fullWidth
          endIcon={
            mdUp && sidebarCollapsed ? (
              isHovered && <KeyboardArrowDownTwoToneIcon />
            ) : (
              <KeyboardArrowDownTwoToneIcon />
            )
          }
          onClick={handleClick}
          sx={{
            background: alpha(neutral[800], 0.1),
            color: neutral[400],
            textAlign: 'left',
            minWidth: 40,
            px: 1.2,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: alpha(neutral[600], 0.2),
            '&:hover': {
              color: neutral[100],
              background: alpha(neutral[700], 0.12),
              borderColor: alpha(neutral[600], 0.3),
            },
          }}
        >
          <Avatar
            variant="rounded"
            src={currentTenant.logo}
            alt={currentTenant.name}
          />
          {mdUp && sidebarCollapsed ? isHovered && tenantDescription : tenantDescription}
        </Button>
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: {
              width: 380,
              '.MuiList-root': {
                p: 0,
              },
            },
          },
        }}
      >
        <Box
          p={2}
          sx={{
            backgroundColor: 'background.default',
          }}
        >
          <Typography variant="h6">Select tenant</Typography>
        </Box>
        <Stack
          p={1}
          divider={<Divider />}
        >
          {tenants.map((tenant) => (
            <MenuItem
              selected={currentTenant.id === tenant.id}
              sx={{
                pl: 1,
                borderRadius: (theme) => theme.shape.borderRadius + 'px',
              }}
              key={tenant.id}
              onClick={() => handleTenantSelect(tenant)}
            >
              <ListItemIcon sx={{ mr: 1 }}>
                <Avatar
                  variant="rounded"
                  src={tenant.logo}
                  alt={tenant.name}
                />
              </ListItemIcon>

              <ListItemText
                primary={tenant.name}
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
                secondary={tenant.description}
                secondaryTypographyProps={{
                  noWrap: true,
                }}
              />
              {currentTenant.id === tenant.id && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                  minWidth={38}
                >
                  <CheckTwoToneIcon color="primary" />
                </Box>
              )}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </Box>
  );
};

export default TenantSwitcher;
