import { useEffect, useRef, useState } from "react";
import audio from "../../assets/kaira.mp3";
import play from "../../assets/player-play.svg";
import pause from "../../assets/player-pause.svg";

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Automatically start playing when the component mounts (optional)

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mpeg" />
        Ваш браузер не поддерживает музыку
      </audio>
      <button onClick={togglePlay} className="audio_button">
        {isPlaying ? <img src={pause} alt="" /> : <img src={play} />}
      </button>
    </div>
  );
};
