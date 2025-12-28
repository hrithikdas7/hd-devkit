import React from "react";

export interface TableSchema {
  title?: string;
  search?: boolean;
  sortable?: boolean; // backend-controlled sorting (future use)
  columns: {
    key: string;
    label: string;
    type?: "string" | "number" | "date" | "status";
    colors?: Record<string, string>; // only for type=status
  }[];
}

export interface PaginationConfig {
  type: "pages" | "none";
  page: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

interface DynamicTableProps {
  schema: TableSchema;
  data: any[];
  loading?: boolean;
  pagination?: PaginationConfig;
  onSearchChange?: (query: string) => void;
}

export const DynamicTable: React.FC<DynamicTableProps> = ({
  schema,
  data,
  loading = false,
  pagination,
  onSearchChange,
}) => {
  const { columns, title, search } = schema;

  // Compute shown count based on current page and actual data length
  // pagination.page is 1-based: shown = (page-1)*pageSize + data.length, capped at total
  const shownCount =
    pagination
      ? Math.min(
          pagination.total,
          (pagination.page - 1) * pagination.pageSize + data.length
        )
      : undefined;

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
        {title && <h2 className="text-lg font-semibold text-gray-800">{title}</h2>}

        {/* Search (server-side) */}
        {search && onSearchChange && (
          <input
            placeholder="Search id, company, etc"
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full md:w-64 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="border-b border-gray-300 bg-gray-50">
            <tr>
              {columns.map((c, ci) => (
                <th
                  key={c.key}
                  className={`px-4 py-3 text-left font-medium text-gray-600 uppercase text-xs tracking-wider border-b border-gray-200 ${
                    ci !== columns.length - 1 ? "border-r border-gray-200" : ""
                  }`}
                >
                  {c.label}
                </th>
              ))}
              
            </tr>
          </thead>

          <tbody>
            {loading ? (
              // LOADING SHIMMER
              [...Array(5)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {columns.map((c, ci) => (
                    <td
                      key={c.key}
                      className={`px-4 py-3 border-b ${
                        ci !== columns.length - 1 ? "border-r border-gray-200" : ""
                      }`}
                    >
                      <div className="h-3 rounded bg-gray-200 w-3/4"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-gray-400"
                >
                  No results found
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 1 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                    {columns.map((c, ci) => (
                      <td
                        key={c.key}
                        className={`px-4 py-3 border-b border-gray-200 ${
                          ci !== columns.length - 1 ? "border-r border-gray-200" : ""
                        }`}
                      >
                      {c.type === "status" ? (
                        <span
                          className="px-2 py-1 text-xs rounded-full font-medium"
                          style={{
                            backgroundColor: c.colors?.[row[c.key]] ?? "#EEF2FF",
                            color: "#1E1E1E",
                          }}
                        >
                          {row[c.key]}
                        </span>
                      ) : (
                        row[c.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* FOOTER – Pagination + Result Count */}
      {pagination && pagination.type === "pages" && (
        <div className="flex justify-between items-center pt-4">
          <p className="text-sm text-gray-600">
            Showing <b>{shownCount}</b> of <b>{pagination.total}</b> results
          </p>

          <div className="flex gap-1">
            {Array.from({
              length: Math.ceil(pagination.total / pagination.pageSize),
            }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  className={`px-3 py-1 text-sm border rounded-lg ${
                    pagination.page === pageNum
                      ? "bg-indigo-500 text-white border-indigo-500"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => pagination.onPageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
