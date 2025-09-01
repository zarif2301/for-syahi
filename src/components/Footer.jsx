import React from "react";
import styled from "styled-components";
import { Heart, Star, PartyPopper } from "lucide-react";

const Bar = styled.footer`
  text-align: center; padding: 26px 16px; color: #5b3d84;
`;

export default function Footer() {
  return (
    <Bar>
      Made with <Heart size={16}/> and <Star size={16}/> — celebrating you <PartyPopper size={16}/> 
    </Bar>
  );
}
