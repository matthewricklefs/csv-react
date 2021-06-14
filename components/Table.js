import Row from "./Row";
import React from "react";

// export default class Table extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: {},
//     };
//   }

//   handleChangedCell = ({ x, y }, value) => {
//     const modifiedData = Object.assign({}, this.state.data);

//     if (!modifiedData[y]) modifiedData[y] = {};
//     modifedData[y][x] = value;
//     this.setState({ data: modifiedData });
//   };

//   updateCells = () => {
//     this.forceUpdate();
//   };

//   render() {
//     const rows = [];

//     for (let y = 0; y < this.props.y + 1; y += 1) {
//       const rowData = this.state.data[y] || {};
//       rows.push(
//         <Row
//           handleChangedCell={this.handleChangedCell}
//           updateCells={this.updateCells}
//           key={y}
//           y={y}
//           x={this.props.x + 1}
//           rowData={rowData}
//         />
//       );
//     }
//     return <div>{rows}</div>;
//   }
// }

const Table = ({ apiResponse }) => {
  // console.log(apiResponse);
  // for (let i in apiResponse) {
  //   // console.log(apiResponse[i]);
  //   for (let j in apiResponse) {
  //     // console.log(apiResponse[j])
  //   }
  // }

  return (
    <table>
      <thead>
        <tr>
          <th>Date/Time</th>
          <th>Symbol</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {/* {apiResponse.length > 0 ? (
          apiResponse.rows.forEach((row, index) => {
            return (
              <tr key={index}>
                <td>{row.dateTime}</td>
                <td>{row.symbol}</td>
                <td>{row.open}</td>
                <td>{row.high}</td>
                <td>{row.low}</td>
                <td>{row.close}</td>
                <td>{row.volume}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )} */}
      </tbody>
    </table>
  );
};

export default Table;
