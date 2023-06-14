import Grid from "../../components/grid/Grid";
import SearchBar from "../../components/search/SearchBar";
import NewAccountButton from "../../components/new-account/button/NewAccountButton";
import { Colors } from "../../common/Colors";
import { useState, ChangeEvent } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      style={{ background: Colors.background }}
      className="max-w-[96%] mx-auto py-[44px] pl-[73px] pr-[78px] rounded-[6px]"
    >
      <div className="flex justify-between">
        <SearchBar handleSearch={handleSearch} />
        <NewAccountButton />
      </div>
      <Grid search={search} />
    </div>
  );
};

export default Home;
