import { MouseEvent, useState } from "react";
import {
  Button,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  Typography,
  styled,
} from "@mui/material";
import ViewWeekTwoToneIcon from "@mui/icons-material/ViewWeekTwoTone";
import TableRowsTwoToneIcon from "@mui/icons-material/TableRowsTwoTone";
import WatchListColumn from "./WatchListColumn";
import WatchListRow from "./WatchListRow";
import { UserProfileProps } from "../../../Services";

const EmptyResultsWrapper = styled("img")(
  ({ theme }) => `
      max-width: 100%;
      width: ${theme.spacing(66)};
      height: ${theme.spacing(34)};
`
);

const WatchList: React.FC<UserProfileProps> = ({ userData }) => {
  const [tabs, setTab] = useState<string | null>("watch_list_columns");

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      >
        <Typography variant="h3">Click Through Rate (CTR)</Typography>
        <ToggleButtonGroup
          value={tabs}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton disableRipple value="watch_list_columns">
            <ViewWeekTwoToneIcon />
          </ToggleButton>
          <ToggleButton disableRipple value="watch_list_rows">
            <TableRowsTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {tabs === "watch_list_columns" && <WatchListColumn userData={userData} />}

      {tabs === "watch_list_rows" && <WatchListRow userData={userData} />}

      {!tabs && (
        <Card
          sx={{
            textAlign: "center",
            p: 3,
          }}
        >
          <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

          <Typography
            align="center"
            variant="h2"
            fontWeight="normal"
            color="text.secondary"
            sx={{
              mt: 3,
            }}
            gutterBottom
          >
            Click something, anything!
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
            }}
          >
            Maybe, a button?
          </Button>
        </Card>
      )}
    </>
  );
};

export default WatchList;
