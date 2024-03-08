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
import CampaignManager from "./CampaingManager";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

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
const WalletCardButton = styled(Button)(({ theme }) => ({
  width: "100%",
  textTransform: "none",
  padding: "0.5em",
}));

interface WalletCardProps {
  logo: string;
  name: string;
  description: string;
  onClick: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({
  logo,
  name,
  description,
  onClick,
}) => (
  <Grid item xs={16} sm={8} md={4}>
    <WalletCardButton onClick={onClick}>
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
    </WalletCardButton>
  </Grid>
);
function Wallets() {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [description, setDescription] = useState("");

  const [googleCredentialToken, setGoogleCredentialToken] = useState<
    string | undefined
  >(undefined);

  // Array of accounts
  // const [accounts, setAccounts] = useState([
  const accounts = [
    { logo: MetaLogo, name: "Meta", description: "Bui's Cupcake Shop" },
    // Add more accounts...
  ];

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    setAccountName("");
    setDescription("");
  };

  const handleSubmit = () => {
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
        break;
    }

    const correctDescription =
      description.length > 0 ? description : "My " + accountName + " Account";

    // Add the new account information to the accounts array
    const newAccount = {
      logo,
      name: accountName,
      description: correctDescription,
    };

    handleCloseModal();
  };

  const googleResponseMessage = (response: CredentialResponse) => {
    console.log(response);
    setGoogleCredentialToken(response.clientId);
  };
  const googleErrorMessage = () => {
    console.log("GOOGLE SIGN IN ERROR!!!!");
  };

  const handleNewGoogleAccountAttempt = () => {
    // import { GoogleLogin } from '@react-oauth/google';
  };

  const googleSignInButton = () => {
    if (!googleCredentialToken) {
      return (
        <GoogleLogin
          onSuccess={googleResponseMessage}
          onError={googleErrorMessage}
        />
      );
    }

    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        bgcolor="rgb(231 230 221)"
        borderRadius={"8px"}
        width="70%"
      >
        <Typography paddingY="10px">Account Connected ✓</Typography>
      </Box>
    );
  };

  return (
    <>
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Add New Account</DialogTitle>
        <DialogContent>
          <TextField
            select
            fullWidth
            margin="normal"
            label="Account Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          >
            <MenuItem value="Meta">Meta</MenuItem>
            <MenuItem value="TikTok">TikTok</MenuItem>
            <MenuItem value="Google">Google</MenuItem>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        {accountName === "Google" ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"center"}
            paddingY={"8px"}
          >
            {googleSignInButton()}
          </Box>
        ) : (
          <div></div>
        )}
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleSubmit}>Connect</Button>
        </DialogActions>
      </Dialog>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Typography variant="h3">Your Linked Accounts</Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddTwoToneIcon />}
          onClick={handleOpenModal}
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
            onClick={() => setSelectedWallet(account.name)}
          />
        ))}
        <Grid item xs={12} sm={6} md={3}>
          <Tooltip arrow title="Click to add a new account">
            <CardAddAction>
              <CardActionArea onClick={handleOpenModal}>
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
      {selectedWallet && <CampaignManager wallet={selectedWallet} />}
    </>
  );
}

export default Wallets;
