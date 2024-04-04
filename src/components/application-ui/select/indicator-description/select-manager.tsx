import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { FormControl, ListItemAvatar, ListItemText, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AvatarState } from 'src/components/base/styles/avatar';
import { MenuItemPrimaryAccent } from 'src/components/base/styles/menu-item';
import { membersList } from './data';

const SelectManager = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['Bob Smith']);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value;
    // @ts-ignore
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl
      size="small"
      fullWidth
    >
      <Typography
        variant="h6"
        sx={{ mb: 1 }}
        component="label"
        htmlFor="project-settings-select"
        fontWeight={500}
      >
        Manager
      </Typography>
      <Select
        value={selectedOptions}
        // @ts-ignore
        onChange={handleChange}
        inputProps={{
          name: 'project-settings',
          id: 'project-settings-select',
        }}
        IconSelectManager={UnfoldMoreRoundedIcon}
        MenuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenu-list': {
                px: 0,

                '& .MuiMenuItem-root': {
                  borderRadius: 0,
                  m: 0,
                  py: 1,
                },
              },
            },
          },
        }}
        renderValue={(selected) => selected.join(', ')}
      >
        {membersList.map((member) => (
          <MenuItemPrimaryAccent
            key={member.name}
            value={member.name}
          >
            <ListItemAvatar sx={{ minWidth: 38 }}>
              <AvatarState
                useShadow
                state="secondary"
                src={member.avatar}
                sx={{
                  width: 28,
                  height: 28,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                display: { xs: 'initial', sm: 'flex' },
                alignItems: 'center',
                gap: { xs: 0, sm: 1 },
              }}
              primary={member.name}
              secondary={member.detail}
              primaryTypographyProps={{
                variant: 'subtitle2',
                fontWeight: 500,
                color: 'text.primary',
              }}
            />
            {selectedOptions.includes(member.name) && <CheckRoundedIcon fontSize="small" />}
          </MenuItemPrimaryAccent>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectManager;
