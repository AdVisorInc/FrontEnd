// CampaignManager.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import CampaignList from "./CampaignList";
import NewCampaignForm from "./NewCampaignForm";
import { Campaign } from "./CampaignTile";
interface CampaignManagerProps {
  wallet: string;
  initialCampaigns: Array<Campaign>;
}

const CampaignManager: React.FC<CampaignManagerProps> = ({
  wallet,
  initialCampaigns,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openNewCampaignDialog, setOpenNewCampaignDialog] = useState(false);
  const [campaigns, setCampaigns] = useState<Array<Campaign>>(initialCampaigns);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleOpenNewCampaignDialog = () => {
    setOpenNewCampaignDialog(true);
  };

  const handleCloseNewCampaignDialog = () => {
    setOpenNewCampaignDialog(false);
  };

  const handleCreateNewCampaign = (newCampaign: {
    id: string;
    name: string;
    objective: string;
    budget: number;
    status: string;
  }) => {
    setCampaigns([...campaigns, newCampaign]);
    handleCloseNewCampaignDialog();
  };

  const handleUpdateCampaign = (updatedCampaign: {
    id: string;
    name: string;
    objective: string;
    budget: number;
    status: string;
  }) => {
    const updatedCampaigns = campaigns.map((campaign) =>
      campaign.id === updatedCampaign.id ? updatedCampaign : campaign
    );
    setCampaigns(updatedCampaigns);
  };

  const currentCampaigns = campaigns.filter(
    (campaign) => campaign.status === "active"
  );
  const endedCampaigns = campaigns.filter(
    (campaign) => campaign.status === "ended"
  );

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Campaign Manager
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Selected Wallet: {wallet}
      </Typography>
      <Box mb={2}>
        <Button variant="contained" onClick={handleOpenNewCampaignDialog}>
          Launch New Campaign
        </Button>
      </Box>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Current Campaigns" />
        <Tab label="Ended Campaigns" />
      </Tabs>
      <Box mt={2}>
        {activeTab === 0 && (
          <CampaignList
            campaigns={currentCampaigns}
            onUpdateCampaign={handleUpdateCampaign}
          />
        )}
        {activeTab === 1 && (
          <CampaignList
            campaigns={endedCampaigns}
            onUpdateCampaign={handleUpdateCampaign}
          />
        )}
      </Box>
      <Dialog
        open={openNewCampaignDialog}
        onClose={handleCloseNewCampaignDialog}
      >
        <DialogTitle>New Campaign</DialogTitle>
        <DialogContent>
          <NewCampaignForm onSubmit={handleCreateNewCampaign} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewCampaignDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CampaignManager;
