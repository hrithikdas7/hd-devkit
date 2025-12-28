import { useState } from "react";
import { DynamicTable, type TableSchema } from "@hd-devkit/ui";

const dummySchema: TableSchema = {
  title: "Shipments Data",
  search: true,
  columns: [
    { key: "id", label: "Shipping ID" },
    { key: "company", label: "Company" },
    { key: "category", label: "Product Category" },
    { key: "weight", label: "Weight", type: "number" },
    { key: "route", label: "Route" },
    { key: "date", label: "Date", type: "date" },
    {
      key: "status",
      label: "Status",
      type: "status",
      colors: {
        "On Delivery": "#EEF4FF",
        Pending: "#FFF8C4",
        Completed: "#CEF5D2",
      },
    },
  ],
};

const dummyResponse = (page: number, search: string) => {
  const fullData = [
    {
      id: "#TD6002981",
      company: "StyleHub Co.",
      category: "Electronics",
      weight: "1,200 kg",
      route: "New York, NY → Atlanta, GA",
      date: "Mar 20, 2025 - 10:00 AM",
      status: "On Delivery",
    },
    {
      id: "#TD6002982",
      company: "FreshNet",
      category: "Kitchenware",
      weight: "1,550 kg",
      route: "Dallas, TX → Miami, FL",
      date: "Mar 19, 2025 - 11:30 AM",
      status: "Pending",
    },
    {
      id: "#TD6002983",
      company: "FreshNet",
      category: "Kitchenware",
      weight: "1,550 kg",
      route: "Dallas, TX → Miami, FL",
      date: "Mar 22, 2025 - 01:00 PM",
      status: "Completed",
    },
  ];

  // simulate filtering
  const filtered = search
    ? fullData.filter((d) =>
        Object.values(d).some((v) =>
          String(v).toLowerCase().includes(search.toLowerCase())
        )
      )
    : fullData;

  const pageSize = 2;
  const total = filtered.length;
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);

  return { rows, total, pageSize };
};

export default function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const res = dummyResponse(page, search);

  return (
    <div className="p-6">
      <DynamicTable
        schema={dummySchema}
        data={res.rows}
        loading={false}
        onSearchChange={(q) => {
          setSearch(q);
          setPage(1);
        }}
        pagination={{
          type: "pages",
          page,
          total: res.total,
          pageSize: res.pageSize,
          onPageChange: (p) => setPage(p),
        }}
      />
    </div>
  );
}
