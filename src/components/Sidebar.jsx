import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      animate={{ width: isOpen ? "240px" : "80px" }}
      className="bg-white h-screen shadow-lg fixed left-0 top-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-9 bg-white rounded-full p-1 shadow-md"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          )}
        </svg>
      </button>

      <div className="flex items-center p-4">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        {isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-2 font-semibold text-xl"
          >
            ExchangeKoro
          </motion.span>
        )}
      </div>
      
      {/* Add sidebar menu items here */}
    </motion.div>
  );
};

export default Sidebar;
