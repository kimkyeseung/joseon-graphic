'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useContext, useEffect, useState } from 'react';
import { HistoryContext } from './HistoryContext';
import { LatLngExpression } from 'leaflet';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { Icon } from 'leaflet';
import { Indicator } from '@/components/Indicator';

const Red_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36.059" height="36.059" viewBox="0 0 36.059 36.059" style="transform:rotate(${0}deg)">
    <defs>
      <filter id="Path_10080" x="0" y="0" width="36.059" height="36.059" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="2.5" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Group_8038" data-name="Group 8038" transform="translate(5719.5 1106.5)">
      <rect id="Rectangle_2670" data-name="Rectangle 2670" width="21" height="21" transform="translate(-5712 -1099)" fill="none"/>
      <g transform="matrix(1, 0, 0, 1, -5719.5, -1106.5)" filter="url(#Path_10080)">
        <path id="Path_10080-2" data-name="Path 10080" d="M15.4,12.766a6.414,6.414,0,0,0,1.781-5.634l-.446-2.55-2.55-.446A6.414,6.414,0,0,0,8.553,5.916L6.746,7.723c.234-.232-.845.866-.626.626l-2.96,2.96a2.644,2.644,0,0,0,0,3.735l3.114,3.114a2.644,2.644,0,0,0,3.735,0l2.96-2.96Z" transform="translate(19.2 2.96) rotate(45)" fill="${'red'}"/>
      </g>
    </g>
  </svg>
  `)}`;
  
const icon = new Icon({
  iconUrl: Red_MARKER,
  iconSize: [40, 40],
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
});

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

const MapWithLeaflet = () => {
  const { timelineValue } = useContext(HistoryContext);
  // const [markers, setMarkers] = useState<MarkerData[]>([]);

  // useEffect(() => {
  //   const activeMarkers = markerData.filter(
  //     (marker) => Math.abs(marker.id - timelineValue) < 200,
  //   );
  //   setMarkers(activeMarkers);
  // }, [timelineValue]);

  return (
    <MapContainer
      center={[37.5326, 127.024612]} // 서울 중심 좌표
      zoom={7}
      scrollWheelZoom={false}
      zoomControl={false}
      className="h-[calc(100vh-56px)] w-full"
    >
      <TileLayer
        className="grayscale"
        url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        attribution='&copy; <a href="https://maps.stamen.com">Stamen Design</a>'
      />

      {markerData.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={icon}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}
      <Indicator />
    </MapContainer>
  );
};

export default MapWithLeaflet;
