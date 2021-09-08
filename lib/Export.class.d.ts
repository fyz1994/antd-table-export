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
    private dataJson;
    private headers;
    constructor(dataSource: DataSourceItem[], columns: ColumnItem[]);
    private genDataJson;
    private genHeaders;
    download(fileName: string, fileType?: string): any;
    private downloadXLSX;
}
export {};
