import XLSX from "xlsx";

/**
 * 通过 Table 相关数据：dataSource, columns 来下载表格
 */
export default class Export {
  datajson = [];
  headers = [];

  constructor(dataSource, columns) {
    this.datajson = this.genDatajson(dataSource, columns);
    this.headers = this.genHeaders(columns);
  }

  genDatajson(dataSource, columns) {
    if (!dataSource) {
      return [];
    }

    return dataSource?.map((item) => {
      let newItem = {};
      (columns || []).forEach((column) => {
        newItem[column?.title] = item[column?.dataIndex];
      });
      return newItem;
    });
  }

  genHeaders(columns) {
    return (columns || []).map((column) => column?.title);
  }

  download(fileName, fileType = "xlsx") {
    switch (fileType) {
      case "xlsx":
      case "xls":
        return downloadXLSX(fileName);
      default:
        return downloadXLSX(fileName);
    }
  }

  downloadXLSX(fileName) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(this.datajson, {
      header: this.headers,
    });
    XLSX.utils.book_append_sheet(wb, ws, "sheet1");
    return XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
