import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="jumbotron">
      <h2>Page Not Found</h2>
      <br />
      <p>
        <Link to="/" className="btn btn-primary">
          {" "}
          Back To Home{" "}
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
