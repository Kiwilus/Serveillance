import { useEffect, useState } from "react";
import "./App.css"

type CpuResponse = {
  processor: string;
  usage: number;
  cores: number;
};

function App() {
  const [data, setData] = useState<CpuResponse | null>(null);

  useEffect(() => {
    fetch("/api/")
      .then((response) => response.json())
      .then((data: CpuResponse) => {
        setData(data);
      });
  }, []);

  return (
    <div className="app">
      <h1>Serveillance dashboard</h1>

      {data !== null ? (
        <div className="cpu-section">
          <h2>CPU</h2>
          <p>CPU: {data.processor}</p>
          <p>CPU usage: {data.usage}%</p>
          <p>Cores: {data.cores}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;
