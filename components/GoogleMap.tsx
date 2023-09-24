'use client';

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

import { openMapsApp } from '@/lib/openMapApp';
import customMarkerIcon from '@/public/images/custom-marker.svg';

type GoogleMapsApiKey = string;
interface MapOptions {
  mapId: string;
  zoom: number;
  mapContainerClassName: string;
  mapTypeControl: false;
}

export default function GoogleMapView() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as GoogleMapsApiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const mapOptions = {
  mapId: process.env.NEXT_PUBLIC_MAP_ID,
  zoom: 15,
  mapContainerClassName: 'aspect-square w-full max-w-sm',
  mapTypeControl: false,
} as MapOptions;

function Map() {
  const center = useMemo(() => ({ lat: 47.20311037629455, lng: -1.576779813264626 }), []);
  return (
    <GoogleMap zoom={15} options={mapOptions} center={center} mapContainerClassName="aspect-square w-full max-w-sm">
      <Marker
        onClick={openMapsApp}
        icon={{
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          url: customMarkerIcon.src,
          scaledSize: new window.google.maps.Size(55, 55),
        }}
        position={center}
      />
    </GoogleMap>
  );
}
