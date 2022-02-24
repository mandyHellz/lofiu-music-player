import type { NextPage } from "next";
import Head from "next/head";
import { MutableRefObject, useRef, useState } from "react";
import Library from "../components/LibraryUI/Library";
import Nav from "../components/Nav/Nav";
import Player from "../components/Player/Player";
import Song from "../components/Song/Song";
import chillHopSongs from "../data/data";

const Home: NextPage = () => {
  const audioRef: MutableRefObject<any> = useRef(null);
  const [songs, setSongs] = useState(chillHopSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

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

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
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

      <div className={`App ${!libraryStatus ? "library-active" : ""} md:pt-20`}>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} />
        <Player
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songTime={songTime}
          setSongTime={setSongTime}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
        <Library
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
          libraryStatus={libraryStatus}
        />
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songEndHandler}
        ></audio>
      </div>
    </>
  );
};

export default Home;
