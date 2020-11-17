import {
  WORKOUTS_REQUEST,
  WORKOUTS_REQUEST_ERROR,
  WORKOUTS_REQUEST_SUCCESS,
  ADD_WORKOUT_REQUEST,
  ADD_WORKOUT_REQUEST_ERROR,
  ADD_WORKOUT_REQUEST_SUCCESS,
} from '../actions/workouts';

const initialWorkoutsState = {
  workouts: [],
  workoutsRequest: false,
  workoutsRequestError: null,
  workoutsRequestSuccess: false,

  addWorkoutRequest: false,
  addWorkoutRequestError: null,
  addWorkoutRequestSuccess: false,
};

export default (state = initialWorkoutsState, action) => {
  switch (action.type) {
    // Workouts
    case WORKOUTS_REQUEST:
      return {
        ...state,
        workouts: true,
        workoutsRequestSuccess: false,
      };
    case WORKOUTS_REQUEST_ERROR:
      return {
        ...state,
        workoutsRequest: false,
        workoutsRequestError: action.error,
      };
    case WORKOUTS_REQUEST_SUCCESS:
      return {
        ...state,
        workoutsRequest: false,
        workoutsRequestError: null,
        workoutsRequestSuccess: true,
        workouts: action.workouts,
      };

    // Add workout
    case ADD_WORKOUT_REQUEST:
      return {
        ...state,
        addWorkoutRequest: true,
        addWorkoutRequestSuccess: false,
      };
    case ADD_WORKOUT_REQUEST_ERROR:
      return {
        ...state,
        addWorkoutRequest: false,
        addWorkoutRequestError: action.error,
      };
    case ADD_WORKOUT_REQUEST_SUCCESS:
      return {
        ...state,
        addWorkoutRequest: false,
        addWorkoutRequestError: null,
        addWorkoutRequestSuccess: true,
        workouts: state.workouts.push(action.workout),
      };

    default:
      return state;
  }
};
