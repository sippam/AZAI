import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

const Navibar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [shadow, setShadow] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const sections = [
    { id: "home", name: "หน้าหลัก" },
    { id: "about", name: "เกี่ยวกับเรา" },
    { id: "service", name: "บริการ" },
    { id: "contact", name: "ติดต่อเรา" },
  ];

  const handleNavigation = (id) => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
      setOpen(false);
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

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const isShadow = shadow ? "shadow-md" : "";

  return (
    <nav className={`w-full ${isShadow} fixed top-0 bg-white z-50`}>
      <div className="hidden md:block h-12">
        <div className="flex h-full">
          {/* <div className="flex items-center h-full my-auto ml-4">
            <img src={Icon} alt="logo" className="h-10" />
            <img src={Text} alt="logo" className="h-10" />
          </div> */}
          <div className="flex w-full justify-center">
            <div className="grid grid-cols-5 h-full md:w-4/5 2xl:w-3/5 items-center">
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
      </div>

      {/* Mobile menu button */}
      <div className="flex justify-between md:hidden">
        <div className="flex items-center h-full my-auto ml-4">
          {/* <img src={Logo} alt="logo" className="h-10" /> */}
        </div>
        <div onClick={toggleMobileMenu} className="justify-end">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
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
