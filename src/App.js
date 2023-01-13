import { useState } from "react";
import CocheDetalle from "./pages/CocheDetalle";
import ListaCoches from "./pages/ListaCoches";
import "./styles/index.css";

function App() {
  const [pageStatus, setPageStatus] = useState("list");
  const [coche, setCoche] = useState(null);

  return (
    <div className="App">
      {pageStatus === "list" && (
        <ListaCoches
          onChange={(_coche) => {
            setCoche(_coche);
            setPageStatus("coche-details");
          }}
        />
      )}
      {pageStatus === "coche-details" && (
        <CocheDetalle
          value={coche}
          onChange={() => {
            setPageStatus("list");
          }}
        />
      )}
    </div>
  );
}

export default App;
