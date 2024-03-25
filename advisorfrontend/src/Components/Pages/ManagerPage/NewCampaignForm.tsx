import React, { useState } from "react";
import { TextField, Button, CircularProgress, Box } from "@mui/material";

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
  const [loading, setLoading] = useState(false); // New state to track loading

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); // Start loading

    // Simulate an async action with setTimeout
    setTimeout(() => {
      const newCampaign = {
        id: generateUniqueId(),
        name,
        objective,
        budget,
        status,
      };
      onSubmit(newCampaign);

      // Reset form fields and stop loading after submission
      setName("");
      setObjective("");
      setBudget(0);
      setStatus("active");
      setLoading(false); // Stop loading
    }, 3000); // Wait for 3 seconds
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Campaign Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        disabled={loading}
      />
      <TextField
        label="Objective"
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
        fullWidth
        margin="normal"
        disabled={loading}
      />
      <TextField
        label="Budget"
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        fullWidth
        margin="normal"
        disabled={loading}
      />
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
        margin="normal"
        disabled={loading}
      />
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Create Campaign"}
      </Button>
      {loading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="rgba(255, 255, 255, 0.7)"
        >
          <CircularProgress />
        </Box>
      )}
    </form>
  );
};

// Helper function to generate a unique ID for a new campaign
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export default NewCampaignForm;
