import GoogleMapReact from "google-map-react"
import Marker from "./Marker";

function Map({ apiKey, markers }) {
  const defaults = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 5
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      defaultCenter={defaults.center}
      defaultZoom={defaults.zoom}
    >
      {
        markers.map((marker) => (
          <Marker
            id={marker.key}
            key={marker.key}
            lat={marker.lat}
            lng={marker.lng}
          />
        ))
      }
    </GoogleMapReact>
  );
}

export default Map;
