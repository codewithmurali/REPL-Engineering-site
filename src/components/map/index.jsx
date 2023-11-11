import React, { useEffect } from "react";

function GoogleMap({ latitude, longitude }) {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    ifameData.src = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`;
  });
  return (
    <div>
      <iframe id="iframeId" height="480px" width="100%" title="map"></iframe>
    </div>
  );
}
export default GoogleMap;
