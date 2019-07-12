import React from "react";

function Header() {
  return (
    <nav>
      <a href="/" title="Home">
        Home
      </a>{" "}
      |{" "}
      <a href="/about" Title="About">
        About
      </a>{" "}
      |{" "}
      <a href="/courses" Title="Courses">
        Courses
      </a>
    </nav>
  );
}

export default Header;
