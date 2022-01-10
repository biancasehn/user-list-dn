import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function Modal({ modalOpen, handleCloseModal, handleStatusChange }) {
  return (
    <div>
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to update the status?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseModal}>No</Button>
          <Button onClick={handleStatusChange} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
