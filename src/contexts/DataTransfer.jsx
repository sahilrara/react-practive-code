import { createContext, useState } from "react";

export const DataTransferProvider = createContext();

export default function DataFixProvider({ children }) {
  const showData = [1, "new-data", "hello"];
  const [show, setShow] = useState(false);
  const value = { showData, show, setShow };
  return (
    <DataTransferProvider.Provider value={value}>
      {children}
    </DataTransferProvider.Provider>
  );
}
