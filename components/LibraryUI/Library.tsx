import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { songsProps } from "../Typings/typings";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}: {
  songs: songsProps[];
  setCurrentSong: Dispatch<SetStateAction<songsProps>>;
  audioRef: MutableRefObject<null>;
  isPlaying: boolean;
  setSongs: Dispatch<SetStateAction<songsProps[]>>;
  libraryStatus: boolean;
}) => {
  return (
    <div
      className={`library ${
        libraryStatus ? "-translate-x-full" : "translate-x-0"
      } 
        transform -translate-x-full transition duration-700 ease-in fixed top-0 left-0 md:w-1/4 
        overflow-scroll w-full h-full bg-white drop-shadow-lg shadow-lg`}
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
