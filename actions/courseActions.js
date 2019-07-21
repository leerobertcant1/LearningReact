import dispatcher from "../src/appDispatcher";
import * as courseApi from "../src/api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}
