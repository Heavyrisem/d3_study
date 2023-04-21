export interface KoreaGeoChartType {
  type: string;
  features: Feature[];
  name: string;
  crs: Crs;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Properties {
  name: string;
  base_year: string;
  name_eng: string;
  code: string;
}

export interface Geometry {
  type: string;
  coordinates: (number[] | number)[][][];
}
