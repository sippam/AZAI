import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

const Navibar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full shadow-md sticky top-0 bg-white">
      <div className="hidden lg:block h-12">
        <div className="flex justify-center h-full">
          <div className="grid grid-cols-4 h-full items-center lg:gap-36">
            <a href="#" className="p-2">
              เกี่ยวกับเรา
            </a>
            <a href="#" className="p-2">
              บริการ
            </a>
            <a href="#" className="p-2">
              ติดต่อเรา
            </a>
            <a href="#" className="p-2">
              บล็อก
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="flex justify-between lg:hidden">
        <div className="flex items-center h-full my-auto ml-4"></div>
        <div onClick={toggleMobileMenu} className="justify-end">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {/* Add mobile menu items here */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block shadow-md" : "hidden"
        }`}
      >
        <a href="#" className="p-2 block">
          เกี่ยวกับเรา
        </a>
        <a href="#" className="p-2 block">
          บริการ
        </a>
        <a href="#" className="p-2 block">
          ติดต่อเรา
        </a>
        <a href="#" className="p-2 pb-4 block">
          บล็อก
        </a>
      </div>
      {/* ... */}
    </nav>
  );
};

export default Navibar;
