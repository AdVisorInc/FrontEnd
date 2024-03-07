import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import GoogleLogo from "../../../assets/google.png";
import MetaLogo from "../../../assets/meta.png";
import TiktokLogo from "../../../assets/tiktok.png";
import React, { useState } from "react";

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === "dark"
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(["all"])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

interface WalletCardProps {
  logo: string;
  name: string;
  description: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ logo, name, description }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ px: 1 }}>
      <CardContent>
        <AvatarWrapper>
          <img alt={name} src={logo} />
        </AvatarWrapper>
        <Typography variant="h5" noWrap>
          {name}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

function Wallets() {
  const [modalOpen, setModalOpen] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [description, setDescription] = useState("");

  // Array of accounts
  const [accounts, setAccounts] = useState([
    { logo: MetaLogo, name: "Meta", description: "Bui's Cupcake Shop" },
  ]);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    // Reset form fields when closing the modal
    setAccountName("");
    setDescription("");
  };

  const handleSubmit = () => {
    // Here, you can handle the submission of the new account,
    // For example, adding the new account information to the `accounts` array.
    // Determine the logo based on the accountName
    let logo = "";
    switch (accountName) {
      case "Meta":
        logo = MetaLogo;
        break;
      case "TikTok":
        logo = TiktokLogo;
        break;
      case "Google":
        logo = GoogleLogo;
        break;
      default:
        // Handle unknown account name or set a default logo
        break;
    }

    // Add the new account information to the accounts array
    const newAccount = { logo, name: accountName, description };
    setAccounts([...accounts, newAccount]);

    handleCloseModal();
  };

  return (
    <>
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Add New Account</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel id="account-name-label">Account Name</InputLabel>
            <Select
              labelId="account-name-label"
              id="account-name-select"
              value={accountName}
              label="Account Name"
              onChange={(e) => setAccountName(e.target.value)}
            >
              <MenuItem value="Meta">Meta</MenuItem>
              <MenuItem value="TikTok">TikTok</MenuItem>
              <MenuItem value="Google">Google</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Your Linked Accounts</Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Link new account
        </Button>
      </Box>
      <Grid container spacing={3}>
        {accounts.map((account, index) => (
          <WalletCard
            key={index}
            logo={account.logo}
            name={account.name}
            description={account.description}
          />
        ))}
        {/* Add new account card */}
        <Grid item xs={12} sm={6} md={3}>
          <Tooltip arrow title="Click to add a new account">
            <CardAddAction onClick={handleOpenModal}>
              <CardActionArea sx={{ px: 1 }}>
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
