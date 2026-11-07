import { useEffect, useState } from "react";
import axios from "axios";

interface HealthResponse {
    success: boolean;
    message: string;
    timestamp: string;
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkBackend = async () => {
            try {
                const response = await axios.get<HealthResponse>("/");
                setHealth(response.data);
            } catch {
                setError("Unable to connect to backend.");
            }
        };

        checkBackend();
    }, []);

    return (
      <div>
        <h1> API Dev Workspace </h1>

        {health && (
          <div>
            <h2>Backend Connected!</h2>
            <p>{health.message}</p>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    );
}

export default App;