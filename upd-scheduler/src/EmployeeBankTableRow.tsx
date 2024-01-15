import EmployeeBankCount from "./EmlpoyeeBankCount";
import EmployeeBankName from "./EmployeeBankName";

interface EmployeeBankTableRowProps {
  id: number;
  removeEmployee: (idToRemove: number) => void;
  handleSelectEmployee: (selectId: number) => void;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  id,
  removeEmployee,
  handleSelectEmployee,
}) => {
  return (
    <div className="employee-bank-table-row">
      <div
        className="employee-bank-name"
        onClick={() => handleSelectEmployee(id)}
      >
        <EmployeeBankName rowIndex={id} />
      </div>
      <div className="employee-bank-count">
        <EmployeeBankCount />
      </div>
      <div className="employee-bank-remove-btn">
        <button type="button" onClick={() => removeEmployee(id)}>
          X
        </button>
      </div>
    </div>
  );
};
export default EmployeeBankTableRow;
