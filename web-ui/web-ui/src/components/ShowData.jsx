import React, { useState } from "react";
import { Selected, UnSelected } from "./../assets/index.js";

const ShowData = (props) => {
  const [selectedId, setSelectedId] = useState();
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(props.data[0]).map((value, index) => {
              if (index == 0) return <img src={UnSelected} />;
              else return <td>{value}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((obj) => {
            return (
              <tr className="trdata">
                {Object.values(obj).map((value, index) => {
                  if (index == 0) {
                    if (obj.id == selectedId) return <img src={Selected} />;
                    else return <img src={UnSelected} />;
                  } else
                    return (
                      <td onClick={() => setSelectedId(obj.id)}>{value}</td>
                    );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
