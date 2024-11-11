import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTost } from "../Contexts/SnackbarsContext";

export default function CustomizedSnackbars() {
  const { openSnack, setOpenSnack, snackMessage } = useTost();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <div>
      <Snackbar open={openSnack} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant="filled" severity="success">
          {snackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
