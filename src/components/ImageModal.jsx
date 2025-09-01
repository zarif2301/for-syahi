import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { photos } from "../utils/photos";

const Backdrop = styled(motion.div)`
  position: fixed; inset: 0; background: rgba(0,0,0,.5);
  display: grid; place-items: center; z-index: 50;
`;

const Frame = styled(motion.div)`
  width: min(92vw, 980px); border-radius: 16px; overflow: hidden;
  background: var(--white); position: relative;
`;

const Close = styled.button`
  position: absolute; top: 10px; right: 10px; z-index: 2;
  border: 0; background: rgba(0,0,0,.6); color: white; border-radius: 999px;
  width: 38px; height: 38px; display: grid; place-items: center; cursor: pointer;
`;

const BigImg = styled.img`
  width: 100%; height: auto; display: block; max-height: 80vh; object-fit: contain;
  background: #000;
`;

export default function ImageModal({ index = 0, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const photo = photos[index];

  return (
    <AnimatePresence>
      <Backdrop
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <Frame
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glow"
        >
          <Close onClick={onClose} aria-label="Close"><X /></Close>
          <BigImg src={photo.src} alt={photo.alt} />
        </Frame>
      </Backdrop>
    </AnimatePresence>
  );
}
