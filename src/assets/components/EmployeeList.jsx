import React from 'react';
import SearchBar from './SearchBar.jsx'; 
import EmployeeListItem from './EmployeeListItem.jsx';

const EmployeeList = ({ employees }) => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees); // Maintain filtered state

  const handleUpdateFilteredEmployees = (filteredData) => {
    setFilteredEmployees(filteredData);
  };

  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <SearchBar
        employees={employees} // Pass all employees
        onUpdateFilteredEmployees={handleUpdateFilteredEmployees} // Pass update function
      />
      {filteredEmployees.map((employee) => (
        <EmployeeListItem key={employee.name} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
