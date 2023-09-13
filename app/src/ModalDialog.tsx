import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FunctionComponent } from "react";

interface ModalDialogProps {
    open: boolean;
    title: string;
    message: string;
    onClose: () => void;
    onYes: () => void;
}

export const ModalDialog: FunctionComponent<ModalDialogProps> = ({ open = false, title, message, onClose, onYes }) => {

    const handleClose = () => {
        open = false;
        onClose();
    };

    const handleYes = () => {
        onYes();
        open = false;
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleYes}>Yes</Button>
                <Button onClick={handleClose} autoFocus>
                    No
                </Button>
            </DialogActions>
        </Dialog>
    )
}