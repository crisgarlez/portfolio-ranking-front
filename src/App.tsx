import { useQuery } from "react-query";
import { fetchData } from "./graphql";
import DataTable from "./components/Table";

interface Monster {
  id: string;
  monsterid: string;
  monstername: string;
  victories: string;
  defeats: string;
}

function App() {
  const { data, error, isLoading } = useQuery<Monster[], Error>(
    "dataKey",
    fetchData
  );

  return (
    <div>
      <h1>Tabla de datos GraphQL</h1>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <DataTable data={data} />}
    </div>
  );
}

export default App;
