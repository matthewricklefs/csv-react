import Row from "./Row";
import React from "react";

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  handleChangedCell = ({ x, y }, value) => {
    const modifiedData = Object.assign({}, this.state.data);

    if (!modifiedData[y]) modifiedData[y] = {};
    modifedData[y][x] = value;
    this.setState({ data: modifiedData });
  };

  updateCells = () => {
    this.forceUpdate();
  };

  render() {
    const rows = [];

    for (let y = 0; y < this.props.y + 1; y += 1) {
      const rowData = this.state.data[y] || {};
      rows.push(
        <Row
          handleChangedCell={this.handleChangedCell}
          updateCells={this.updateCells}
          key={y}
          y={y}
          x={this.props.x + 1}
          rowData={rowData}
        />
      );
    }
    return <div>{rows}</div>;
  }
}
