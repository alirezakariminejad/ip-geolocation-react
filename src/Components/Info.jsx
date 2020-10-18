import React from "react";

export default function info(props) {
  return (
    <div className="card-container">
      <span className="pro">IP-Geo</span>
      <img className="round" src={props.info.country_flag} alt={props.info.country} />
      <h3>{props.info.country}</h3>
      <h5>{props.info.city}</h5>
      <h6>ISP : {props.info.isp}</h6>
      <div className="skills">
        <h5>IP : {props.info.ip}</h5>
        <h5>Latitude : {props.info.latitude}</h5>
        <h5>Longitude: {props.info.longitude}</h5>
      </div>
    </div>
  );
}
