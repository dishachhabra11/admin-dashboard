import React, { createContext, useContext, useState } from 'react';

const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [filter, setFilter] = useState('');

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <MapContext.Provider value={{ filter, updateFilter }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  return useContext(MapContext);
};
