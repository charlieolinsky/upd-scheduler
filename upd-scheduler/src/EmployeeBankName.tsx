import "./styles/EmployeeBank.css";

interface EmployeeBankNameProps {
  setName: (name: string) => void;
}

const EmployeeBankName: React.FC<EmployeeBankNameProps> = ({ setName }) => {
  return (
    <>
      <div className="employee-bank-name-input">
        <input
          type="text"
          placeholder="Enter Name:"
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
    </>
  );
};
export default EmployeeBankName;
