import { Colors } from "../../common/Colors";
import { ChangeEvent } from "react";

interface SearchBarProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
    <div className="flex">
      <div className="flex">
        <input
          placeholder="Search objects..."
          className="w-[335px] h-[42px] px-[29px] py-[13px] rounded-l-[39px] pr-[40px] outline-none"
          onChange={handleSearch}
        />
        <div
          style={{ background: Colors.primary }}
          className="flex w-[45px] h-[42px] rounded-r-[39px] cursor-pointer"
        >
          <img
            src="/search/search-icon.png"
            alt="search-icon"
            className="w-[15.2px] h-[15.2px] mx-auto my-auto "
          />
        </div>
        <div
          style={{ background: Colors.secondary }}
          className="flex w-[49px] h-[42px] rounded-[29px] ml-[9px] cursor-pointer"
        >
          <img
            src="/search/filter-icon.png"
            alt="filter-icon"
            className="w-[16px] h-[15.81px] mx-auto my-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

// alternative styling for search bar
/*
<div className="flex relative">
      <div className="relative">
        <input
          placeholder="Search objects..."
          className="w-[335px] h-[42px] px-[29px] py-[13px] rounded-[39px] pr-[40px]"
        />
        <img src="/search/search-side.png" className="absolute top-0 right-0" />
        <img
          src="/search/search-icon.png"
          className="absolute top-1/2 right-[10px] transform -translate-y-1/2"
          style={{ width: "20px", height: "20px" }}
        />
      </div>
    </div>
*/
