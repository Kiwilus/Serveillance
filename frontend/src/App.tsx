import { useEffect, useState } from "react";

type CpuResponse = {
  processor: string;
  usage: number;
  cores: number;
};

type MemoryResponse = {
  total: string;
  used: string;
  available: string;
  memory_usage_percent: number;
};

type DiskResponse = {
  disk: string;
  mountpoint: string;
  filesystem: string;
  total_storage: number;
  used_storage: number;
  free_storage: number;
  storage_usage_percent: number;
};

type StatsResponse = {
  cpu: CpuResponse;
  memory: MemoryResponse;
  disks: DiskResponse[];
};

function App() {
  const [data, setData] = useState<StatsResponse | null>(null);

  useEffect(() => {
    fetch("/api/")
      .then((response) => response.json())
      .then((data: StatsResponse) => {
        setData(data);
      });
  }, []);

  return (
    <div className="app">
      <h1>Serveillance Dashboard</h1>

      {data !== null ? (
        <>
          {/* CPU */}
          <div className="cpu-section">
            <h2>CPU</h2>

            <p>Processor: {data.cpu.processor}</p>
            <p>Usage: {data.cpu.usage}%</p>
            <p>Cores: {data.cpu.cores}</p>
          </div>

          {/* RAM */}
          <div className="memory-section">
            <h2>Memory</h2>

            <p>Total: {data.memory.total} GB</p>
            <p>Used: {data.memory.used} GB</p>
            <p>Available: {data.memory.available} GB</p>
            <p>Usage: {data.memory.memory_usage_percent}%</p>
          </div>

          {/* DISKS */}
          <div className="disks-section">
            <h2>Disks</h2>

            {data.disks.map((disk) => (
              <div className="disk" key={disk.mountpoint}>
                <h3>{disk.disk}</h3>

                <p>Mountpoint: {disk.mountpoint}</p>
                <p>Filesystem: {disk.filesystem}</p>

                <p>
                  Total: {disk.total_storage} GB
                </p>

                <p>
                  Used: {disk.used_storage} GB
                </p>

                <p>
                  Free: {disk.free_storage} GB
                </p>

                <p>
                  Usage: {disk.storage_usage_percent}%
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
