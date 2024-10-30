import { LatLngExpression } from 'leaflet';

export interface HistoryData {
  year: number;
  events: Event[];
}

export type EventType = 'enthrone' | 'die' | 'combat';

export interface Event {
  title: string;
  description: string;
  position?: LatLngExpression;
  type?: EventType;
}

export interface King {
  name: string;
  startYear: number;
  endYear: number;
  description?: string;
}
