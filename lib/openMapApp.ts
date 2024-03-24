export const openMapsApp = () => {
  const address: string = "6+square+Commodore+Guiné,44100+Nantes";

  const userAgent: string =
    typeof window !== "undefined" ? window.navigator.userAgent : "";

  const confirmationMessage: string =
    "Voulez-vous ouvrir l'adresse dans un plan ?";
  const userConfirmed = window.confirm(confirmationMessage);

  if (userConfirmed) {
    if (userAgent.includes("Mac" || "iPhone")) {
      const appleMapsUrl = `maps://maps.apple.com/?q=${address}`;
      window.open(appleMapsUrl, "_blank");
      return;
    }

    if (userAgent.includes("Android")) {
      const androidMap = `geo:0,0?q=${address}`;
      window.open(androidMap, "_blank");
      return;
    }

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(googleMapsUrl, "_blank");
  }
};
