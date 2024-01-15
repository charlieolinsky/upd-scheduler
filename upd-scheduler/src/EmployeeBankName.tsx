import "./styles/EmployeeBank.css";

interface EmployeeBankNameProps {
  rowIndex: number;
}

const EmployeeBankName: React.FC<EmployeeBankNameProps> = ({ rowIndex }) => {
  return (
    <>
      <div className="employee-bank-name-input">
        <input type="text" placeholder="Enter Name:"></input>
      </div>
    </>
  );
};
export default EmployeeBankName;
