import React from 'react';

export interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactElement;
}

interface Props {
  columns: Column[];
  data: any[];
  title?: string;
  searchable?: boolean;
}

export const DynamicTable = ({
  columns,
  data,
  title,
  searchable = false,
}: Props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        {title && (
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        )}

        {searchable && (
          <input
            placeholder="Search…"
            className="w-full sm:w-64 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 border-b">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-left font-medium text-gray-600 uppercase text-xs tracking-wider"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 && (
              <tr>
                <td
                  className="px-4 py-6 text-center text-gray-400"
                  colSpan={columns.length}
                >
                  No results found
                </td>
              </tr>
            )}

            {data.map((row, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 1 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 border-b">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination placeholder */}
      <div className="flex justify-center mt-4 gap-2">
        <button className="px-3 py-1 text-sm border rounded-lg hover:bg-indigo-500 hover:text-white transition">
          1
        </button>
        <button className="px-3 py-1 text-sm border rounded-lg hover:bg-indigo-500 hover:text-white transition">
          2
        </button>
        <button className="px-3 py-1 text-sm border rounded-lg hover:bg-indigo-500 hover:text-white transition">
          3
        </button>
      </div>
    </div>
  );
};
