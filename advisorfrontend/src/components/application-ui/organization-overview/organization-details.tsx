// organization-details.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, TextField } from '@mui/material';
import AvatarUploadLogo from '../upload/avatar/avatar-upload-logo';

interface OrganizationDetailsProps {
  organizationData: any;
  setOrganizationData: (data: any) => void;
  validationErrors: {
    name: boolean;
    description: boolean;
  };
}

const OrganizationDetails: React.FC<OrganizationDetailsProps> = ({ organizationData, setOrganizationData, validationErrors }) => {
  const { t } = useTranslation();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationData({ ...organizationData, name: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationData({ ...organizationData, description: event.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AvatarUploadLogo />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={t('Organization Name')}
          fullWidth
          value={organizationData.name}
          onChange={handleNameChange}
          error={validationErrors.name}
          helperText={validationErrors.name && 'Please enter an organization name'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={t('Organization Description')}
          fullWidth
          multiline
          rows={3}
          value={organizationData.description}
          onChange={handleDescriptionChange}
          error={validationErrors.description}
          helperText={validationErrors.description && 'Please enter an organization description'}
        />
      </Grid>
    </Grid>
  );
};

export default OrganizationDetails;
