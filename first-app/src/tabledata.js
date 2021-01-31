import React from "react";
export const Datas = ({ datas, loading }) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((value) => {
            const { id, name, email } = value;
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
