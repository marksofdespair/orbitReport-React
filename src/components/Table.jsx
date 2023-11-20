import './styling.css'
import React from "react";

// Arrow func with sat as a property
const Table = ({ sat }) => {
  return (
    <table>
      {/* Table header */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      {/* Table Body*/}
      <tbody>
        {/* Map over the sat prop, the array of satellite data in satData.jsx*/}
        {sat.map((data) => (
          // For each satellite data, create a table row with a unique key based on 'id'
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            {/* Display satellite status in a table cell, with text color being based on 'operational' property */}
            {/* If 'operational' is true, display 'Active'; otherwise, display 'Inactive', using ternary op  ----v */}
            <td style={{ color: data.operational ? 'green' : 'red' }}>{data.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;