import React from 'react';
import { version } from '../../../../package.json';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version </b>
        <span>{version}</span>
      </div>
      <strong>
        <span>Copyright © 2019-2020 </span>
        <a href="http://atana.site" target="_blank" rel="noopener noreferrer">
          <span className="pms-text-favorites">AtanaDev</span>
        </a>
        <span>.</span>
      </strong>
      <span> All rights reserved.</span>
    </footer>
  );
};

export default Footer;
