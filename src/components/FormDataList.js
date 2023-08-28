import React from 'react';
import { useSelector } from 'react-redux';

function FormDataList() {
  const formData = useSelector(state => state.formData);

  return (
    <div className="data-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.firstName}</td>
            <td>{formData.lastName}</td>
            <td>{formData.email}</td>
            <td>{formData.message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FormDataList;
