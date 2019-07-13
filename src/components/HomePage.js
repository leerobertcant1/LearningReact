import React from "react";
import { Link } from "react-router-dom";

//React component instantiated by function
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Home page</h1>
      <p>A random paragraph here.</p>
      <Link to="about" className="btn btn-primary">
        {" "}
        About{" "}
      </Link>
    </div>
  );
}

export default HomePage;
