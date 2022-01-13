import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useStore } from "../../services/store";

function Modal({ handleStatusChange, description }) {
  const { modalOpen, setModalOpen } = useStore();
  return (
    <div>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{description}</DialogTitle>
        <DialogActions>
          {handleStatusChange ? (
            <div>
              <Button onClick={() => setModalOpen(false)}>No</Button>
              <Button onClick={handleStatusChange} autoFocus>
                Yes
              </Button>
            </div>
          ) : (
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
