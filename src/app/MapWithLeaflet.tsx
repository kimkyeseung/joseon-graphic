'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const MapWithLeaflet = () => {
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
    </MapContainer>
  );
};
