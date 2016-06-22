import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoarsesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCoarses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoarsesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
