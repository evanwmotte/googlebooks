import React from "react";
import { Link } from "react-router-dom";

function Jumbotron(props) {
    return <div className="jumbotron">
  <h1 className="display-4 text-center">{props.title}</h1>
  <hr className="my-4" />
  <p className="text-center">{props.description}</p>
  <p className="lead"></p>
  <Link to={props.link}>{props.saved}</Link>
</div>
}

export default Jumbotron