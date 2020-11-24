import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-bootstrap/Alert';
import { retrieveWorkouts } from '../../actions/workouts';

const Workouts = (props) => {
  const error = props.workoutsRequestError ? (
    <Alert variant="danger">{props.workoutsRequestError}</Alert>
  ) : (
    <></>
  );

  const loading = props.workoutsRequest ? (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Workouts laden...</span>
    </>
  ) : (
    <></>
  );

  return (
    <>
      <h1>Workouts</h1>
      {error}
      {loading}
      {props.workoutsRequestSuccess
        ? props.workouts.map((w) => <span>{w.workoutName}</span>)
        : ''}
    </>
  );
};

const mapStateToProps = (state) => ({
  workouts: state.workouts.workouts,

  workoutsRequest: state.workouts.workoutsRequest,
  workoutsRequestError: state.workouts.workoutsRequestError,
  workoutsRequestSuccess: state.workouts.workoutsRequestSuccess,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      retrieveWorkouts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);
