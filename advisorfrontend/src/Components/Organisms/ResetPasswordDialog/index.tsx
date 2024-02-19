// ResetPasswordDialog.tsx
import React, { FC, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { useAuthStore } from "../../../store/useAuthStore"; // Adjust import path

interface ResetPasswordDialogProps {
  open: boolean;
  onClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetPasswordDialog: FC<ResetPasswordDialogProps> = ({
  open,
  onClose,
  setOpen,
}) => {
  const [email, setEmail] = useState("");
  const resetPassword = useAuthStore((state) => state.resetPassword);

  const handleReset = async () => {
    await resetPassword(email);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Password Reset</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleReset}>Send</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResetPasswordDialog;
