// NewCampaignForm.tsx
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface NewCampaignFormProps {
  onSubmit: (newCampaign: {
    id: string;
    name: string;
    objective: string;
    budget: number;
    status: string;
  }) => void;
}

const NewCampaignForm: React.FC<NewCampaignFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [budget, setBudget] = useState(0);
  const [status, setStatus] = useState("active");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCampaign = {
      id: generateUniqueId(),
      name,
      objective,
      budget,
      status,
    };
    onSubmit(newCampaign);
    // Reset form fields after submission
    setName("");
    setObjective("");
    setBudget(0);
    setStatus("active");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Create Campaign
      </Button>
    </form>
  );
};

// Helper function to generate a unique ID for a new campaign
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export default NewCampaignForm;
