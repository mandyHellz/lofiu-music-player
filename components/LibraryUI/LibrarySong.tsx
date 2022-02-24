import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { songsProps } from "../Typings/typings";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
}: {
  song: songsProps;
  songs: songsProps[];
  setCurrentSong: Dispatch<SetStateAction<songsProps>>;
  audioRef: MutableRefObject<any>;
  isPlaying: boolean;
  setSongs: Dispatch<SetStateAction<songsProps[]>>;
  id: string;
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    // add an active state
    const playNewSong = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(playNewSong);

    // check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song flex items-center gap-x-10 md:gap-x-2 py-5 
      cursor-pointer px-5 transition duration-500 ease ${
        song.active
          ? "bg-gradient-to-r from-light-orange to-pretty-pink"
          : "hover:bg-pretty-pink hover:bg-opacity-30"
      }`}
    >
      <img
        alt={song.name + " cd cover"}
        src={song.cover}
        className="w-1/3 md:min-w-1/2 max-w-xs"
      ></img>
      <div className="song-description pl-1 text-gray-700">
        <p className="text-base font-medium whitespace-pre-wrap">{song.name}</p>
        <p className="text-sm">{song.artist}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
