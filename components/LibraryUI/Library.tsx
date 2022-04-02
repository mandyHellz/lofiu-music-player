import { useContext } from "react";
import { SongsContext } from "../../contexts/songsContext";
import { songsProps } from "../Typings/typings";
import LibrarySong from "./LibrarySong";

const Library = ({ libraryStatus }: { libraryStatus: boolean }) => {
  const { songs, setCurrentSong, audioRef, isPlaying, setSongs } =
    useContext(SongsContext);

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
        {songs.map((song: songsProps) => (
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
