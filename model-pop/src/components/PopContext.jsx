import { createContext, useContext, useState } from "react";

// Create context
const PopupContext = createContext();

// Provider component
export function PopupProvider({ children }) {
  const [popup, setpopup] = useState(false);
  return (
    <PopupContext.Provider value={{ popup, setpopup }}>
      {children}
    </PopupContext.Provider>
  );
}

// Custom hook to use the context
export function usePopup() {
  return useContext(PopupContext);
}
