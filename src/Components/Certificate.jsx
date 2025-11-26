import React, { useState } from 'react';
import { Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Certificate = ({ Img, Title }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="">
        <img
          src={Img}
          alt={Title}
          onClick={handleOpen}
          className="cursor-pointer rounded-lg w-full h-60 object-cover shadow-md hover:scale-105 transition duration-300"
        />
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              color: 'white'
            }}
          >
            <CloseIcon sx={{ fontSize: 52 }} />
          </IconButton>

          <img
            src={Img}
            alt={Title}
            className="max-w-[95%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Certificate;
