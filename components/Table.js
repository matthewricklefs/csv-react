import Row from "./Row";
import styles from "../styles/Table.module.css";
import React, { useState, useEffect } from "react";

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
  const [tableData, setTableData] = useState("");

  useEffect(() => {
    setTableData(apiResponse);
  }, [apiResponse]);

  return (
    <>
      <table className={styles.table}>
        {/* {console.log(`this is the tableData object:`, tableData)}
        {console.log(`these are the columns:`, tableData.columns)}
        {console.log(`these are the rows:`, tableData.rows)} */}
        {tableData.columns ? (
          tableData.columns.cells.map((columnName) => {
            return (
              <th className={styles.th}>
                <th className={styles.th}>{columnName.value}</th>
              </th>
            );
          })
        ) : (
          <tr className={styles.tr}>
            <td className={styles.td} colSpan="5">
              Loading...
            </td>
          </tr>
        )}

        <tbody>
          {tableData.rows ? (
            tableData.rows.map((row) => {
              return (
                <tr className={styles.tr}>
                  {row.cells.map((cell) => {
                    return <td className={styles.td}>{cell.value}</td>;
                  })}
                </tr>
              );
            })
          ) : (
            <tr className={styles.tr}>
              <td className={styles.td} colSpan="5">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
