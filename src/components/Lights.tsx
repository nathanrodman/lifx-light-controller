import { useEffect, useState } from "preact/hooks";
import { getLights } from "../lib/lights";
import { Light } from "../types";

export function Lights() {
  const [lights, setLights] = useState<Light[]>();

  useEffect(() => {
    if (!lights) {
      getLights().then((fetchedLights) => setLights(fetchedLights));
    }
  }, [lights]);

  return (
    <div>
      <h2>Lights</h2>
      <ul>
        {lights?.map((light) => (
          <li key={light.uuid}>{light.label}</li>
        ))}
      </ul>
    </div>
  );
}
