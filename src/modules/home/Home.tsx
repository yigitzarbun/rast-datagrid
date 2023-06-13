import Grid from "../../components/grid/Grid";
import SearchBar from "../../components/search/SearchBar";
import NewAccountButton from "../../components/new-account/NewAccountButton";
import { Colors } from "../../common/Colors";

const Home = () => {
  return (
    <div
      style={{ background: Colors.background }}
      className="max-w-[96%] mx-auto py-[44px] pl-[73px] pr-[78px] rounded-[6px]"
    >
      <div className="flex justify-between">
        <SearchBar />
        <NewAccountButton />
      </div>
      <Grid />
    </div>
  );
};

export default Home;
