import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from 'react-router-dom';
import {
  register,
  editFirstName,
  editLastName,
  editEmail,
  editPassword,
  editPasswordRepeated,
} from '../actions/register';

const Register = (props) => {
  const error = props.registerRequestError ? (
    <Alert variant="danger">{props.registerRequestError}</Alert>
  ) : (
    <></>
  );

  const loadingButton = props.registerRequest ? (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Registreren...</span>
    </>
  ) : (
    <>Registreren</>
  );

  const history = useHistory();

  useEffect(() => {
    if (props.registerRequestSuccess) history.push('/inloggen');
  });

  return (
    <>
      <h1>Registreren</h1>
      {error}
      <Form>
        <Form.Group controlId="firstName">
          <Form.Label>Voornaam</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={props.editingFirstName ? props.editingFirstName : ''}
            onChange={(e) => {
              props.editFirstName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Achternaam</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={props.editingLastName ? props.editingLastName : ''}
            onChange={(e) => {
              props.editLastName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={props.editingEmail ? props.editingEmail : ''}
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
            value={props.editingPassword ? props.editingPassword : ''}
            onChange={(e) => {
              props.editPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="passwordRepeated">
          <Form.Label>Wachtwoord herhalen</Form.Label>
          <Form.Control
            type="password"
            name="passwordRepeated"
            value={
              props.editingPasswordRepeated ? props.editingPasswordRepeated : ''
            }
            onChange={(e) => {
              props.editPasswordRepeated(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => props.register()}>
          {loadingButton}
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => ({
  editingFirstName: state.register.editingFirstName,
  editingLastName: state.register.editingLastName,
  editingEmail: state.register.editingEmail,
  editingPassword: state.register.editingPassword,
  editingPasswordRepeated: state.register.editingPasswordRepeated,

  registerRequest: state.register.registerRequest,
  registerRequestError: state.register.registerRequestError,
  registerRequestSuccess: state.register.registerRequestSuccess,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      register,
      editFirstName,
      editLastName,
      editEmail,
      editPassword,
      editPasswordRepeated,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
