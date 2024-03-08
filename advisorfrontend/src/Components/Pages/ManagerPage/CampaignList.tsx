// CampaignList.tsx
import React from "react";
import { Box } from "@mui/material";
import Campaign from "./Campaign";

interface CampaignListProps {
  campaigns: {
    id: string;
    name: string;
    objective: string;
    budget: number;
    status: string;
  }[];
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
  return (
    <Box>
      {campaigns.map((campaign) => (
        <Campaign
          key={campaign.id}
          campaign={campaign}
          onUpdate={onUpdateCampaign}
        />
      ))}
    </Box>
  );
};

export default CampaignList;
