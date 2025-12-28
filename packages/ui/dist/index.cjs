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
  schema,
  data,
  loading = false,
  pagination,
  onSearchChange
}) => {
  const { columns, title, search } = schema;
  const shownCount = pagination ? Math.min(
    pagination.total,
    (pagination.page - 1) * pagination.pageSize + data.length
  ) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-full bg-white rounded-xl border border-gray-200 shadow-sm p-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col md:flex-row justify-between items-center mb-4 gap-3", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg font-semibold text-gray-800", children: title }),
      search && onSearchChange && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          placeholder: "Search id, company, etc",
          onChange: (e) => onSearchChange(e.target.value),
          className: "w-full md:w-64 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { className: "min-w-full text-sm text-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { className: "border-b border-gray-300 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: columns.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "th",
        {
          className: `px-4 py-3 text-left font-medium text-gray-600 uppercase text-xs tracking-wider border-b border-gray-200 ${ci !== columns.length - 1 ? "border-r border-gray-200" : ""}`,
          children: c.label
        },
        c.key
      )) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: loading ? (
        // LOADING SHIMMER
        [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { className: "animate-pulse", children: columns.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "td",
          {
            className: `px-4 py-3 border-b ${ci !== columns.length - 1 ? "border-r border-gray-200" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 rounded bg-gray-200 w-3/4" })
          },
          c.key
        )) }, i))
      ) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "td",
        {
          colSpan: columns.length,
          className: "px-4 py-6 text-center text-gray-400",
          children: "No results found"
        }
      ) }) : data.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "tr",
        {
          className: `${i % 2 === 1 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`,
          children: columns.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "td",
            {
              className: `px-4 py-3 border-b border-gray-200 ${ci !== columns.length - 1 ? "border-r border-gray-200" : ""}`,
              children: c.type === "status" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  className: "px-2 py-1 text-xs rounded-full font-medium",
                  style: {
                    backgroundColor: c.colors?.[row[c.key]] ?? "#EEF2FF",
                    color: "#1E1E1E"
                  },
                  children: row[c.key]
                }
              ) : row[c.key]
            },
            c.key
          ))
        },
        i
      )) })
    ] }) }),
    pagination && pagination.type === "pages" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between items-center pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-sm text-gray-600", children: [
        "Showing ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: shownCount }),
        " of ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: pagination.total }),
        " results"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex gap-1", children: Array.from({
        length: Math.ceil(pagination.total / pagination.pageSize)
      }).map((_, i) => {
        const pageNum = i + 1;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            className: `px-3 py-1 text-sm border rounded-lg ${pagination.page === pageNum ? "bg-indigo-500 text-white border-indigo-500" : "hover:bg-gray-100"}`,
            onClick: () => pagination.onPageChange(pageNum),
            children: pageNum
          },
          pageNum
        );
      }) })
    ] })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DynamicTable
});
