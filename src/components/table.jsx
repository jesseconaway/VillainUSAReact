import React from "react";

function Table({ data, ...props }) {
  const specsArr = Object.entries(data);
  return (
    <table>
      <tbody>
        {specsArr.map((item) => (
          <tr key={item[0]}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        ))}
        <tr>
          <td>
            <strong>{Object.keys(props)[0]}</strong>
          </td>
          <td>
            <strong>{props.Price}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
