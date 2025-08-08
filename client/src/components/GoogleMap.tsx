import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleMapProps {
  center: { lat: number; lng: number };
  className?: string;
}

export default function GoogleMap({ center, className = "" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 17,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });

      // Add marker
      new window.google.maps.Marker({
        position: center,
        map: map,
        title: 'FeedBack 본사',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 16 42 16 42C16 42 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z" fill="#3B82F6"/>
              <circle cx="16" cy="16" r="8" fill="white"/>
              <circle cx="16" cy="16" r="4" fill="#3B82F6"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(32, 42),
          anchor: new window.google.maps.Point(16, 42)
        }
      });

      mapInstanceRef.current = map;
    };

    loadGoogleMaps();

    return () => {
      // Cleanup if needed
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [center]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
}