import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "../actions/actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    //Tells all stores course created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.loadCourses,
      courses
    });
  });
}
