import { Dispatch, MutableRefObject, SetStateAction } from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}: {
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
  audioRef: MutableRefObject<null>;
  isPlaying: boolean;
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
  libraryStatus: boolean;
}) => {
  return (
    <div
      className={`library ${
        libraryStatus ? "-translate-x-full" : "translate-x-0 bg-opacity-80"
      } transform -translate-x-full transition duration-700 ease-in md:fixed md:top-0 md:left-0 md:w-1/5 md:overflow-scroll 
      w-full h-full bg-white drop-shadow-lg shadow-lg`}
    >
      <p className="p-5 text-2xl">Library List</p>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
