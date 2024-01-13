import EmployeeBankCount from "./EmlpoyeeBankCount";
import EmployeeBankName from "./EmployeeBankName";

interface EmployeeBankTableRowProps {
  removeEmployee: () => void;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  removeEmployee,
}) => {
  return (
    <>
      <div className="employee-bank-name">
        <EmployeeBankName />
      </div>
      <div className="employee-bank-count">
        <EmployeeBankCount />
      </div>
      <div className="employee-bank-remove-btn">
        <button type="button" onClick={removeEmployee}>
          X
        </button>
      </div>
    </>
  );
};
export default EmployeeBankTableRow;
