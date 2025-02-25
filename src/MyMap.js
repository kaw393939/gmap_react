import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: 37.7749,  // Center on San Francisco
  lng: -122.4194
};

const locations = [
  { id: 1, name: 'Golden Gate Bridge', position: { lat: 37.8199, lng: -122.4783 }, description: "A famous bridge in San Francisco." },
  { id: 2, name: 'Alcatraz Island', position: { lat: 37.8267, lng: -122.4230 }, description: "Historic former prison island." },
  { id: 3, name: "Fisherman's Wharf", position: { lat: 37.8080, lng: -122.4177 }, description: "Popular tourist area with seafood and shops." },
  { id: 4, name: 'Union Square', position: { lat: 37.7879, lng: -122.4074 }, description: "Central shopping and cultural hub." },
  { id: 5, name: 'Twin Peaks', position: { lat: 37.7544, lng: -122.4477 }, description: "Great panoramic views of the city." },
];

function MyMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {locations.map(location => (
          <Marker 
            key={location.id} 
            position={location.position} 
            onClick={() => setSelectedMarker(location)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              <p>{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyMap);
