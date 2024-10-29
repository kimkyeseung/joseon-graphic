import { LatLngExpression } from 'leaflet';

export interface HistoryData {
  year: number;
  events: Event[];
}

export interface Event {
  title: string;
  description: string;
  position?: LatLngExpression;
}

export interface King {
  name: string;
  startYear: number;
  endYear: number;
  description?: string;
}
