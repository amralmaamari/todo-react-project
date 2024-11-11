import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTost } from "../Contexts/SnackbarsContext";
import { useDialog } from "../Contexts/DeleteAndEditDialogContext";
import { useTodo } from "../Contexts/TodoContext";

export default function AlertDialog() {
  const { setOpenSnack, setSnackMessage } = useTost();
  const { dialogDeleteOpen, setdialogDeleteOpen, selectTask } = useDialog();
  const { dispatch } = useTodo();

  const handleClose = () => {
    setdialogDeleteOpen(false);
  };

  function handleDeleteTask() {
    dispatch({
      type: "deleted",
      payload: {
        id: selectTask.id,
      },
    });

    handleClose();
    setSnackMessage(" تم الحذف بنجاح ");
    setOpenSnack(true);
  }

  return (
    <>
      <Dialog
        style={{ direction: "rtl" }}
        open={dialogDeleteOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل انت متاكد من رغبتك في حذف المهمة ؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف في حال اختيار (الحذف)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>اغلاق</Button>
          <Button
            onClick={handleDeleteTask}
            autoFocus
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            نعم قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
