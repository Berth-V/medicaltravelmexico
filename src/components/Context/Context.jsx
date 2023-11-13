import {useState, createContext} from 'react';

export const Context = createContext();

export const Data = ({children}) => {
  // Destinations/TravelBox/TravelInfo States //
  const [isEnsenada, setIsEnsenada] = useState(false);
  const [isRosarito, setIsRosarito] = useState(false);
  const [isSandiego, setIsSandiego] = useState(false);
  const [isTijuana, setIsTijuana] = useState(false);
  const [isLa, setIsLa] = useState(false);
  return (
    <Context.Provider
      value={{
        /* Destinations/TravelBox/TravelInfo */
        isEnsenada,
        setIsEnsenada,
        isRosarito,
        setIsRosarito,
        isSandiego,
        setIsSandiego,
        isTijuana,
        setIsTijuana,
        isLa,
        setIsLa,
      }}
    >
      {children}
    </Context.Provider>
  );
};
