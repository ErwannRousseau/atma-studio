function initMap(): void {
  new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      mapId: 'a28be31d55229f5e',
      center: { lat: 48.85, lng: 2.35 },
      zoom: 12,
    } as google.maps.MapOptions
  );
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
