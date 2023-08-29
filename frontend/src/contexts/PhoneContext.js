// contexts/PhoneContext.js
import { createContext, useContext, useState } from 'react';

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [selectedPhone, setSelectedPhone] = useState(null);

  return (
    <PhoneContext.Provider value={{ selectedPhone, setSelectedPhone }}>
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhoneContext = () => {
  return useContext(PhoneContext);
};
