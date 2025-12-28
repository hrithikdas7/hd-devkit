export const DynamicTable = ({
  columns,
  data,
  className = "",
  striped = true,
  hover = true,
}: any) => {
  return (
    <table
      className={`min-w-full border border-gray-200 ${className}`}
    >
      <thead className="bg-gray-50">
        <tr className="bg-green-500">
          {columns.map((col: any) => (
            <th
              key={col.key}
              className="p-2 text-left text-sm font-semibold text-gray-700 border-b"
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
              className="text-gray-500 text-center p-4"
              colSpan={columns.length}
            >
              No data found
            </td>
          </tr>
        )}

        {data.map((row: any, i: number) => (
          <tr
            key={i}
            className={`
              ${striped && i % 2 === 1 ? "bg-gray-50" : ""}
              ${hover ? "hover:bg-gray-100" : ""}
            `}
          >
            {columns.map((col: any) => (
              <td key={col.key} className="p-2 border-b text-sm">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
