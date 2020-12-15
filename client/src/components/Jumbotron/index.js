import React from "react";
import { Link } from "react-router-dom";

function Jumbotron() {
    return <div class="jumbotron">
  <h1 class="display-4 text-center">Welcome to GoogleBooks</h1>
  <hr class="my-4" />
  <p class="text-center">Search around GoogleBooks and save the ones that interest you so you can look at them later!</p>
  <p class="lead"></p>
  <Link to="/saved">See your saved books</Link>
</div>
}

export default Jumbotron