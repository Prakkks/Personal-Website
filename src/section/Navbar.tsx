import { useEffect, useState } from "react";
import { navLinks } from "../Constants";
import { useTheme } from "../assets/themeprovider";


const NavItems = () => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
   const { isDark, setIsDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const logoname = "Prakriti";

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Update root html class
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");

    }
  }, [isDark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 dark:text-white text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-4">
          <a href="/" className="dark:text-neutral-400  text-neutral-500 font-bold text-xl dark:hover:text-white hover:text-black transition-colors">
            {logoname}
          </a>

          <div className="flex flex-row gap-5 items-center">
            {/* Mobile toggle */}
            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white dark:hover:text-black focus:outline-none sm:hidden flex"
              aria-label="Toggle Menu"
            >
              <img
                src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
                alt="toggle"
                className="w-6 h-6 dark:invert-0 invert"
              />
            </button>

            {/* Desktop nav */}
            <nav className="sm:flex hidden">
              <NavItems />
            </nav>

            {/* Theme toggle */}
            <img
              className="w-10 h-10 rounded-full p-2 cursor-pointer bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-600 transition duration-300"
              src={isDark ? '/assets/moon.png' : '/assets/sun.svg'}
              onClick={() => setIsDark((prev) => !prev)}
              alt="theme-toggle"
            />
          </div>
        </div>
      </div>

      {/* Sidebar nav for mobile */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 `}>
        <nav className="p-5 border-t-1 dark:border-t-black-500 border-t-blue-300  ">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
