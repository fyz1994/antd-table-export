# antd-table-export

## 功能描述

实现 antd-table 的数据导出功能，传入 Table 组件所需的 datasource 和 columns，即可实现前端导出。

## 支持导出的文件类型

xlsx、xls

## 使用示例

### 在项目中安装依赖

```bash
# 使用 npm 安装依赖
npm i --save antd-table-export

# 或者使用 yarn 安装依赖
yarn add antd-table-export
```

### 在代码中使用

1、导入模块:

```javascript
import tableExport from "antd-table-export";

const exportInstance = new tableExport(datasource, columns);
exportInstance.download(tableName, "xlsx");
```

2、初始化 Export 实例:

```javascript
const exportInstance = new tableExport(datasource, columns);
```

3、调用下载方法 download。

> download 方法有两个参数：
>
> 1. 文件名
> 2. 文件类型，目前支持 xlsx、xls 两种类型，如果不传此参数，默认的文件类型是 xlsx

```javascript
exportInstance.download(tableName);
```
