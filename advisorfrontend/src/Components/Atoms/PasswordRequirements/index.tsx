import { Box, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
const passwordRequirements = [
  { regex: /.{8,}/, message: "At least 8 characters" },
  { regex: /[A-Z]/, message: "At least one uppercase letter" },
  { regex: /[a-z]/, message: "At least one lowercase letter" },
  { regex: /[0-9]/, message: "At least one number" },
  { regex: /[@$!%*?&_]/, message: "At least one special character (@$!%*?&_)" },
];

interface PasswordRequirementProps {
  password: string;
}

const PasswordRequirements: React.FC<PasswordRequirementProps> = ({
  password,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 2 }}>
      {passwordRequirements.map((req, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          color={
            req.regex.test(password)
              ? theme.palette.success.main
              : theme.palette.error.main
          }
        >
          {req.regex.test(password) ? (
            <CheckCircleIcon fontSize="small" />
          ) : (
            <CancelIcon fontSize="small" />
          )}
          <Typography variant="body2" sx={{ ml: 1 }}>
            {req.message}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PasswordRequirements;
