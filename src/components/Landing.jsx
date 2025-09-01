import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { GraduationCap, Heart, PartyPopper, Sparkles, Star, Crown } from "lucide-react";
import confetti from "canvas-confetti";

const float = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const Wrap = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 32px;
  background: linear-gradient(135deg, #a8dadc, #457b9d);
`;

const BGOrb = styled.div`
  position: absolute;
  width: 50vmax;
  height: 50vmax;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.25), transparent 60%),
              radial-gradient(circle at 70% 70%, rgba(255,255,255,.25), transparent 60%);
  filter: blur(40px);
  pointer-events: none;
`;

const Floating = styled(motion.div)`
  position: absolute;
  opacity: 0.25;
  pointer-events: none;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.2rem, 6vw, 4rem);
  margin-bottom: 16px;
  line-height: 1.1;
  background: linear-gradient(90deg, #74c0fc, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  margin-bottom: 28px;
  font-size: clamp(1rem, 2.6vw, 1.2rem);
  opacity: 0.9;
  color: white;
`;

const EnterBtn = styled.button`
  z-index: 10;
  border: 0;
  cursor: pointer;
  padding: 16px 28px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.05rem;
  color: white;
  background: linear-gradient(90deg, #74c0fc, #1d4ed8);
  display: inline-flex;
  gap: 10px;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08) rotate(1deg);
  }
`;

export default function Landing({ onEnter }) {
  const floatVariants = {
    animate: { y: [0, -12, 0], transition: { repeat: Infinity, duration: 4 } }
  };

  const handleEnter = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#1d4ed8", "#74c0fc", "#90e0ef"]
    });
    onEnter();
  };

  return (
    <Wrap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <BGOrb />

      <Floating style={{ top: 40, left: 30 }} variants={floatVariants} animate="animate">
        <Sparkles size={42} />
      </Floating>
      <Floating style={{ top: 90, right: 60 }} variants={floatVariants} animate="animate">
        <Star size={46} />
      </Floating>
      <Floating style={{ bottom: 70, left: 80 }} variants={floatVariants} animate="animate">
        <Crown size={44} />
      </Floating>
      <Floating style={{ bottom: 100, right: 40 }} variants={floatVariants} animate="animate">
        <PartyPopper size={48} />
      </Floating>

      <Title
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.9 }}
      >
        🎓 Congratulations, Syahindah My Love! ❤️
      </Title>

      <Subtitle
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        You did ittttt. I’m so proud of you for making this far. I made this for you and i hope you like it✨
      </Subtitle>

      <EnterBtn onClick={handleEnter}>
        <GraduationCap /> Enter <Heart />
      </EnterBtn>
    </Wrap>
  );
}
