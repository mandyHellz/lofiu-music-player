import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import Library from "../components/LibraryUI/Library";
import Nav from "../components/Nav/Nav";
import Player from "../components/Player/Player";
import Song from "../components/Song/Song";
import { SongsContext } from "../contexts/songsContext";

const Home: NextPage = () => {
  const { currentSong, audioRef, songEndHandler, timeUpdateHandler } =
    useContext(SongsContext);
  const [libraryStatus, setLibraryStatus] = useState(false);

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
        <Song />
        <Player />
        <Library libraryStatus={libraryStatus} />
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
