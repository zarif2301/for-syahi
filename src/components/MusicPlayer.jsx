import React, { useState, useEffect, useRef } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <button
        onClick={togglePlay}
        style={{
          padding: "6px 12px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          background: "#7c3aed",
          color: "white",
          fontWeight: 600,
        }}
      >
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
      <audio ref={audioRef} loop>
        <source src="/music/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
