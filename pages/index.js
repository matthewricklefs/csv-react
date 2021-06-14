import styles from "../styles/Home.module.css";
import Table from "../components/Table";
import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      // we want to send updated rows and columns
      data: "",
    };
  }

  callAPI() {
    fetch("http://localhost:9000/", { withCredentials: true })
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  postData() {}

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className={styles.container}>
        <Table x={4} y={4} />

        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}
