import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Camera, Star, Gift } from "lucide-react";
import { photos } from "../utils/photos";
import ImageModal from "./ImageModal";


const Section = styled.section`
  padding: 60px 20px; max-width: 1200px; margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center; 
  font-size: clamp(1.6rem, 4vw, 2.4rem); 
  margin: 0 0 24px;
  display: inline-flex; gap: 10px; align-items: center; justify-content: center;
  width: 100%; 
  color: #1a237e; /* deep blue */
`;

const Grid = styled.div`
  display: grid; gap: 18px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const Card = styled(motion.button)`
  border: 0; padding: 0; cursor: pointer; background: transparent; position: relative;
  border-radius: 18px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,.12);
  &:hover img { transform: scale(1.06); }
`;

const Tag = styled.div`
  position: absolute; top: 10px; left: 10px;
  background: rgba(255,255,255,.9); border-radius: 999px; padding: 6px 10px;
  display: flex; gap: 6px; align-items: center; font-weight: 600;
`;

const Img = styled.img`
  width: 100%; height: 260px; object-fit: cover; display: block;
  transition: transform .5s ease;
`;

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openModal = (i) => { setIdx(i); setOpen(true); };

  return (
    <Section>
      <Heading><Camera /> Our Beautiful Memories <Star /></Heading>
      <Grid>
        {photos.map((p, i) => (
          <Card
            key={i}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal(i)}
            className="glow"
          >
            <Tag><Gift size={16}/> Memory {i + 1}</Tag>
            <Img src={p.src} alt={p.alt} />
          </Card>
        ))}
      </Grid>

      {open && <ImageModal index={idx} onClose={() => setOpen(false)} />}
    </Section>
  );
}
