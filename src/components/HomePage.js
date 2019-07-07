import React from "react";

//React component instantiated by function
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Some title</h1>
      <p>A random paragraph here.</p>
      <a href="/about">About</a>
    </div>
  );
}

export default HomePage;
