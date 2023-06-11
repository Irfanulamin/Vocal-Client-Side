import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <div>
          <img src="/logo.png" className="h-24 w-full  object-cover" />
        </div>
        <div>
          <p className="text-3xl font-semibold">Vocal Studio</p>
        </div>
      </div>
      <div>
        <span className="footer-title">Copyrights</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Contact Information</span>
        <a className="link link-hover">vocal@studi.com</a>
        <a className="link link-hover">+880 xxx xxxx</a>
      </div>
      <div>
        <span className="footer-title">Address</span>
        <a className="link link-hover">GK Road , London, United Kingdom</a>
      </div>
    </footer>
  );
};

export default Footer;
