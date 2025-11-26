import React, { useState } from 'react';
import { Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Certificate = (props) => {
  const ImgSertif = props.ImgSertif;
  const Title = props.Title;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Gambar Sertifikat */}
      <img
        src={ImgSertif}
        alt={Title}
        onClick={handleOpen}
        className="cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
      />

      {/* Modal Pop Up */}
      <Modal open={open} onClose={handleClose}>
        <div className="modal fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 p-5">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              color: "white"
            }}
          >
            <CloseIcon sx={{ fontSize: 50 }} />
          </IconButton>

          <img
            src={ImgSertif}
            alt={Title}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Certificate;
