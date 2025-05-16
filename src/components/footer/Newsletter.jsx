import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import NewsletterForm from '@/components/footer/NewsletterForm';
import { setNewsletterCoupon } from '@/models/actions/userActions';
import { newsletterCoupon } from '@/models/selectors/userSelector';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const Newsletter = () => {
  const dispatch = useDispatch();

  const myNewsletterCoupon = useSelector(newsletterCoupon);

  return (
    <div className="footer-newsletter">
      <Modal
        open={Object.keys(myNewsletterCoupon || {}).length > 0}
        onClose={() => dispatch(setNewsletterCoupon({}))}
        closeAfterTransition
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={Object.keys(myNewsletterCoupon || {}).length > 0}>
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
                  onClick={() => dispatch(setNewsletterCoupon({}))}
                />
              </Box>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                You have just been awarded a
                <strong> {myNewsletterCoupon?.discount}% </strong>
                discount for your next purchase! Just add items in your cart and
                add <strong>{myNewsletterCoupon?.code} </strong> as your coupon
                code.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <NewsletterForm />
    </div>
  );
};

export default Newsletter;
