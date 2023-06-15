import Grid from "../../components/grid/Grid";
import SearchBar from "../../components/search/SearchBar";
import NewAccountButton from "../../components/new-account/button/NewAccountButton";
import Pages from "../../components/pages/Pages";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getAccounts } from "../../store/slices/accountsSlice";
import styles from "./Home.module.css";
import { useState, ChangeEvent, useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { accounts } = useAppSelector((store) => store.accounts);

  const [search, setSearch] = useState("");

  const [display, setDisplay] = useState(4);

  const [page, setPage] = useState(1);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleDisplay = (v: number): void => {
    setDisplay((prev) => prev + v);
    if (display === 0 && v === -1) {
      setDisplay(0);
    } else if (display === accounts.length && v === 1) {
      setDisplay(accounts.length);
    }
  };

  const handlePage = (p: number): void => {
    setPage((prev) => prev + p);
    if (page === 0 && p === -1) {
      setPage(0);
    } else if (page === Math.ceil(accounts.length / display) && p === 1) {
      setPage(Math.ceil(accounts.length / display));
    }
  };

  useEffect(() => {
    dispatch(getAccounts());
  }, []);

  useEffect(() => {
    if (page > Math.ceil(accounts.length / display)) {
      setPage(Math.ceil(accounts.length / display));
    }
  }, [display]);
  return (
    <div className={styles.main}>
      <div style={{ flex: 1 }}>
        <div className={styles.gridTop}>
          <SearchBar handleSearch={handleSearch} />
          <NewAccountButton />
        </div>
        <Grid display={display} search={search} page={page} />
      </div>
      <Pages
        display={display}
        handleDisplay={handleDisplay}
        page={page}
        handlePage={handlePage}
      />
    </div>
  );
};

export default Home;
