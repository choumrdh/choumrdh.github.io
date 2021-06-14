import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-1 mt-5 text-center container">
       {"Copyright © "}
      <a href="/" className="text-dark">
        Michelle Chou
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </footer>
  );
}

export default Footer;
