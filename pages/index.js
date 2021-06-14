import styles from "../styles/Home.module.css";
import Table from "../components/Table";
import React, { Component } from "react";

const expressUrl = "http://localhost:5000/csv";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      // apiResponse: "",

    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/csv")
      // .then((res) => res.text())
      // .then((res) => this.setState({ apiResponse: res }))
      // .catch((err) => err);
      .then((res) => res.json())
      // .then((json) => json.apiResponse)
      .then((res) => this.setState({ apiResponse: res }));
  }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <div className={styles.container}>
        <Table apiResponse={this.state.apiResponse} />
      </div>
    );
  }
}

export default Home;
