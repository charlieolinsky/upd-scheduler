import { createContext, useContext, Dispatch, SetStateAction } from "react";

// Define the type for the context
interface SelectedEmployeeContextType {
  selectedEmployee: string;
  setSelectedEmployee: Dispatch<SetStateAction<string>>;
}

// Create the context with a default value
export const SelectedEmployeeContext =
  createContext<SelectedEmployeeContextType>({
    selectedEmployee: "NaN", // default value for selectedEmployee
    setSelectedEmployee: () => {}, // default (no-op) function for setSelectedEmployee
  });

// Create a custom hook for easy context usage
export const useSelectedEmployee = () => useContext(SelectedEmployeeContext);
