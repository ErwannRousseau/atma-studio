export const openMapsApp = () => {
  const address = '6+square+Commodore+Guiné,44100+Nantes';

  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';

  const confirmationMessage = "Voulez-vous ouvrir l'adresse dans un plan ?";
  const userConfirmed = window.confirm(confirmationMessage);

  if (userConfirmed) {
    if (userAgent.includes('Mac' || 'iPhone')) {
      const appleMapsUrl = `maps://maps.apple.com/?q=${address}`;
      window.open(appleMapsUrl, '_blank');
      return;
    }
    if (userAgent.includes('Android')) {
      const androidMap = `geo:0,0?q=${address}`;
      window.open(androidMap, '_blank');
      return;
    } else {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
      window.open(googleMapsUrl, '_blank');
    }
  }
};
