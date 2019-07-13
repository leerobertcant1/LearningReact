import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = props => {
  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Leave the page?" />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
