import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {  useEffect, useState } from "react";
import {useTodo} from "../Contexts/TodoContext";
import { useTost } from "../Contexts/SnackbarsContext";
import { useDialog } from "../Contexts/DeleteAndEditDialogContext";

export default function FormDialog() {
  const { setOpenSnack, setSnackMessage } = useTost();
  const { dispatch } = useTodo(); // Use tasks and dispatch from context
  const { dialogEditOpen, setdialogEditOpen, selectTask } = useDialog();
  const [upgradeTask, setUpgradeTask] = useState({
    title: "",
    paragraph: "",
  });

  useEffect(() => {
    if (selectTask) {
      setUpgradeTask({
        title: selectTask.title || "fd",
        paragraph: selectTask.paragraph || "fd",
      });
    }
  }, [selectTask]); // Only re-run when Task changes

  const handleClose = () => {
    setdialogEditOpen(false);
  };
  function handleEdit() {
    // TaskID should be passed as a parameter

    dispatch({
      type: "update",
      payload: {
        id: selectTask.id,
        title: upgradeTask.title,
        paragraph: upgradeTask.paragraph,
      },
    });

    handleClose();
    setSnackMessage(" تم التعديل بنجاح ");
    setOpenSnack(true);
  }

  return (
    <>
      <Dialog
        style={{ direction: "rtl" }}
        open={dialogEditOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();

            handleClose();
          },
        }}
      >
        <DialogTitle>تعديل المهمة</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            label="العنوان"
            variant="filled"
            style={{ flex: "1", direction: "rtl" }}
            margin="dense"
            id="name"
            name="title"
            type="title"
            value={upgradeTask.title}
            fullWidth
            onChange={(e) =>
              setUpgradeTask({ ...upgradeTask, title: e.target.value })
            }
          />
          <TextField
            autoFocus
            label="التفاصيل"
            variant="filled"
            style={{ flex: "1", direction: "rtl" }}
            margin="dense"
            id="paragraph"
            name="paragraph"
            type="text"
            value={upgradeTask.paragraph}
            fullWidth
            onChange={(e) =>
              setUpgradeTask({ ...upgradeTask, paragraph: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>الغاء</Button>
          <Button type="submit" onClick={handleEdit}>
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
