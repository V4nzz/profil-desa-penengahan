import React, { createContext, useContext } from 'react';
import { useDesaData } from '../hooks/useDesaData';

const DesaContext = createContext();

export const DesaProvider = ({ children }) => {
  const { data, loading, error } = useDesaData();

  return (
    <DesaContext.Provider value={{ data, loading, error }}>
      {children}
    </DesaContext.Provider>
  );
};

export const useDesaContext = () => {
  const context = useContext(DesaContext);
  if (!context) {
    throw new Error('useDesaContext must be used within DesaProvider');
  }
  return context;
};
