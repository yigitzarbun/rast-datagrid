import styles from "./Grid.module.css";
import { getAccounts } from "../../store/slices/accountsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";

interface GridProps {
  search: string;
  display: number;
  page: number;
}

function Grid({ search, display, page }: GridProps) {
  const dispatch = useAppDispatch();

  let { accounts } = useAppSelector((state) => state.accounts);

  let section: number = (page - 1) * display;

  let slicedAccounts = accounts.slice(section, section + display);

  const [sort, setSort] = useState("");

  const handleSort = (v: string) => {
    setSort(v);
  };

  let filteredData = slicedAccounts.filter((account) => {
    if (search === "") {
      return account;
    } else if (
      account.link.toLowerCase().includes(search.toLowerCase()) ||
      account.name.toLowerCase().includes(search.toLowerCase()) ||
      account.description.toLowerCase().includes(search.toLowerCase())
    ) {
      return account;
    }
  });

  let sortedData = [...filteredData];

  if (sort === "link") {
    sortedData.sort((a, b) => a.link.localeCompare(b.link));
  } else if (sort === "name") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "description") {
    sortedData.sort((a, b) => a.description.localeCompare(b.description));
  }

  useEffect(() => {
    dispatch(getAccounts());
  }, []);

  return (
    <div className="mt-[11px] overflow-x-auto">
      {sortedData.length > 0 ? (
        <table className={styles.grid}>
          <thead>
            <tr>
              <th
                className={styles.headingLink}
                onClick={() => handleSort("link")}
              >
                <div className={styles.headingContent}>
                  <span>Sosyal Medya Linki</span>
                  <img
                    src={
                      sort === "link"
                        ? "/sort/active_arrow.png"
                        : "/sort/inactive_arrow.png"
                    }
                    alt="sort"
                    className="w-[9.97px] h-[19px]"
                  />
                </div>
              </th>
              <th
                className={styles.headingName}
                onClick={() => handleSort("name")}
              >
                <div className={styles.headingContent}>
                  <span>Sosyal Medya Adı</span>
                  <img
                    src={
                      sort === "name"
                        ? "/sort/active_arrow.png"
                        : "/sort/inactive_arrow.png"
                    }
                    alt="sort"
                    className="w-[9.97px] h-[19px]"
                  />
                </div>
              </th>
              <th
                className={styles.headingDescription}
                onClick={() => handleSort("description")}
              >
                <div className={styles.headingContent}>
                  <span>Açıklama</span>
                  <img
                    src={
                      sort === "description"
                        ? "/sort/active_arrow.png"
                        : "/sort/inactive_arrow.png"
                    }
                    alt="sort"
                    className="w-[9.97px] h-[19px]"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((account, index) => (
              <tr
                key={account.link}
                className={index % 2 === 0 ? styles.whiteRow : styles.blueRow}
              >
                <td className={styles.tdLink}>{account.link}</td>
                <td className={styles.tdName}>{account.name}</td>
                <td className={styles.tdDescription}>{account.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aradığınız kriterlere göre sonuç bulunamadı.</p>
      )}
    </div>
  );
}

export default Grid;
