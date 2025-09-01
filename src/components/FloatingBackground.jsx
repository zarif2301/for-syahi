import React from "react";
import styled, { keyframes } from "styled-components";
import { Star, Heart } from "lucide-react";

const float = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const Floating = styled.div`
  position: absolute;
  pointer-events: none;
  opacity: 0.2;
  animation: ${float} ${(props) => props.duration || "5s"} ease-in-out infinite;
  left: ${(props) => props.left || "50%"};
  top: ${(props) => props.top || "50%"};
`;

export default function FloatingBackground() {
  return (
    <>
      <Floating top="10%" left="15%" duration="6s">
        <Star size={28} color="#FFD700" />
      </Floating>
      <Floating top="20%" left="70%" duration="8s">
        <Heart size={24} color="#FF69B4" />
      </Floating>
      <Floating top="60%" left="40%" duration="7s">
        <Star size={20} color="#87CEEB" />
      </Floating>
      <Floating top="75%" left="85%" duration="9s">
        <Heart size={18} color="#FFB6C1" />
      </Floating>
    </>
  );
}
