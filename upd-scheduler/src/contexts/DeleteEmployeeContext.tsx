import { createContext, useContext, Dispatch, SetStateAction } from "react";

// Define the types for the state context
interface DeleteEmployeeContextType {
  deleteId: number;
  setDeleteId: Dispatch<SetStateAction<number>>;
}

// Create the context with a default value
export const DeleteEmployeeContext = createContext<DeleteEmployeeContextType>({
  deleteId: -999,
  setDeleteId: () => {}, // default (no-op) function for setSelectedEmployee
});

// Create a custom hook for easy context usage
export const useDeleteEmployee = () => useContext(DeleteEmployeeContext);
