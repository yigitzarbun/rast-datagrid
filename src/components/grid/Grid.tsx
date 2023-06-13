import styles from "./Grid.module.css";
import dataSource from "../../data/data.json";

function Grid({ search }: { search: string }) {
  let filteredData = dataSource.filter((account) => {
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
  return (
    <div className="mt-[11px]">
      {filteredData.length > 0 ? (
        <table className={styles.grid}>
          <thead>
            <tr>
              <th className={styles.headingLink}>Sosyal Medya Linki</th>
              <th className={styles.headingName}>Sosyal Medya Adı</th>
              <th className={styles.headingDescription}>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((account, index) => (
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

/*
*** imports

import DataGrid, { Column } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

*** column & cell style generators

const renderTitleHeader = (data: any) => {
    return <p className={styles.gridHeader}>{data.column.caption}</p>;
  };

  const renderCell = (data: any) => {
    return (
      <div className={styles.gridCell} style={{ padding: "20px" }}>
        {data.value}
      </div>
    );
  };

  *** jsx
 
<DataGrid dataSource={dataSource} id="dataGrid" className={styles.grid}>
        <Column
          dataField="link"
          caption="Sosyal Medya Linki"
          headerCellRender={renderTitleHeader}
          width={340}
          cellRender={renderCell}
        />
        <Column
          dataField="name"
          caption="Sosyal Medya Adı"
          headerCellRender={renderTitleHeader}
          width={300}
          cellRender={renderCell}
        />
        <Column
          dataField="description"
          caption="Açıklama"
          headerCellRender={renderTitleHeader}
          width={590}
          cellRender={renderCell}
        />
      </DataGrid>
      */
