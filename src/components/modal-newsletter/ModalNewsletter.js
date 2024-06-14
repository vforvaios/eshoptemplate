import { Grid } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { newsletterCoupon } from 'models/selectors/userSelector';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

const ModalNewsletter = () => {
  const [showModal, setShowModal] = useState(false);
  const myNewsletterCoupon = useSelector(newsletterCoupon);

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
      open={showModal && Object.keys(myNewsletterCoupon)?.length > 0}
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
      <Fade in={showModal && Object.keys(myNewsletterCoupon)?.length > 0}>
        <Box sx={style}>
          <Grid container alignItems="center">
            <Grid item sm={6}>
              <div>
                <Typography id="transition-modal-description">
                  Coupon
                </Typography>
                <i
                  className="icon-cancel-circled pointercursor"
                  onClick={() => setShowModal(false)}
                />
              </div>
            </Grid>
            <Grid item sm={6}>
              <div
                style={{
                  minHeight: '200px',
                  backgroundImage: `url(
                    https://api.tierrapurses.com/images/IMG_0541.jpg
                  )`,
                  backgroundSize: 'cover',
                }}></div>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalNewsletter;
