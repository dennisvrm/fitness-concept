import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_REQUEST_ERROR,
  AUTHENTICATION_REQUEST_SUCCESS,
  EDIT_EMAIL,
  EDIT_PASSWORD,
  SUBMIT_LOGIN_FORM,
} from '../actions/authentication';

const initialAuthenticationState = {
  userId: null,

  firstName: null,

  lastName: null,

  email: null,
  editingEmail: null,

  password: null,
  editingPassword: null,

  authenticationRequest: false,
  authenticationRequestError: null,
  authenticationRequestSuccess: false,
};

export default (state = initialAuthenticationState, action) => {
  switch (action.type) {
    // Authentication
    case AUTHENTICATION_REQUEST:
      return {
        ...state,
        authenticationRequest: true,
        authenticationRequestSuccess: false,
      };
    case AUTHENTICATION_REQUEST_ERROR:
      return {
        ...state,
        authenticationRequest: false,
        authenticationRequestError: action.error,
      };
    case AUTHENTICATION_REQUEST_SUCCESS:
      return {
        ...state,
        authenticationRequest: false,
        authenticationRequestError: null,
        authenticationRequestSuccess: true,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        userId: action.userId,
        password: null,
      };

    // Edit login form
    case EDIT_EMAIL:
      return {
        ...state,
        editingEmail: action.email,
      };
    case EDIT_PASSWORD:
      return {
        ...state,
        editingPassword: action.password,
      };

    // Submit login form
    case SUBMIT_LOGIN_FORM:
      return {
        ...state,
        email: state.editingEmail,
        password: state.editingPassword,
        editingEmail: null,
        editingPassword: null,
      };

    default:
      return state;
  }
};
