import { useEffect, useState } from "preact/hooks";
import { getScenes } from "../lib/scenes";
import { Scene } from "../types";

export function Scenes() {
  const [scenes, setScenes] = useState<Scene[]>();

  useEffect(() => {
    if (!scenes) {
      getScenes().then((fetchedScenes) => setScenes(fetchedScenes));
    }
  }, [scenes]);

  return (
    <div>
      <h2>Scenes</h2>
      <ul>
        {scenes?.map((scene) => (
          <li key={scene.id}>{scene.name}</li>
        ))}
      </ul>
    </div>
  );
}
