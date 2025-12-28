// src/DynamicTable.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var DynamicTable = ({
  columns,
  data,
  title,
  searchable = false
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-5 rounded-xl shadow-sm border border-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4", children: [
      title && /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-800", children: title }),
      searchable && /* @__PURE__ */ jsx(
        "input",
        {
          placeholder: "Search\u2026",
          className: "w-full sm:w-64 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full text-sm text-gray-700", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-50 border-b", children: /* @__PURE__ */ jsx("tr", { children: columns.map((col) => /* @__PURE__ */ jsx(
        "th",
        {
          className: "px-4 py-3 text-left font-medium text-gray-600 uppercase text-xs tracking-wider",
          children: col.label
        },
        col.key
      )) }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        data.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
          "td",
          {
            className: "px-4 py-6 text-center text-gray-400",
            colSpan: columns.length,
            children: "No results found"
          }
        ) }),
        data.map((row, i) => /* @__PURE__ */ jsx(
          "tr",
          {
            className: `${i % 2 === 1 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`,
            children: columns.map((col) => /* @__PURE__ */ jsx("td", { className: "px-4 py-3 border-b", children: col.render ? col.render(row[col.key], row) : row[col.key] }, col.key))
          },
          i
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center mt-4 gap-2", children: [
      /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-sm border rounded-lg hover:bg-indigo-500 hover:text-white transition", children: "1" }),
      /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-sm border rounded-lg hover:bg-indigo-500 hover:text-white transition", children: "2" }),
      /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-sm border rounded-lg hover:bg-indigo-500 hover:text-white transition", children: "3" })
    ] })
  ] });
};
export {
  DynamicTable
};
