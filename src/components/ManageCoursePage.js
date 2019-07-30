import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm.js";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = props => {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  //Re-run each time React re-renders.
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;

    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
