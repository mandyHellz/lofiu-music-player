import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songTime,
  setSongTime,
  songs,
  setCurrentSong,
  setSongs,
}: {
  currentSong: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  };
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  audioRef: MutableRefObject<any>;
  songTime: {
    currentTime: number;
    duration: number;
    animationPercentage: number;
  };
  setSongTime: Dispatch<
    SetStateAction<{
      currentTime: number;
      duration: number;
      animationPercentage: number;
    }>
  >;
  songs: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  }[];
  setCurrentSong: Dispatch<
    SetStateAction<{
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: string[];
      id: string;
      active: boolean;
    }>
  >;
  setSongs: Dispatch<
    SetStateAction<
      {
        name: string;
        cover: string;
        artist: string;
        audio: string;
        color: string[];
        id: string;
        active: boolean;
      }[]
    >
  >;
}) => {
  // Event handlers
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const draggableHandler = (e: { target: { value: any } }) => {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  };

  const activeLibraryHandler = (nextPrev: {
    name?: string;
    cover?: string;
    artist?: string;
    audio?: string;
    color?: string[];
    id: any;
    active?: boolean;
  }) => {
    const playNewSong = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return { ...song, active: true };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(playNewSong);
  };

  const skipTracksHandler = async (direction: string) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    // check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  // min : sec formater
  const timeFormater = (time: number) => {
    const formatedTime =
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    return formatedTime;
  };

  // Add animation styles to soundtrack bar
  const trackAnimation = {
    transform: `translateX(${songTime.animationPercentage}%)`,
  };

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="time-control w-4/5 md:w-1/3 flex items-center gap-2">
        <p>{timeFormater(songTime.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            type="range"
            className="player--input"
            min={0}
            max={songTime.duration || 0}
            value={songTime.currentTime}
            onChange={draggableHandler}
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{songTime.duration ? timeFormater(songTime.duration) : "0:00"}</p>
      </div>
      <div className="play-control flex justify-between items-center mt-4 mb-8 p-1 w-2/3 md:w-1/4">
        <FontAwesomeIcon
          className="cursor-pointer w-5 h-5"
          icon={faAngleLeft}
          onClick={() => skipTracksHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="cursor-pointer w-5 h-5"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="cursor-pointer w-5 h-5"
          icon={faAngleRight}
          onClick={() => skipTracksHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
