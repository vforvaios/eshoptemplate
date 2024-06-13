import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalNewsletter = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(
      window.sessionStorage.getItem('showNewsletterModalToSubscribe'),
    );
  }, []);

  const closeModal = () => {
    window.sessionStorage.removeItem('showNewsletterModalToSubscribe');
    setShowModal(false);
  };

  return (
    <Modal
      open={showModal}
      onClose={() => closeModal()}
      closeAfterTransition
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}>
      <Fade in={showModal}>
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column">
            <i className="icon-shopping-basket newsletterpopupicon" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2">
                GREAT NEWS!
              </Typography>
              <i
                className="icon-cancel-circled pointercursor"
                onClick={() => closeModal()}
              />
            </Box>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Coupon
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalNewsletter;
