'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useContext, useEffect, useState } from 'react';
import { HistoryContext } from './HistoryContext';
import { LatLngExpression } from 'leaflet';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';

interface MarkerData {
  id: number;
  position: LatLngExpression;
  text: string;
}

const markerData: MarkerData[] = [
  { id: 1000, position: [37.5665, 126.978], text: '서울' },
  { id: 1200, position: [35.1796, 129.0756], text: '부산' },
  { id: 1500, position: [35.1595, 126.8526], text: '광주' },
  { id: 1800, position: [37.4563, 126.7052], text: '인천' },
  { id: 2000, position: [33.4996, 126.5312], text: '제주' },
];

export const MapWithLeaflet = () => {
  const { timelineValue } = useContext(HistoryContext);
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    const activeMarkers = markerData.filter(
      (marker) => Math.abs(marker.id - timelineValue) < 200,
    );
    setMarkers(activeMarkers);
  }, [timelineValue]);

  return (
    <MapContainer
      center={[37.5326, 127.024612]} // 서울 중심 좌표
      zoom={7}
      scrollWheelZoom={false}
      className="h-[calc(100vh-56px)] w-full"
    >
      <TileLayer
        className="grayscale"
        url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        attribution='&copy; <a href="https://maps.stamen.com">Stamen Design</a>'
      />

      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
