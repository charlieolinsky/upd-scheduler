import "./styles/EmployeeBank.css";

interface EmployeeBankNameProps {
  employeeName: string;
}

const EmployeeBankName: React.FC<EmployeeBankNameProps> = ({
  employeeName,
}) => {
  return (
    <>
      <div className="employee-bank-name">
        <h3>{employeeName}</h3>
      </div>
    </>
  );
};
export default EmployeeBankName;
