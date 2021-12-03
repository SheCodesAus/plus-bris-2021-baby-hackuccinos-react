import React from "react";
import { Link } from "react-router-dom";
import "./SuccessCard.css";

function SuccessCard() {
  return (
    <div class="success">
      <div>
        <h2>Cupcake Success!</h2>
      </div>
      <div>
        <Link to="/">
          <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/success-cupcake-coder.png"></img>
        </Link>
      </div>
      <div>
        <p>
          You have successfully registered. Check out our{" "}
          <Link to="/coders">Coders Page</Link> to see yourself amongst your
          fellow tribe. Or <Link to="/"> head home.</Link>
        </p>
      </div>
    </div>
  );
}

export default SuccessCard;
