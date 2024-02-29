import { createContext, useContext, Dispatch, SetStateAction } from "react";

//Define the basic type for your state array
interface Employee {
  name: string;
  id: number;
}

// Define the types for the state context
interface SelectedEmployeeContextType {
  selectedEmployee: Employee;
  setSelectedEmployee: Dispatch<SetStateAction<Employee>>;
}

// Create the context with a default value
export const SelectedEmployeeContext =
  createContext<SelectedEmployeeContextType>({
    selectedEmployee: { name: "NaN", id: -1 }, // default value for selectedEmployee
    setSelectedEmployee: () => {}, // default (no-op) function for setSelectedEmployee
  });

// Create a custom hook for easy context usage
export const useSelectedEmployee = () => useContext(SelectedEmployeeContext);
