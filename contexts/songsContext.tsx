import {
  createContext,
  MutableRefObject,
  ReactNode,
  useRef,
  useState,
} from "react";
import chillHopSongs from "../data/data";

interface SongsProviderProps {
  children: ReactNode;
}

export const SongsContext = createContext([] as any);

export const SongsProvider = ({ children }: SongsProviderProps) => {
  const audioRef: MutableRefObject<any> = useRef(null);
  const [songs, setSongs] = useState(chillHopSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(
      (song: { id: string }) => song.id === currentSong.id
    );
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  const timeUpdateHandler = (e: any) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPerc = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongTime({
      ...songTime,
      currentTime: current,
      duration: duration,
      animationPercentage: animationPerc,
    });
  };

  return (
    <SongsContext.Provider
      value={{
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        audioRef,
        songEndHandler,
        songTime,
        setSongTime,
        timeUpdateHandler,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
};
