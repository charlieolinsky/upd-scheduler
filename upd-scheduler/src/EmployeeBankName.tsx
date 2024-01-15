interface EmployeeBankNameProps {
  rowIndex: number;
}

const EmployeeBankName: React.FC<EmployeeBankNameProps> = ({ rowIndex }) => {
  return (
    <>
      <div>{rowIndex}</div>
    </>
  );
};
export default EmployeeBankName;
