import React, { useEffect, useState } from "react";

const CoronaDetails = () => {
  const [data, currentData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://data.covid19india.org/data.json");
    const actualData = await data.json();
    // console.log(actualData.statewise);
    currentData(actualData.statewise);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      {
        <div className="container-fluid mt-4 ">
          <div className="bg-dark p-3">
            <h1 className="h1 text-center text-danger">
              India Corona Virus Cases
            </h1>
          </div>
          <div className="bg-dark">
            <div className="table-responsive ">
              <table className="table table-hover table-dark table-striped">
                <thead>
                  <tr className="table-dark">
                    <th className="text-danger">State</th>
                    <th className="text-danger">Active</th>
                    <th className="text-danger">Confirmed</th>
                    <th className="text-danger">Recovered</th>
                    <th className="text-danger">Deaths</th>
                    <th className="text-danger">Delta Confirmed</th>
                    <th className="text-danger">Delta Deaths</th>
                    <th className="text-danger">Delta Recovered</th>
                    <th className="text-danger">Last Updated Time</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.state}</td>
                        <td>{value.active}</td>
                        <td>{value.confirmed}</td>
                        <td>{value.recovered}</td>
                        <td>{value.deaths}</td>
                        <td>{value.deltaconfirmed} </td>
                        <td>{value.deltadeaths} </td>
                        <td>{value.deltarecovered} </td>
                        <td>{value.lastupdatedtime} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CoronaDetails;
