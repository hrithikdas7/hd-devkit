"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  DynamicTable: () => DynamicTable
});
module.exports = __toCommonJS(index_exports);

// src/DynamicTable.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var DynamicTable = ({
  columns,
  data,
  className = "",
  striped = true,
  hover = true
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "table",
    {
      className: `min-w-full border border-gray-200 ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { className: "bg-green-500", children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "th",
          {
            className: "p-2 text-left text-sm font-semibold text-gray-700 border-b",
            children: col.label
          },
          col.key
        )) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
          data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "td",
            {
              className: "text-gray-500 text-center p-4",
              colSpan: columns.length,
              children: "No data found"
            }
          ) }),
          data.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "tr",
            {
              className: `
              ${striped && i % 2 === 1 ? "bg-gray-50" : ""}
              ${hover ? "hover:bg-gray-100" : ""}
            `,
              children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "p-2 border-b text-sm", children: row[col.key] }, col.key))
            },
            i
          ))
        ] })
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DynamicTable
});
