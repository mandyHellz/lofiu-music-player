import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

export default function Nav({
  libraryStatus,
  setLibraryStatus,
}: {
  libraryStatus: boolean;
  setLibraryStatus: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav className="h-20 flex justify-around items-center">
      <p className="text-2xl font-medium">Waves</p>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className="flex items-center bg-transparent hover:bg-gray-700 hover:text-white cursor-pointer border border-gray-600 transition-all duration-500 p-1"
      >
        Library
        <FontAwesomeIcon icon={faMusic} className="w-5 h-5" />
      </button>
    </nav>
  );
}
