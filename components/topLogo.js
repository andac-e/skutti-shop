import { motion } from "framer-motion";

export const TopLogo = () => {
  return (
    <motion.a
      className="mx-auto py-20 pointer-events-auto"
      href="https://www.instagram.com/skutti_shop"
      target="_blank"
      animate={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src="/images/logo.png" className="w-48 md:w-64" />
    </motion.a>
  );
};

export default TopLogo;
