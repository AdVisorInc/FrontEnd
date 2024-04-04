import { Button, Card, CardContent, Container } from '@mui/material';
import { ButtonLight } from 'src/components/base/styles/button';
import { CardActionsLight, CardHeaderLight, DividerLight } from 'src/components/base/styles/card';
import DocumentsUploadList from './documents-upload-list-accent';

const Component = () => {
  return (
    <Card
      sx={{
        backgroundColor: 'neutral.900',
      }}
    >
      <CardHeaderLight
        title="Verification documents"
        subheader="Add documents as you see fit for the verification process"
      />
      <DividerLight />
      <CardContent sx={{ py: 3 }}>
        <DocumentsUploadList />
      </CardContent>
      <DividerLight />
      <CardActionsLight>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          maxWidth="sm"
        >
          <ButtonLight>Cancel</ButtonLight>
          <Button
            variant="contained"
            color="success"
          >
            Save
          </Button>
        </Container>
      </CardActionsLight>
    </Card>
  );
};

export default Component;
