import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
const CopyBtn = ({ text }) => {
    const [copyState, setCopyState] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            console.log(text);
            setCopyState(true);
            setTimeout(() => setCopyState(false), 4000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (
        <Button
            variant="contained"
            color="error"
            className="copy-btn-scale"
            onClick={copyToClipboard}
            startIcon={copyState ? <DoneIcon /> : <ContentCopyIcon />}
        >
            {copyState ? 'Copied' : 'Copy'}
        </Button>
    );
};

export default CopyBtn;
