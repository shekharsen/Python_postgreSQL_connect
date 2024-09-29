import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/showData").then((data) => {
  //     data.json().then((parsedData) => {
  //       setData(parsedData);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5000/showData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <React.Fragment>
      <div>
        {data.map((val) => (
          // <p key={val}>
          //   {" "}
          //   {val[0]} {val[1]} {val[2]} {val[3]}{" "}
          // </p>
          <ul key={val[0]}>
            <li key={val[0]}>
              {" "}
              {val[0]} {val[1]} {val[2]} {val[3]}{" "}
            </li>
          </ul>
        ))}
      </div>
    </React.Fragment>
  );
}

export default FetchData;
