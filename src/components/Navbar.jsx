import React from "react";
import styled from "styled-components";
import { GraduationCap, Heart, PartyPopper, ArrowUp } from "lucide-react";

const Bar = styled.nav`
  position: sticky; top: 0; z-index: 30;
  backdrop-filter: blur(8px);
  background: rgba(255,255,255,0.6);
  border-bottom: 1px solid rgba(0,0,0,.05);
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 20px;
`;

const Brand = styled.div`
  display: flex; align-items: center; gap: 10px; font-weight: 700;
  .logo { color: var(--purple); }
  .love { color: var(--pink); }
`;

const NavLinks = styled.div`
  display: flex; gap: 12px; align-items: center;
  a, button {
    border: 0; background: transparent; cursor: pointer;
    padding: 8px 14px; border-radius: 999px; font-weight: 600;
    display: flex; gap: 8px; align-items: center;
    color: var(--ink);
  }
  a:hover, button:hover { background: rgba(124,58,237,.1); }
`;

export default function Navbar() {
  return (
    <Bar>
      <Brand>
        <GraduationCap className="logo" />
        <span>Congrats <span className="love">Love</span>!</span>
        <PartyPopper className="logo" />
      </Brand>
      <NavLinks>
        <a href="#gallery"><Heart size={18} /> Gallery</a>
        <a href="#letter"><GraduationCap size={18} /> Letter</a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp size={18} /> Top
        </button>
      </NavLinks>
    </Bar>
  );
}
