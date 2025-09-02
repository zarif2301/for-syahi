import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Sparkles, Heart, BookOpen, Music, Star } from "lucide-react";

const Wrap = styled.section`
  padding: 60px 20px; max-width: 900px; margin: 0 auto 80px;
`;

const Card = styled(motion.article)`
  background: white; border-radius: 24px; padding: 28px;
  box-shadow: 0 30px 60px rgba(0,0,0,.12); position: relative;
  overflow: hidden;
`;

const Header = styled.h2`
  margin: 0 0 14px; text-align: center; color: var(--pink);
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  display: flex; gap: 10px; align-items: center; justify-content: center;
`;

const Body = styled.p`
  margin: 0; font-size: 1.05rem; line-height: 1.75; color: #43285e;
`;

const Accents = styled.div`
  position: absolute; inset: 0; pointer-events: none; opacity: .12;
  display: grid; place-items: center;
  svg { position: absolute; }
`;

const FooterLine = styled.div`
  display: flex; justify-content: center; gap: 14px; margin-top: 18px; color: var(--purple);
`;

export default function Letter() {
  return (
    <Wrap>
      <Card
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="glow"
      >
        <Accents>
          <Star size={220} style={{ top: -30, left: -30 }} />
          <Sparkles size={260} style={{ bottom: -40, right: -40 }} />
        </Accents>

        <Header><Sparkles /> To Syahi <Sparkles /></Header>
        <Body>
          Congratulations on graduating my loooove💙. I am so proud of you 
          for everything you’ve accomplished💖. This is a massive achievement for us and
          I can’t wait to see what the future holds for you. I know you will do great things.
           I’ll always be here cheering for you at the side. Congratulations again bebe, my love — you deserve the world and more!!!! ✨
        </Body>

        <FooterLine>
          <Heart /> <BookOpen /> <Music />
        </FooterLine>
      </Card>
    </Wrap>
  );
}
