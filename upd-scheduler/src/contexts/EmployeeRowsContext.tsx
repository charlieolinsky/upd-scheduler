import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the employee row
interface EmployeeRow {
  id: number;
  name: string;
  count: number;
  blocks: Array<number>;
}

// Define the type for the context
interface EmployeeRowsContextType {
  employeeRows: EmployeeRow[];
  setEmployeeRows: Dispatch<SetStateAction<EmployeeRow[]>>;
}

// Create the context with a default value
export const EmployeeRowsContext = createContext<EmployeeRowsContextType>({
  employeeRows: [],
  setEmployeeRows: () => {},
});

// Create a custom hook for easy context usage
export const useEmployeeRows = () => useContext(EmployeeRowsContext);
