import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, DollarSign, Building2, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "/img/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/rates", label: "Exchange Rates", icon: DollarSign },
    { path: "/agencies", label: "Agencies", icon: Building2 },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.div
      animate={{ width: isOpen ? "240px" : "80px" }}
      className="bg-white h-screen shadow-xl fixed left-0 top-0 z-50 border-r"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-9 bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all duration-200 border"
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        )}
      </button>

      <div className="flex items-center p-4 mb-8">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        {isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-3 font-semibold text-xl text-blue-600"
          >
            ExchangeKoro    
          </motion.span>
        )}
      </div>

      <div className="px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-3 py-3.5 mb-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-3 font-medium"
                >
                  {item.label}
                </motion.span>
              )}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
