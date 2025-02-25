Below is a rewritten `README.md` that explains the program, the prompts used to achieve the result, and how to securely include your API key via a `.env` file.

---

# Google Maps React Application

This project is a simple React application that displays a Google Map with markers and info panels (InfoWindows) for popular San Francisco locations. The application was built using [Create React App](https://github.com/facebook/create-react-app) and leverages the [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api) package to integrate Google Maps.

## Overview

Throughout the development of this project, we used a series of prompts to build up the functionality:

- **Initial Map Setup:**  
  We started by creating a basic Google Map component in React that displays a map centered on San Francisco using a hardcoded API key.

- **Securing the API Key:**  
  We then refactored the code to store the Google Maps API key in a `.env` file. This prevents accidental exposure of the API key if the code is pushed to GitHub. We explained the necessary steps (such as adding the key to the `.env` file, using the `REACT_APP_` prefix, and adding the file to `.gitignore`).

- **Adding Markers and InfoWindows:**  
  Finally, we expanded the map functionality by adding markers for multiple locations. We implemented click events on these markers to display an InfoWindow (the "big view") with details about each location.

This README explains the entire process so that students can understand how to create a secure, interactive map application with React.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installation

1. **Clone the Repository**  
   Clone this repository to your local machine.

2. **Install Dependencies**  
   Navigate to the project directory and install the required packages:
   ```bash
   npm install
   ```

3. **Get a Google Maps API Key**  
   - Visit the [Google Cloud Console](https://console.cloud.google.com/).
   - Create or select a project.
   - Enable the **Google Maps JavaScript API**.
   - Create an API key and restrict it appropriately (e.g., HTTP referrers and API restrictions).

4. **Set Up the Environment Variable**  
   Create a `.env` file in the root directory of your project (at the same level as `package.json`) and add your API key:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```
   **Note:** Make sure the variable name starts with `REACT_APP_` as required by Create React App.

5. **Secure the .env File**  
   Add the `.env` file to your `.gitignore` file so that your API key is not pushed to GitHub:
   ```gitignore
   .env
   ```

### Running the Application

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.  
The page will reload if you make edits.

#### `npm test`

Launches the test runner in interactive watch mode.  
See the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) section in the Create React App documentation for more information.

#### `npm run build`

Builds the app for production in the `build` folder.  
The build is minified and filenames include the hashes.  
Your app is ready to be deployed!  
See the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for more details.

## Code Structure

### Map Component (MyMap.js)

The `MyMap.js` file contains the main map component which:
- Loads the Google Map using the API key stored in the environment variable.
- Displays markers at several predefined locations.
- Opens an InfoWindow when a marker is clicked, displaying details about that location.

Example snippet from `MyMap.js`:
```jsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: 37.7749,
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
```

### App Component (App.js)

The `App.js` file imports the `MyMap` component and renders it along with a title:
```jsx
import React from 'react';
import MyMap from './MyMap';

function App() {
  return (
    <div className="App">
      <h1>My Google Map</h1>
      <MyMap />
    </div>
  );
}

export default App;
```

## Summary

- **Environment Setup:**  
  We use Create React App and set up a `.env` file to securely store the Google Maps API key.

- **Development Flow:**  
  The prompts guided us from creating a basic map to adding markers, InfoWindows, and securing the API key.

- **Best Practices:**  
  Using environment variables and API key restrictions ensures that our application remains secure even if the code is shared publicly.

This detailed guide should help you understand both the technical setup and the decision-making process behind the project. Happy coding!

---