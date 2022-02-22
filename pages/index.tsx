import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import Library from "../components/LibraryUI/Library";
import Player from "../components/Player/Player";
import Song from "../components/Song/Song";
import chillHopSongs from "../utils/utils";

const Home: NextPage = () => {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(chillHopSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e: any) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongTime({ ...songTime, currentTime: current, duration: duration });
  };

  return (
    <>
      <Head>
        <title>Music Player</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100&display=swap');
        </style>
      </Head>

      <div className="mx-auto py-20">
        <Song currentSong={currentSong} />
        <Player
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songTime={songTime}
          setSongTime={setSongTime}
        />
        <Library
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
        />
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
        ></audio>
      </div>
    </>
  );
};

export default Home;
