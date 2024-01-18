import EmployeeBankCount from "./EmlpoyeeBankCount";

interface EmployeeBankTableRowProps {
  id: number;
  employeeName: string;
  employeeCount: number;
  handleRemoveEmployee: (idToRemove: number) => void;
  handleSelectEmployee: (name: string) => void;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  id,
  employeeName,
  employeeCount,
  handleRemoveEmployee,
  handleSelectEmployee,
}) => {
  return (
    <div className="employee-bank-table-row">
      <div
        className="employee-bank-name"
        onClick={() => handleSelectEmployee(employeeName)}
      >
        <h3>{employeeName}</h3>
      </div>
      <div className="employee-bank-count">
        <h3>{employeeCount}</h3>
      </div>
      <div className="employee-bank-remove-btn">
        <button type="button" onClick={() => handleRemoveEmployee(id)}>
          X
        </button>
      </div>
    </div>
  );
};
export default EmployeeBankTableRow;
