import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

const Navibar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const sections = [
    { id: "about", name: "เกี่ยวกับเรา" },
    { id: "service", name: "บริการ" },
    { id: "contact", name: "ติดต่อเรา" },
  ];

  const handleNavigation = (id) => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    navigate(`/#${id}`); // Use react-router-dom navigate to handle navigation

    setTimeout(() => {
      const targetElement = document.getElementById(id);
  
      if (targetElement) {
        const offset = 70; // Adjust this value as needed
        const targetPosition = targetElement.offsetTop - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 0); // Use a small delay to ensure the DOM is updated
  
  };

  return (
    <nav className="w-full shadow-md fixed top-0 bg-white">
      <div className="hidden md:block h-12">
        <div className="flex justify-center h-full">
          <div className="grid grid-cols-4 h-full w-3/5 items-center">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`/#${section.id}`}
                className="p-2 block"
                onClick={() => handleNavigation(section.id)}
              >
                {section.name}
              </a>
            ))}
            <a
              href="/blog"
              className="p-2 block"
              onClick={() => navigate("/blog")}
            >
              บล็อก
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="flex justify-between md:hidden">
        <div className="flex items-center h-full my-auto ml-4"></div>
        <div onClick={toggleMobileMenu} className="justify-end">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {/* Add mobile menu items here  onClick={() => navigateTo('contact', '/#contact')}*/}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block shadow-md" : "hidden"
        }`}
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`/#${section.id}`}
            className="p-2 block"
            onClick={() => handleNavigation(section.id)}
          >
            {section.name}
          </a>
        ))}
        <a href="/blog" className="p-2 block" onClick={() => navigate("/blog")}>
          บล็อก
        </a>
      </div>
      {/* ... */}
    </nav>
  );
};

export default Navibar;
