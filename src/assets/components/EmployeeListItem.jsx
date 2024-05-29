import React from 'react';

const EmployeeListItem = ({ employee }) => {
  return (
    <div className="employee-list-item">
      <h3>{employee.name}</h3>
      <p>{employee.title}</p>
      <ul>
        <li>Office Phone: {employee.officePhone}</li>
        <li>Mobile Number: {employee.mobileNumber}</li>
        <li>SMS: {employee.sms}</li>
        <li>Email: {employee.email}</li>
      </ul>
    </div>
  );
};

export default EmployeeListItem;
