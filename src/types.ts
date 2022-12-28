export interface Color {
  hue: number;
  saturation: number;
  kelvin: number;
}

export interface Light {
  id: string;
  uuid: string;
  label: string;
  connected: boolean;
  power: "on" | "off";
  color: Color;
  brightness: number;
  group: Group;
  zones?: {
    count: number;
    zones: Zone[];
  };
  effect: string;
  location: Location;
  product: Product;
  last_seen: string;
  seconds_since_seen: string;
}

interface Group {
  id: string;
  name: string;
}

interface Location {
  id: string;
  name: string;
}

interface Zone extends Color {
  brightness: number;
  zone: number;
}

interface Product {
  name: string;
  identifier: string;
  company: string;
  vendor_id: number;
  product_id: number;
  capabilities: Capabilities;
}

interface Capabilities {
  has_color: boolean;
  has_variable_color_temp: boolean;
  has_ir: boolean;
  has_hev: boolean;
  has_chain: boolean;
  has_matrix: boolean;
  has_multizone: boolean;
  min_kelvin: number;
  max_kelvin: number;
}

export interface Scene {
  id: string;
  name: string;
  account: {
    uuid: string;
  };
  states: SceneState[];
}

type SceneState = SceneStateBulb | SceneStateZone;

type SceneStateBase = {
  selector: string;
  power: "on" | "off";
};

interface SceneStateBulb extends SceneStateBase {
  color: Color;
  brightness: number;
}

interface SceneStateZone extends SceneStateBase {
  zones: SceneZone[];
}

interface SceneZone {
  start_index: number;
  end_index: number;
  state: {
    serial_number: string;
    brightness: number;
    color: Color;
  };
}
