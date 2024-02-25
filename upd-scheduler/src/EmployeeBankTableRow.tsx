import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface EmployeeBankTableRowProps {
  rowId: number;
  employeeName: string;
  employeeCount: number;
  handleRemoveEmployee: (idToRemove: number) => void;
  handleSelectEmployee: (name: string, id: number) => void;
  isSelected: boolean;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  rowId,
  employeeName,
  employeeCount,
  handleRemoveEmployee,
  handleSelectEmployee,
  isSelected,
}) => {
  const style = {
    backgroundColor: isSelected ? "#fdff00" : "white",
    // color: isSelected ? "white" : "black",
    padding: "0px 8px 0px 5px",
    borderRadius: "5px",
  };

  return (
    <div className="employee-bank-table-row">
      <div
        className="employee-bank-name"
        onClick={() => handleSelectEmployee(employeeName, rowId)}
      >
        <h3 style={style}>{employeeName}</h3>
      </div>
      <div className="employee-bank-count">
        <h3>{employeeCount}</h3>
      </div>
      <div className="employee-bank-btn" id="remove-btn">
        <button type="button" onClick={() => handleRemoveEmployee(rowId)}>
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </div>
  );
};
export default EmployeeBankTableRow;
