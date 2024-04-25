import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, TextField } from '@mui/material';
import AvatarUploadLogo from '../upload/avatar/avatar-upload-logo';
import { useDispatch } from "../../../store";
import { checkOrganizationNameAvailability } from "../../../slices/organization";
import AvatarUploadLogoOrg from "../upload/avatar/avatar-upload-logo-org";



interface OrganizationDetailsProps {
  organizationData: any;
  setOrganizationData: (data: any) => void;
  validationErrors: {
    name: boolean;
    description: boolean;
  };
  selectedLogo: File | null;
  setSelectedLogo: (file: File | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}


const OrganizationDetails: React.FC<OrganizationDetailsProps> = ({ organizationData, setOrganizationData, validationErrors,selectedLogo, setSelectedLogo, loading, setLoading }) => {
  const { t } = useTranslation();
  const [nameAvailable, setNameAvailable] = useState(true);
  const [nameValidation, setNameValidation] = useState(true);
  const [descriptionValidation, setDescriptionValidation] = useState(true);


  const handleNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setOrganizationData({ ...organizationData, name: newName });

    if (newName.trim() !== '') {
      const isAvailable = await checkOrganizationNameAvailability(newName);
      setNameValidation(isAvailable);
    } else {
      setNameValidation(false);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    setOrganizationData({ ...organizationData, description: newDescription });
    setDescriptionValidation(newDescription.trim() !== '');
  };
  const handleLogoChange = (file: File | null) => {
    setOrganizationData({ ...organizationData, avatar: file });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AvatarUploadLogoOrg
          selectedLogo={organizationData.avatar}
          setSelectedLogo={handleLogoChange}
          loading={loading}
          setLoading={setLoading}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={t('Organization Name')}
          fullWidth
          value={organizationData.name}
          onChange={handleNameChange}
          error={validationErrors.name || !nameAvailable}
          helperText={
            validationErrors.name
              ? 'Please enter an organization name'
              : !nameAvailable
                ? 'Organization name is already taken'
                : ''
          }
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

