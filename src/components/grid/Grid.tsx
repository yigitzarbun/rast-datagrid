import DataGrid, { Column } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import styles from "./Grid.module.css";

function Grid() {
  const dataSource = [
    {
      link: "instagram.com/mobilerast/",
      name: "instagram",
      description:
        "We'll help you to finish your development project successfully.",
    },
    {
      link: "tr.linkedin.com/company/rastmobile",
      name: "linkedin",
      description:
        "Hire vetted developers from Rast Mobile to scale up your tech projects.",
    },
    {
      link: "behance.net/rastmobile",
      name: "behance",
      description:
        "Software Development Agency Rast Mobile Information Technology Ltd.",
    },
    {
      link: "twitter.com/rastmobile",
      name: "twitter",
      description:
        "Software Development Agency Rast Mobile Information Technology Ltd.",
    },
  ];
  return (
    <div className="mt-[11px]">
      <DataGrid dataSource={dataSource} className={styles.grid}>
        <Column dataField="link" caption="Sosyal Medya Linki" />
        <Column dataField="name" caption="Sosyal Medya Adı" />
        <Column dataField="description" caption="Açıklama" />
      </DataGrid>
    </div>
  );
}

export default Grid;
