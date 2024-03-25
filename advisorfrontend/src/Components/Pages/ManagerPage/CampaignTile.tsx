// Campaign.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

interface CampaignProps {
  campaign: Campaign;
  onUpdate: (updatedCampaign: CampaignProps["campaign"]) => void;
}

export interface Campaign {
  id: string;
  name: string;
  objective: string;
  budget: number;
  status: string;
}

const CampaignTile: React.FC<CampaignProps> = ({ campaign, onUpdate }) => {
  const [name, setName] = useState(campaign.name);
  const [objective, setObjective] = useState(campaign.objective);
  const [budget, setBudget] = useState(campaign.budget);
  const [status, setStatus] = useState(campaign.status);

  const handleUpdate = () => {
    const updatedCampaign = {
      ...campaign,
      name,
      objective,
      budget,
      status,
    };
    onUpdate(updatedCampaign);
  };

  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>
        {campaign.name}
      </Typography>
      <Box mb={2}>
        <TextField
          label="Campaign Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Objective"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="paused">Paused</MenuItem>
            <MenuItem value="ended">Ended</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={handleUpdate}>
        Update Campaign
      </Button>
    </Box>
  );
};

export default CampaignTile;
