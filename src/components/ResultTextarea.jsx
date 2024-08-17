import React from 'react';
import CopyBtn from './CopyBtn';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `50%`,

    borderRadius: 4,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    textAlign: 'center',
};
const ResultTextarea = ({ className, value }) => {
    return (
        <div>
            <Box sx={style}>
                <Typography className="text-center" id="modal-modal-title" variant="h6" component="h2">
                    {className ? className : null}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <textarea className="output" cols="30" rows="18" disabled value={value}></textarea>
                    <CopyBtn text={value} />
                </Typography>
            </Box>
        </div>
    );
};

export default ResultTextarea;
