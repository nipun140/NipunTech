import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";

function Common(props) {
  return (
    <div id="mainContainer" className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1>
            {props.title} <span>{props.compName}</span>
          </h1>
          <p>{props.text}</p>
          <Button style={{ width: "50%" }} variant="outlined">
            {props.btnText}
          </Button>
        </div>
        <div className="col-md-6 mt-5">
          <img src={props.imgUrl} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Common;
