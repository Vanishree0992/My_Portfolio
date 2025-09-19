import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="bg-nude min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-fancy text-wood mb-4"
      >
        Hi, I'm Vanishree
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg font-sans text-coffee max-w-xl"
      >
        A passionate Python Full Stack Developer with 2 years of technical experience as an Electronics Engineer at DRDO. Skilled in Python, Django, Flask, React, Tailwind, and more.
      </motion.p>

      <motion.a
        href="/projects"
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-3 bg-honey text-coffee rounded-xl shadow-md font-heading hover:bg-wood hover:text-nude transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
