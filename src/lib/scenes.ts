import { Scene } from "../types";

export async function getScenes() {
  const response = await fetch("/.netlify/functions/getScenes");
  const scenes: Scene[] = await response.json();

  return scenes;
}
