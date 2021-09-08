(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('xlsx')) :
  typeof define === 'function' && define.amd ? define(['xlsx'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TableExport = factory(global.XLSX));
}(this, (function (XLSX) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var XLSX__default = /*#__PURE__*/_interopDefaultLegacy(XLSX);

  /**
   * 通过 Table 相关数据：dataSource, columns 来下载表格
   */
  var Export = /** @class */ (function () {
      function Export(dataSource, columns) {
          this.dataJson = [];
          this.headers = [];
          this.dataJson = this.genDataJson(dataSource, columns);
          this.headers = this.genHeaders(columns);
      }
      Export.prototype.genDataJson = function (dataSource, columns) {
          if (!dataSource) {
              return [];
          }
          return dataSource.map(function (item) {
              var newItem = {};
              columns.forEach(function (column) {
                  newItem[column.title] = item[column.dataIndex];
              });
              return newItem;
          });
      };
      Export.prototype.genHeaders = function (columns) {
          return columns.map(function (column) { return column.title; });
      };
      Export.prototype.download = function (fileName, fileType) {
          if (fileType === void 0) { fileType = "xlsx"; }
          switch (fileType) {
              case "xlsx":
              case "xls":
                  return this.downloadXLSX(fileName);
              default:
                  return this.downloadXLSX(fileName);
          }
      };
      Export.prototype.downloadXLSX = function (fileName) {
          var wb = XLSX__default['default'].utils.book_new();
          var ws = XLSX__default['default'].utils.json_to_sheet(this.dataJson, {
              header: this.headers,
          });
          XLSX__default['default'].utils.book_append_sheet(wb, ws, "sheet1");
          return XLSX__default['default'].writeFile(wb, fileName + ".xlsx");
      };
      return Export;
  }());

  return Export;

})));
