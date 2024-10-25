import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const MenuIcon = ({ toggleMenu }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    onClick={toggleMenu}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    className="menu-icon"
  >
    <rect
      x="32"
      width="12"
      height="32"
      transform="rotate(90 32 0)"
      fill="#D0E7D2"
    />
    <rect
      x="32"
      y="14"
      width="8"
      height="32"
      transform="rotate(90 32 14)"
      fill="#D0E7D2"
    />
    <rect
      x="32"
      y="24"
      width="4"
      height="32"
      transform="rotate(90 32 24)"
      fill="#D0E7D2"
    />
    <rect
      x="32"
      y="30"
      width="2"
      height="32"
      transform="rotate(90 32 30)"
      fill="#D0E7D2"
    />
  </motion.svg>
);

const Menu = ({ setTimerPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Variabler för meny-animation
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -20,
    },
    visible: (i) => ({
      opacity: 1,
      scale: [1.2, 0.9, 1],
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  // Funktion för att hantera navigering och stänga menyn
  const handleNavigation = (item) => {
    setTimerPath(`/${item.toLowerCase().replace(" ", "-")}`);
    toggleMenu(); // Stäng menyn när du navigerar
  };

  // Funktion för att navigera till startsidan (loading)
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <MenuIcon toggleMenu={toggleMenu} />

      <motion.div
        className="menu"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.ul className="menu-list">
          {["Analog Timer", "Digital Timer", "Text Timer"].map(
            (item, index) => (
              <motion.li
                key={item}
                onClick={() => handleNavigation(item)}
                variants={variants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                custom={index} // Passa in index för fördröjning
              >
                {item}
              </motion.li>
            )
          )}
        </motion.ul>
      </motion.div>
      <h2 onClick={navigateToHome}>interval</h2>
    </nav>
  );
};

export default Menu;
