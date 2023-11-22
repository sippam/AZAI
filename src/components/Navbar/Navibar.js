import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navibar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateTo = (targetId, path) => {
    setOpen(!isOpen);
    setMobileMenuOpen(!isMobileMenuOpen);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (path) {
      navigate(path);
    }
  };

  const handleSectionClick = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      // If already on the homepage, just scroll to the section
      if (location.pathname === "/") {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        // If not on the homepage, store the scroll target in localStorage
        localStorage.setItem("scrollTarget", sectionId);
        // Then navigate to the homepage
        navigate("/");
      }
    } else {
      // If sectionId is not valid, navigate to the homepage and scroll to the about section
      setTimeout(() => {
        navigate("/");
      }, 300);
    }
  };

  useEffect(() => {
    // Check for scrollTarget in location state and scroll to it
    const scrollTarget = location.state?.scrollTarget;
    if (scrollTarget) {
      navigateTo(scrollTarget);
    }
  }, [location.state]);

  const sections = [
    { id: "about", name: "เกี่ยวกับเรา" },
    { id: "service", name: "บริการ" },
    { id: "contact", name: "ติดต่อเรา" },
  ];

  return (
    <nav className="w-full shadow-md fixed top-0 bg-white">
      <div className="hidden md:block h-12">
        <div className="flex justify-center h-full">
          <div className="grid grid-cols-4 h-full w-3/5 items-center">
            {sections.map((section) => (
              <Link
                key={section.id}
                className="p-2 block"
                onClick={() => handleSectionClick(section.id)}
              >
                {section.name}
              </Link>
            ))}
            <Link to="/blog" className="p-2 block">
              บล็อก
            </Link>
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
          <Link
            key={section.id}
            className="p-2 block"
            onClick={() => handleSectionClick(section.id)}
          >
            {section.name}
          </Link>
        ))}
        <Link to="/blog" className="p-2 pb-4 block">
          บล็อก
        </Link>
      </div>
      {/* ... */}
    </nav>
  );
};

export default Navibar;
