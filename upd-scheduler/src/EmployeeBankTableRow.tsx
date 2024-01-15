import EmployeeBankCount from "./EmlpoyeeBankCount";
import EmployeeBankName from "./EmployeeBankName";

interface EmployeeBankTableRowProps {
  id: number;
  removeEmployee: (idToRemove: number) => void;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  id,
  removeEmployee,
}) => {
  return (
    <>
      <div className="employee-bank-name">
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
    </>
  );
};
export default EmployeeBankTableRow;
