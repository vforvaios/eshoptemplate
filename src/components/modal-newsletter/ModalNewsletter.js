import { Grid } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import NewsletterForm from 'components/footer/NewsletterForm';
import React, { useState, useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '94%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

const ModalNewsletter = () => {
  const [showModal, setShowModal] = useState(false);
  const [couponIsActive, setCouponIsActive] = useState({
    newsletterCouponIsActive: false,
    coupon: {},
  });

  const isNewsletterCoupon = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_API}/newsletter/couponIsActive`,
    );

    const newslettercoupon = await resp.json();

    setCouponIsActive({ ...newslettercoupon });

    if (
      newslettercoupon?.newsletterCouponIsActive &&
      (window.sessionStorage.getItem('showNewsletterModalToSubscribe') ===
        null ||
        window.sessionStorage.getItem('showNewsletterModalToSubscribe') ===
          'true')
    ) {
      window.sessionStorage.setItem('showNewsletterModalToSubscribe', true);
      setShowModal(true);
    }
  };

  useEffect(() => {
    isNewsletterCoupon();
  }, []);

  const closeModal = () => {
    window.sessionStorage.setItem('showNewsletterModalToSubscribe', false);
    setShowModal(false);
  };

  return (
    <Modal
      open={showModal && couponIsActive}
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
      <Fade in={showModal && couponIsActive}>
        <Box sx={style}>
          <Grid container alignItems="center">
            <Grid item sm={6}>
              <div className="p2">
                {couponIsActive?.newsletterCouponIsActive && (
                  <div className="modal-newsletter-text">
                    <div>
                      <h4>
                        Subscribe & Get {couponIsActive?.coupon?.discount}% OFF!{' '}
                      </h4>
                    </div>
                    <div>
                      <span>
                        Join our newsletter and get{' '}
                        <strong>{couponIsActive?.coupon?.discount}%</strong>{' '}
                        discount on your first order!
                      </span>
                    </div>
                  </div>
                )}
                <NewsletterForm />
                <i
                  className="icon-cancel-circled pointercursor"
                  onClick={() => closeModal()}
                />
              </div>
            </Grid>
            <Grid item sm={6} flexGrow={1}>
              <div
                style={{
                  minHeight: '300px',
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
