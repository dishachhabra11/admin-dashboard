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

// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '600px',
//   height: '280px',
// };
// const center = {
//   lat: 22.7196, // Indore latitude
//   lng: 75.8577, // Indore longitude
// };

// const Map = ({setMap}) => {
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
//         onLoad={setMap}
//       >
//         <Marker position={center} />
//       </GoogleMap></div>
//     </div>
//   );
// };

// export default Map;

import {React,useState,useEffect} from 'react';
import { GoogleMap, useLoadScript,MarkerF as Marker} from '@react-google-maps/api';

import { useMapContext } from './MapContext';


const mapContainerStyle = {
  width: '680px',
  height: '280px',
};




const Map = ({setMap}) => {

  const { filter } = useMapContext();
  const [markers, setMarkers] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 22.7196,
    lng: 75.8577,
  });
  const libraries = ['places'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/maps/markers');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        const newMarkers = data.map((marker) => {
          const latitude = parseFloat(marker.Latitude);
          const longitude = parseFloat(marker.Longitude);

          if (isNaN(latitude) || isNaN(longitude)) {
            console.error('Invalid latitude or longitude:', marker);
            return null; // Skip marker if  position is not valid
          }
          
          debugger
          return {
            id: marker.Address,
            position: {
              lat: latitude,
              lng: longitude,
            },
            ...marker
          };
        });

        console.log('New markers:', newMarkers);
        // Remove markers with invalid positions
        const validMarkers = newMarkers.filter((marker) => marker !== null);
        if(validMarkers.length===0) {console.log("no valid markers")}
        setMarkers(validMarkers);
        console.log('valid markers',validMarkers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData();
    setInterval(fetchData, 1000)

  }, []);

  const defaultProps = {
    center: mapCenter,
    zoom: 18,
  };

  const handleMapDrag = () => {
    // Update the map center when dragging
    setMapCenter({
      lat: mapCenter.lat,
      lng: mapCenter.lng,
    });
  };

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
  const getMarkerColor = (marker, filter) => {
    const unpaidTaxes = [marker['Garbage Tax'], marker['Property Tax'], marker['Water Tax']].filter(
      (tax) => tax === 'Unpaid'
    );

    if (filter === 'all') {
      if (unpaidTaxes.length === 3) {
        return 'red';
      } else if (unpaidTaxes.length === 2) {
        return 'orange';
      } else if (unpaidTaxes.length === 1) {
        return 'yellow';
      } else {
        return 'green';
      }
    }

    if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Unpaid') {
      return 'red';
    } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Unpaid') {
      return 'red';
    } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Unpaid') {
      return 'red';
    } else if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Paid') {
      return 'green';
    } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Paid') {
      return 'green';
    } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Paid') {
      return 'green';
    }

    return 'green'
  };

  
  if (markers.length === 0) {
    return <span>No marker found</span>
  }

  return (
    <div>
     <div className='mt-5 mb-1 ml-5 border border-gray-200 flex-1 '>
    
       <GoogleMap 
       key={markers.length}
        mapContainerStyle={mapContainerStyle}
        zoom={defaultProps.zoom}
        center={defaultProps.center}
        onLoad={setMap}
        // onDragEnd={() => {
        //   const newCenter = {
        //     lat: mapCenter.lat(),
        //     lng: mapCenter.lng(),
        //   };
        //   setMapCenter(newCenter);
        // }}
      >
        {  markers?.map((marker) => (
          <Marker
            key={`${marker.id}-${getMarkerColor(marker,filter)}`}
            position={marker.position}
            icon={{
              url: `https://maps.google.com/mapfiles/ms/icons/${getMarkerColor(marker,filter)}-dot.png`,
              scaledSize: new window.google.maps.Size(20, 20),
            }}
            
          />
        ))}
      </GoogleMap></div>
    </div>
  );
};

export default Map;