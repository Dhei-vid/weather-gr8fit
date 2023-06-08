import { SearchBoxProps } from "../../types/types";

const SearchBar = ({
  placeholder,
  onChangeHandler,
  location,
  onKeyDown,
}: SearchBoxProps) => {
  return (
    <div
      className={`w-screen h-[10rem] bg-gradient-to-r from-slate-100 to-slate-800`}
    >
      <div className="relative flex items-stretch justify-center py-14">
        <input
          className="self-center placeholder:italic placeholder:text-slate-400 block bg-white w-[50vw] rounded-sm border-slate-300 py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500  focus:ring-1 sm:text-sm"
          type="text"
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={location}
          onKeyDownCapture={onKeyDown}
        />
      </div>
    </div>
  );
};

export default SearchBar;
