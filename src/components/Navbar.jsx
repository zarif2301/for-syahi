import React, { useState } from "react";
import styled from "styled-components";
import { GraduationCap, Heart, PartyPopper, ArrowUp, Menu, X, Music } from "lucide-react";
import MusicPlayer from "./MusicPlayer"; // make sure this path is correct

const Bar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px 16px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  .logo { color: var(--purple); }
  .love { color: var(--pink); }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  a, button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 8px 14px;
    border-radius: 999px;
    font-weight: 600;
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--ink);
  }
  a:hover, button:hover {
    background: rgba(124, 58, 237, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.open ? "flex" : "none")};
    padding-top: 10px;
    gap: 10px;
  }
`;

const Hamburger = styled.button`
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  z-index: 40;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Bar>
      <Brand>
        <GraduationCap className="logo" />
        <span>Congrats <span className="love">Love</span>!</span>
        <PartyPopper className="logo" />
      </Brand>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </Hamburger>

      <NavLinks open={menuOpen}>
        <a href="#gallery"><Heart size={18} /> Gallery</a>
        <a href="#letter"><GraduationCap size={18} /> Letter</a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp size={18} /> Top
        </button>
        {/* Music player button visible on mobile too */}
        <MusicPlayer />
      </NavLinks>
    </Bar>
  );
}
