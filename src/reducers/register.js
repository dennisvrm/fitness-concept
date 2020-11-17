import {
  REGISTER_REQUEST,
  REGISTER_REQUEST_ERROR,
  REGISTER_REQUEST_SUCCESS,
  EDIT_FIRST_NAME,
  EDIT_LAST_NAME,
  EDIT_EMAIL,
  EDIT_PASSWORD,
  EDIT_PASSWORD_REPEATED,
  SUBMIT_REGISTER_FORM,
} from '../actions/authentication';

const initialRegisterState = {
  firstName: null,
  editingFirstName: null,

  lastName: null,
  editingLastName: null,

  email: null,
  editingEmail: null,

  password: null,
  editingPassword: null,

  passwordRepeated: null,
  editingPasswordRepeated: null,

  registerRequest: false,
  registerRequestError: null,
  registerRequestSuccess: false,
};

export default (state = initialRegisterState, action) => {
  switch (action.type) {
    // Register
    case REGISTER_REQUEST:
      return {
        ...state,
        registerRequest: true,
        registerRequestSuccess: false,
      };
    case REGISTER_REQUEST_ERROR:
      return {
        ...state,
        registerRequest: false,
        registerRequestError: action.error,
      };
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        registerRequest: false,
        registerRequestError: null,
        registerRequestSuccess: true,

        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
        passwordRepeated: state.passwordRepeated,
      };

    // Edit login form
    case EDIT_FIRST_NAME:
      return {
        ...state,
        editingFirstName: action.firstName,
      };
    case EDIT_LAST_NAME:
      return {
        ...state,
        editingLastName: action.lastName,
      };
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
    case EDIT_PASSWORD_REPEATED:
      return {
        ...state,
        editingPasswordRepeated: action.passwordRepeated,
      };

    // Submit register form
    case SUBMIT_REGISTER_FORM:
      return {
        ...state,
        firstName: state.editingFirstName,
        lastName: state.editingLastName,
        email: state.editingEmail,
        password: state.editingPassword,
        passwordRepeated: state.editingPasswordRepeated,

        editingFirstName: null,
        editingLastName: null,
        editingEmail: null,
        editingPassword: null,
        editingPasswordRepeated: null,
      };

    default:
      return state;
  }
};
