const Song = ({
  currentSong,
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
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img
        alt={currentSong.name + " cd cover"}
        src={currentSong.cover}
        className="w-1/2 md:w-1/5 rounded-full"
      ></img>
      <p className="text-lg font-medium pt-3 px-1 pb-1 hover:text-gray-600">
        {currentSong.name}
      </p>
      <p className="text-sm hover:text-gray-600">{currentSong.artist}</p>
    </div>
  );
};

export default Song;
