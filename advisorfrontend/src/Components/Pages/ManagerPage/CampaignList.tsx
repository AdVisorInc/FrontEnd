// CampaignList.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import CampaignTile, { Campaign } from "./CampaignTile";

interface CampaignListProps {
  campaigns: Campaign[];
  onUpdateCampaign: (updatedCampaign: {
    id: string;
    name: string;
    objective: string;
    budget: number;
    status: string;
  }) => void;
}

const CampaignList: React.FC<CampaignListProps> = ({
  campaigns,
  onUpdateCampaign,
}) => {
  const populatedCampaignsList = () => {
    return campaigns.map((campaign) => (
      <CampaignTile
        key={campaign.id}
        campaign={campaign}
        onUpdate={onUpdateCampaign}
      />
    ));
  };

  const emptyCampaignList = () => {
    return (
      <Typography variant="h6" gutterBottom>
        Once you start a campaign it will appear here.
      </Typography>
    );
  };

  return (
    <Box>
      {campaigns.length > 0 ? populatedCampaignsList() : emptyCampaignList()}
    </Box>
  );
};

export default CampaignList;
