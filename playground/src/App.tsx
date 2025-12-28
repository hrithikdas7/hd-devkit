import { DynamicTable } from "@hd-devkit/ui";

const columns = [{ key: "name", label: "Name" } , { key: "age", label: "Age" }];
const data = [{ name: "Hrithik" }, { name: "Katrina" }];

export default function App() {
  return <DynamicTable columns={columns} data={data} />;
}
