import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
              src="/images/logo-image.png"
              alt="hero image"
              className="text-2xl md:text-5xl text-white font-semibold"
              width={150}
              height={150}
            />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;