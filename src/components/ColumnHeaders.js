import React from "react";

function ColumnHeaders() {
  return (
    <tr>
      <th>
        <input type="checkbox" />
      </th>
      <th>Contact</th>
      <th>
        Total Value<i className="fas fa-caret-down ml-2"></i>
      </th>
      <th>Location</th>
      <th>Deals</th>
      <th>Tags</th>
      <th>
        <i class="fas fa-ellipsis-h"></i>
      </th>
    </tr>
  );
}

export default ColumnHeaders;
