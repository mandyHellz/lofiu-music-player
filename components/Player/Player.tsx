import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";
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
  audioRef: MutableRefObject<null>;
  songTime: {
    currentTime: number;
    duration: number;
  };
  setSongTime: Dispatch<
    SetStateAction<{
      currentTime: number;
      duration: number;
    }>
  >;
}) => {
  // Event handlers
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const draggableHandler = (e: any) => {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  };

  // min : sec formater
  const timeFormater = (time: number) => {
    const formatedTime =
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    return formatedTime;
  };

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="time-control w-2/3 md:w-1/3 flex gap-2">
        <p>{timeFormater(songTime.currentTime)}</p>
        <input
          type="range"
          className="w-full py-1"
          min={0}
          max={songTime.duration}
          value={songTime.currentTime}
          onChange={draggableHandler}
        />
        <p>{timeFormater(songTime.duration)}</p>
      </div>
      <div className="play-control flex justify-between items-center mt-4 mb-8 p-1 w-2/3 md:w-1/4">
        <FontAwesomeIcon
          className="cursor-pointer w-5 h-5"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="cursor-pointer w-5 h-5"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="cursor-pointer w-5 h-5"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
