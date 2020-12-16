import React from "react";
import { Link } from "react-router-dom";

function Jumbotron(props) {
    return <div className="jumbotron">
  <h1 className="display-4 text-center">Welcome to GoogleBooks</h1>
  <hr className="my-4" />
  <p className="text-center">Search around GoogleBooks and save the ones that interest you so you can look at them later!</p>
  <p className="lead"></p>
  <button onClick={() => console.log(props.state)}></button>
  <Link to="/saved">See your saved books</Link>
</div>
}

export default Jumbotron