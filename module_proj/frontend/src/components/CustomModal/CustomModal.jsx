import React from 'react';
import ReactDOM from "react-dom";
import { Box, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    borderRadius: '4px',
    boxShadow: 24,
    p: 1,
};

const CustomModal = ({ isOpen, onClose, children }) => {
    return ReactDOM.createPortal(
        <>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </>, document.body
    );
};

export default CustomModal;