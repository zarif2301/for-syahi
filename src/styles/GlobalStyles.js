import { createGlobalStyle, keyframes } from "styled-components";

const float = keyframes`
  0%,100% { transform: translateY(0) }
  50% { transform: translateY(-8px) }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0 }
  100% { background-position: 200% 0 }
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  :root{
    --pink:#ff6ec7;
    --purple:#7c3aed;
    --ink:#2d1b46;
    --bg1:#cce6ff; /* soft blue */
    --bg2:#99ccff;
    --white:#ffffff;
  }

  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }

  body {
    margin: 0;
    font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    color: var(--ink);
    background: 
      repeating-linear-gradient(
        45deg,
        rgba(173,216,230,0.05),
        rgba(173,216,230,0.05) 20px,
        transparent 20px,
        transparent 40px
      ),
      linear-gradient(135deg, var(--bg1), var(--bg2));
    background-attachment: fixed;
  }

  .glow { box-shadow: 0 12px 40px rgba(124,58,237,.35), 0 0 40px rgba(255,110,199,.25); }
  .gradientText {
    background: linear-gradient(90deg, #6ec4ff, #4d79ff, #99ccff);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
    .glow:hover {
  box-shadow: 0 16px 50px rgba(124,58,237,0.45), 0 0 50px rgba(255,110,199,0.35);
  transform: scale(1.03) rotate(0.5deg);
}

  .float { animation: ${float} 3s ease-in-out infinite; }
  .shimmer {
    background: linear-gradient(90deg, rgba(255,255,255,.2), rgba(255,255,255,.6), rgba(255,255,255,.2));
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }
`;

export default GlobalStyles;
