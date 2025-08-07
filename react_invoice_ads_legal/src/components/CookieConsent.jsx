import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [consent, setConsent] = useState(localStorage.getItem('cookie-consent'));

  useEffect(() => {
    if (!consent) setConsent(false);
  }, [consent]);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setConsent(true);
  };

  if (consent === 'true') return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', background: '#eee', padding: '1rem', textAlign: 'center' }}>
      Diese Website verwendet Cookies für Google AdSense. <button onClick={acceptCookies}>Zustimmen</button>
    </div>
  );
};

export default CookieConsent;