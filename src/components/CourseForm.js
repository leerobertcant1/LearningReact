import React from "react";
import TextInput from "./Common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="title"
        onChange={props.onChange}
        name="title"
        className="form-control"
        value={props.course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value="{props.course.authorId || }"
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        label="category"
        name="category"
        onChange={props.onChange}
        className="form-control"
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
