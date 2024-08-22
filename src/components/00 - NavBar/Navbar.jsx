import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineContacts } from "react-icons/md";
import { SiAxios } from "react-icons/si";

import { NavLink } from "react-router-dom";

import "./nav.css";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FiHome />,
  },
  {
    path: "/restfulAPI",
    name: "Rest API",
    icon: <SiAxios />
  },
  {
    path: "/aboutus",
    name: "About Us",
    icon: <GoOrganization />,
  },
  {
    path: "/services",
    name: "Services",
    icon: <FaNetworkWired />,
  },
  {
    path: "/careers",
    name: "Careers",
    icon: <FaChartLine />,
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: <MdOutlineContacts />,
  },
];

export default function NavBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div>
      <div className="main_container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "60px",
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  className="logo"
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  Sample
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="link_text"
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main style={{ width: isOpen ? "85vw" : "95vw" }}>{children}</main>
      </div>
    </div>
  );
}
