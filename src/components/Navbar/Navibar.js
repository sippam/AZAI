import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

const Navibar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToComponent = (targetId) => {
    setOpen(!isOpen)
    setMobileMenuOpen(!isMobileMenuOpen)
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="w-full shadow-md sticky top-0 bg-white">
      <div className="hidden lg:block h-12">
        <div className="flex justify-center h-full">
          <div className="grid grid-cols-4 h-full w-3/5 items-center">
            {" "}
            {/* lg:gap-36 */}
            <a
              className="p-2"
              onClick={() => scrollToComponent("about")}
            >
              เกี่ยวกับเรา
            </a>
            <a className="p-2" onClick={() => scrollToComponent("service")}>
              บริการ
            </a>
            <a
              className="p-2"
              onClick={() => scrollToComponent("contact")}
            >
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
        <a className="p-2 block" onClick={() => scrollToComponent("about")}>
          เกี่ยวกับเรา
        </a>
        <a className="p-2 block" onClick={() => scrollToComponent("service")}>
          บริการ
        </a>
        <a className="p-2 block" onClick={() => scrollToComponent("contact")}>
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
