import { useEffect, useState } from "react";
import { AlertType } from "./alert.actions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiErrorCircle } from "react-icons/bi";
import { useAlert } from "./AlertContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AlertPopup() {
  // eslint-disable-next-line no-unused-vars
  const [state, _] = useAlert();

  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState(AlertType.NONE);
  const [message, setMessage] = useState("");
  const [iconColor, setIconColor] = useState("black");

  const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);

  useEffect(() => {
    const { message, type, iconColor } = state.alertShower;
    setAlertType(type);
    setMessage(message);
    setIconColor(iconColor);

    if (type !== AlertType.NONE) setOpen(true);
  }, [state.alertShower]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <BiErrorCircle
              size="2em"
              style={{ color: iconColor}}
            />
            {alertType.toUpperCase()}
          </Typography>
        </Box>
        <Box
          sx={{
            fontSize: "2rem",
          }}
        >
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {message}
          </Typography>
          <Button variant="secondary" onClick={() => handleClose()} style={{justifyContent:"flex-end"}}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AlertPopup;
