import React, { Component } from "react";
import Info from "./Info";
import getInfo from "../Services/getInfo";
import Loader from "react-loader-spinner";

export default class GetIp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    getInfo().then((info) => this.setState({ info: info, isLoading: false }));
  }

  render() {
    var isLoading = this.state.isLoading;
    return (
      <>
        
        {isLoading && <Loader type="Puff" color="#00BFFF" height={100} width={100} />}

        {!isLoading && <Info info={this.state.info} />}
        
      </>
    );
  }
}
