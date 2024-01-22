// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '700px',
//   height: '239px',
// };
// const center = {
//   lat: 22.7196, // Indore latitude
//   lng: 75.8577, // Indore longitude
// };

// const App = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyAik0IVosernmdG7ppjmMbuRdsLdne3vjM',
//     libraries,
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   return (
//     <div>
//      <div className='mt-5 mb-1 ml-5 border border-gray-200 flex-1'> <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={10}
//         center={center}
//       >
//         <Marker position={center} />
//       </GoogleMap></div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '600px',
  height: '280px',
};
const center = {
  lat: 22.7196, // Indore latitude
  lng: 75.8577, // Indore longitude
};

const Map = ({setMap}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAik0IVosernmdG7ppjmMbuRdsLdne3vjM',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
     <div className='mt-5 mb-1 ml-5 border border-gray-200 flex-1'> <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onLoad={setMap}
      >
        <Marker position={center} />
      </GoogleMap></div>
    </div>
  );
};

export default Map;