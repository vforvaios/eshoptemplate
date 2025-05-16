import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiesManagement = () => {
  const handleCookieAcceptOrDecline = () => {
    window.location.reload();
  };

  return (
    <CookieConsent
      enableDeclineButton
      buttonText="AGREE"
      declineButtonText="REJECT"
      buttonClasses="button next"
      declineButtonClasses="button"
      buttonWrapperClasses="cookies-buttons"
      contentClasses="cookie-content"
      expires={1000}
      onAccept={handleCookieAcceptOrDecline}
      onDecline={handleCookieAcceptOrDecline}>
      Tierra uses cookies for better experience.
    </CookieConsent>
  );
};

export default CookiesManagement;
