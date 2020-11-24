// Action types
export const WORKOUTS_REQUEST = 'WORKOUTS_REQUEST',
  WORKOUTS_REQUEST_ERROR = 'WORKOUTS_REQUEST_ERROR',
  WORKOUTS_REQUEST_SUCCESS = 'WORKOUTS_REQUEST_SUCCESS',
  EDIT_WORKOUT_NAME = 'EDIT_WORKOUT_NAME',
  SUBMIT_ADD_WORKOUT_FORM = 'SUBMIT_ADD_WORKOUT_FORM',
  ADD_WORKOUT_REQUEST = 'ADD_WORKOUT_REQUEST',
  ADD_WORKOUT_REQUEST_ERROR = 'ADD_WORKOUT_REQUEST_ERROR',
  ADD_WORKOUT_REQUEST_SUCCESS = 'ADD_WORKOUT_REQUEST_SUCCESS';

// Action creators
export const editWorkoutName = (workoutName) => ({
  type: EDIT_WORKOUT_NAME,
  workoutName,
});

export const submitAddWorkoutForm = () => ({
  type: SUBMIT_ADD_WORKOUT_FORM,
});

export const workoutsRequest = () => ({
  type: WORKOUTS_REQUEST,
});
export const workoutsRequestError = (error) => ({
  type: WORKOUTS_REQUEST_ERROR,
  error,
});
export const workoutsRequestSuccess = (workouts) => ({
  type: WORKOUTS_REQUEST_SUCCESS,
  workouts,
});

export const addWorkoutRequest = () => ({
  type: ADD_WORKOUT_REQUEST,
});
export const addWorkoutRequestError = (error) => ({
  type: ADD_WORKOUT_REQUEST_ERROR,
  error,
});
export const addWorkoutRequestSuccess = (workout) => ({
  type: ADD_WORKOUT_REQUEST_SUCCESS,
  workout,
});

export const retrieveWorkouts = () => async (dispatch, getState) => {
  dispatch(workoutsRequest());

  const state = getState();

  try {
    const response = await fetch(
      `http://localhost:4000/api/${state.authentication.userId}/workouts`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
      }
    );
    responseJson = await response.json();

    if (response.status !== 200) throw new Error();

    return dispatch(workoutsRequestSuccess(responseJson));
  } catch (e) {
    console.error(e);
    return dispatch(workoutsRequestError('Retrieve workouts error'));
  }
};

export const addWorkout = () => async (dispatch, getState) => {
  dispatch(submitAddWorkoutForm());
  dispatch(addWorkoutRequest());

  const state = getState();

  try {
    const response = await fetch(
      `http://localhost:4000/api/${state.authentication.userId}/workouts`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({
          workoutName: state.workouts.workoutName,
        }),
      }
    );
    responseJson = await response.json();

    if (response.status !== 200) throw new Error();

    return dispatch(addWorkoutRequestSuccess(responseJson));
  } catch (e) {
    console.error(e);
    return dispatch(addWorkoutRequestError('Add workout error'));
  }
};
