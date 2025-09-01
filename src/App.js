import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Footer from "./components/Footer";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <Landing key="landing" onEnter={() => setEntered(true)} />
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <section id="gallery"><Gallery /></section>
          <section id="letter"><Letter /></section>
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
