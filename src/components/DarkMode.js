/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const DarkMode = ({ i18n }) => {
  // get then
  const [on, setOn] = useState();
  // return [on, setOn];
  function toggle() {
    setOn(!on);
    localStorage.setItem('etc-website-darkmode', !on ? 'true' : 'false');
  }
  useEffect(() => {
    if (localStorage.getItem('etc-website-darkmode') === 'true') {
      setOn(true);
    }
  }, []);

  return (
    <>
      <Helmet>
        <body className={`${on ? 'theme-dark' : 'theme-light'} ${i18n.bodyClass || ''}`} />
      </Helmet>
      <div className="dark-mode" onClick={toggle}>
        <i className={`fas fa-${on ? 'moon' : 'sun'}`} />
      </div>
    </>
  );
};

export default DarkMode;
