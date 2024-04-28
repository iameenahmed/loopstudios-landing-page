import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";

import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems = ["About", "Careers", "Events", "Products", "Support"];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 flex items-center justify-between p-6 md:px-20 lg:px-[10.5rem] ${isScrolled && "bg-black/80 py-6 backdrop-blur-xl"}`}
    >
      <div className="z-20 flex w-full items-center justify-between md:w-auto">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <button
              aria-label="close menu bar"
              onClick={() => setIsOpen(false)}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
          ) : (
            <button aria-label="open menu bar" onClick={() => setIsOpen(true)}>
              <img src={hamburgerIcon} alt="hamburger icon" />
            </button>
          )}
        </div>
      </div>
      <nav>
        {/* Mobile Navigation  */}
        {isOpen && (
          <div className="fixed inset-0 flex min-h-screen items-center bg-black px-6 md:hidden">
            <ul className="space-y-8 font-primary text-2xl uppercase tracking-widest text-white">
              {navItems.map((item, index) => (
                <li key={index} className="group relative">
                  <a href="#">{item}</a>
                  <span className="absolute -bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 transform bg-white transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Desktop Navigation */}
        <div
          className={`hidden text-white md:inline-block ${isScrolled ? "my-0" : "my-11"}`}
        >
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li key={index} className="group relative">
                <a href="#">{item}</a>
                <span className="absolute -bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 transform bg-white transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
