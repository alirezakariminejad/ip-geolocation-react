import React, { Component } from "react";
import Info from "./Info";
import Loader from "react-loader-spinner";

export default class GetIp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      isLoading: true,
    };
  }

  async getIp() {
    var response = await fetch("https://api64.ipify.org?format=json");
    var ip = (await response.json()).ip;
    return ip;
  }

  async getInfo() {
    var ip = await this.getIp();
    var response = await fetch(`http://ipwhois.app/json/${ip}`);
    var info = await response.json();
    return info;
  }

  componentDidMount() {
    this.getInfo().then((info) => this.setState({ info: info, isLoading: false }));
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
