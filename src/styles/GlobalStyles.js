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
    --bg1:#ffd1e8;
    --bg2:#e9d5ff;
    --white:#ffffff;
  }

  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    color: var(--ink);
    background: linear-gradient(135deg, var(--bg1), var(--bg2));
    background-attachment: fixed;
  }

  /* handy utility classes */
  .glow { box-shadow: 0 12px 40px rgba(124,58,237,.35), 0 0 40px rgba(255,110,199,.25); }
  .gradientText {
    background: linear-gradient(90deg, #ff6ec4, #a78bfa, #f472b6);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .float { animation: ${float} 3s ease-in-out infinite; }
  .shimmer {
    background: linear-gradient(90deg, rgba(255,255,255,.2), rgba(255,255,255,.6), rgba(255,255,255,.2));
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }
`;

export default GlobalStyles;
