import { Light } from "../types";

export async function getLights() {
  const response = await fetch("/.netlify/functions/getLights");
  const lights: Light[] = await response.json();

  return lights;
}
