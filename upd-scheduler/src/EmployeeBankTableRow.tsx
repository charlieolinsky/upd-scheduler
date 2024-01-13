import EmployeeBankCount from "./EmlpoyeeBankCount";
import EmployeeBankName from "./EmployeeBankName";

interface EmployeeBankTableRowProps {}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = () => {
  return (
    <>
      <div className="employee-bank-name">
        <EmployeeBankName />
      </div>
      <div className="employee-bank-count">
        <EmployeeBankCount />
      </div>
      <div className="employee-bank-remove-btn">
        <button type="button"> X </button>
      </div>
    </>
  );
};
export default EmployeeBankTableRow;
