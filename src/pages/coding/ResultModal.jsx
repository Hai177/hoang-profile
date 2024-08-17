import React from 'react';

import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import Backdrop from '@mui/material/Backdrop';

import ResultTextarea from '../../components/ResultTextarea';

const TableGenerateResult = ({ className, value }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen} variant="contained">
                {className}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <ResultTextarea className={className} value={value} />
            </Modal>
        </div>
    );
};

export default TableGenerateResult;
