import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";
import Icon from "../../img/IconOnly.png";

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
    { id: "service", name: "บริการ" },
    { id: "about", name: "เกี่ยวกับเรา" },
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
      <div className="hidden lg:block h-16">
        <div className="flex h-full">
          <div className="flex w-full justify-center items-center">
            <a href={`/#home`} className="flex items-center">
              <img src={Icon} alt="logo" className="h-12" />
            </a>
            <div className="grid grid-cols-6 h-full md:w-4/5 2xl:w-3/5 items-center">
              {sections.map((section) => (
                <>
                  <a
                    key={section.id}
                    href={`/#${section.id}`}
                    className="relative p-2 block group transition-all duration-200 ease-in-out overflow-hidden"
                    onClick={() => handleNavigation(section.id)}
                  >
                    {section.name}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-black transform origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></div>
                  </a>
                </>
              ))}
              <a
                href="/blog"
                className="relative p-2 block group transition-all duration-200 ease-in-out overflow-hidden"
                onClick={() => navigate("/blog")}
              >
                บล็อก
                <div className="absolute inset-x-0 bottom-0 h-1 bg-black transform origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></div>
              </a>
              <div className="flex justify-center">
                <div
                  class="line-it-button"
                  data-lang="en"
                  data-type="friend"
                  data-env="REAL"
                  data-lineId="@454coxni"
                  style={{ display: "none" }}
                ></div>
              </div>
              {/* <div className="border-2 border-[#255995] rounded-2xl mx-1 md:py-2 lg:py-1 text-[#255995] text-lg">
                เข้าสู่ระบบ
              </div>
              <div className="border border-[#255995] rounded-2xl mx-1 md:py-2 lg:py-1 bg-[#255995] text-white text-lg">
                สมัครเลย!
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="flex justify-between lg:hidden">
        <div className="flex items-center h-full my-auto ml-4">
          <a href={`/#home`}>
            <img src={Icon} alt="logo" className="h-10" />
          </a>
        </div>
        <div onClick={toggleMobileMenu} className="justify-end">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className={`lg:hidden ${isMobileMenuOpen ? "block " : "hidden"}`}>
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
        <a className="block border-2 p-2 border-[#255995] rounded-2xl mx-32 text-[#255995] text-lg">
          เข้าสู่ระบบ
        </a>
        <a className="block border p-2 border-[#255995] bg-[#255995] rounded-2xl mx-32 mt-4 mb-2 text-white text-lg">
          สมัครเลย!
        </a>
      </div>
      {/* ... */}
    </nav>
  );
};

export default Navibar;
