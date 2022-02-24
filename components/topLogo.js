import { motion } from "framer-motion";

export const TopLogo = () => {
  return (
    <motion.a
      className="m-auto pointer-events-auto"
      href="https://www.instagram.com/skutti_shop"
      target="_blank"
      animate={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src="/images/logo.png" className="w-48 md:w-80" />
    </motion.a>
  );
};

export default TopLogo;
