import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {
  authenticate,
  editEmail,
  editPassword,
} from '../actions/authentication';

const Login = (props) => {
  const error = props.authenticationRequestError ? (
    <Alert variant="danger">{props.authenticationRequestError}</Alert>
  ) : (
    <></>
  );

  const loadingButton = props.authenticationRequest ? (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Inloggen...</span>
    </>
  ) : (
    <>Inloggen</>
  );

  if (props.authenticationRequestSuccess) {
    const history = useHistory();
    history.push('/workouts');
  }

  return (
    <>
      <h1>Inloggen</h1>
      {error}
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={props.editingEmail}
            onChange={(e) => {
              props.editEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={props.editingPassword}
            onChange={(e) => {
              props.editPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => props.authenticate()}>
          {loadingButton}
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => ({
  editingEmail: state.authentication.editingEmail,
  editingPassword: state.authentication.editingPassword,
  authenticationRequest: state.authentication.authenticationRequest,
  authenticationRequestError: state.authentication.authenticationRequestError,
  authenticationRequestSuccess:
    state.authentication.authenticationRequestSuccess,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      authenticate,
      editEmail,
      editPassword,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
