import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function Home() {
  const [stage, setStage] = useState(0); // 0=intro, 1=logo shrink+move, 2=bg in, 3=content

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 2000),
      setTimeout(() => setStage(2), 3500),
      setTimeout(() => setStage(3), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="home-page">
      {/* Black Overlay */}
      <AnimatePresence>
        {stage < 2 && (
          <motion.div
            key="black-overlay"
            className="black-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Background Image */}
      <motion.div
        className="bg-container"
        initial={{ y: "-100%" }}
        animate={stage >= 2 ? { y: "0%" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="bg-image" />
      </motion.div>

      {/* Intro RD */}
      <AnimatePresence>
        {stage === 0 && (
          <motion.div
            key="intro-screen"
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              backgroundColor: "black",
            }}
          >
            <motion.div
              style={{
                display: "flex",
                fontSize: "6rem",
                fontWeight: "bold",
                color: "#fff",
                fontFamily: "Geo, sans-serif",
              }}
            >
              <motion.span
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                R
              </motion.span>
              <motion.span
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                D
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RD Logo (shrinks + moves) */}
      <AnimatePresence>
        {stage >= 1 && (
          <motion.h2
            key="logo-text"
            className="logo-text"
            initial={{ y: "40vh", scale: 2, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1, x: "-50%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <span>R</span>
            <span>D</span>
          </motion.h2>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {stage >= 3 && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Container className="content-container text-center">
              {/* Then Title */}
              <motion.h1
                className="main-heading"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                THE RD GROUP OF <br /> <span>INDUSTRIES</span>
              </motion.h1>

              {/* Finally Subtitle */}
              <motion.p
                className="subtitle"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                Validate and claim your certificates
              </motion.p>
              {/* Search Box First */}
              <motion.div
                className="search-box mt-3"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  duration: 0.8,
                  delay: 0.3,
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter Your Employee ID"
                  className="search-input"
                  style={{ fontSize: "1.2rem" }}
                />
                <Button variant="dark" className="search-btn">
                  <FaSearch />
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
