import { motion } from "framer-motion";

function Header({ name }) {
  return (
    <div className="text-center space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent drop-shadow"
      >
        Happy Birthday
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-3xl sm:text-5xl font-black text-white"
      >
        {name ? name : "Sister"}!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg text-pink-100/90 max-w-2xl mx-auto"
      >
        Wishing you a day filled with love, laughter, and all your favorite things. You make life brighter just by being you.
      </motion.p>
    </div>
  );
}

export default Header;
