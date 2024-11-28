import { useMap } from 'react-leaflet';

export function Indicator() {
  const map = useMap();
  console.log(map);
  return null;
}
