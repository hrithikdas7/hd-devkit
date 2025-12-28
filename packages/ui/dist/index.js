// src/DynamicTable.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var DynamicTable = ({
  columns,
  data,
  className = "",
  striped = true,
  hover = true
}) => {
  return /* @__PURE__ */ jsxs(
    "table",
    {
      className: `min-w-full border border-gray-200 ${className}`,
      children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsx("tr", { className: "bg-green-500", children: columns.map((col) => /* @__PURE__ */ jsx(
          "th",
          {
            className: "p-2 text-left text-sm font-semibold text-gray-700 border-b",
            children: col.label
          },
          col.key
        )) }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          data.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
            "td",
            {
              className: "text-gray-500 text-center p-4",
              colSpan: columns.length,
              children: "No data found"
            }
          ) }),
          data.map((row, i) => /* @__PURE__ */ jsx(
            "tr",
            {
              className: `
              ${striped && i % 2 === 1 ? "bg-gray-50" : ""}
              ${hover ? "hover:bg-gray-100" : ""}
            `,
              children: columns.map((col) => /* @__PURE__ */ jsx("td", { className: "p-2 border-b text-sm", children: row[col.key] }, col.key))
            },
            i
          ))
        ] })
      ]
    }
  );
};
export {
  DynamicTable
};
