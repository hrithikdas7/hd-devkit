import { DynamicTable } from "@hd-devkit/ui";



export default function App() {
  return <DynamicTable
  title="Shipments Data"
  searchable
  columns={[
    { key: "id", label: "Shipping ID" },
    { key: "company", label: "Company" },
    { key: "status", label: "Status", render: v => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        v === "pending"
          ? "bg-yellow-100 text-yellow-700"
          : v === "completed"
          ? "bg-green-100 text-green-700"
          : "bg-indigo-100 text-indigo-700"
      }`}>
        {v}
      </span>
    )}
  ]}
  data={[
    { id: "#T6002981", company: "StyleHub Co.", status: "on delivery" },
    { id: "#T6002982", company: "FreshNet", status: "pending" },
    { id: "#T6002983", company: "FreshNet", status: "completed" }
  ]}
/>
;
}
