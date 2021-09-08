import XLSX from "xlsx";

interface ColumnItem {
  dataIndex: string;
  title: string;
}

interface DataSourceItem {
  [k: string]: any;
}

/**
 * 通过 Table 相关数据：dataSource, columns 来下载表格
 */
export default class Export {
  private dataJson: object[] = [];
  private headers: string[] = [];

  constructor(dataSource: DataSourceItem[], columns: ColumnItem[]) {
    this.dataJson = this.genDataJson(dataSource, columns);
    this.headers = this.genHeaders(columns);
  }

  private genDataJson(dataSource: DataSourceItem[], columns: ColumnItem[]) {
    if (!dataSource) {
      return [];
    }

    return dataSource.map((item) => {
      let newItem: DataSourceItem = {};
      columns.forEach((column) => {
        newItem[column.title] = item[column.dataIndex];
      });
      return newItem;
    });
  }

  private genHeaders(columns: ColumnItem[]) {
    return columns.map((column) => column.title);
  }

  public download(fileName: string, fileType: string = "xlsx") {
    switch (fileType) {
      case "xlsx":
      case "xls":
        return this.downloadXLSX(fileName);
      default:
        return this.downloadXLSX(fileName);
    }
  }

  private downloadXLSX(fileName: string) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(this.dataJson, {
      header: this.headers,
    });
    XLSX.utils.book_append_sheet(wb, ws, "sheet1");
    return XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
