// Action types
export const REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_REQUEST_ERROR = 'REGISTER_REQUEST_ERROR',
  REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS',
  EDIT_FIRST_NAME = 'EDIT_FIRST_NAME',
  EDIT_LAST_NAME = 'EDIT_LAST_NAME',
  EDIT_EMAIL = 'EDIT_EMAIL',
  EDIT_PASSWORD = 'EDIT_PASSWORD',
  EDIT_PASSWORD_REPEATED = 'EDIT_PASSWORD_REPEATED',
  SUBMIT_REGISTER_FORM = 'SUBMIT_REGISTER_FORM';

// Action creators
export const editFirstName = (firstName) => ({
  type: EDIT_FIRST_NAME,
  firstName,
});
export const editLastName = (lastName) => ({
  type: EDIT_LAST_NAME,
  lastName,
});
export const editEmail = (email) => ({
  type: EDIT_EMAIL,
  email,
});
export const editPassword = (password) => ({
  type: EDIT_PASSWORD,
  password,
});
export const editPasswordRepeated = (passwordRepeated) => ({
  type: EDIT_PASSWORD_REPEATED,
  passwordRepeated,
});

export const submitRegisterForm = () => ({
  type: SUBMIT_REGISTER_FORM,
});

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});
export const registerRequestError = (error) => ({
  type: REGISTER_REQUEST_ERROR,
  error,
});
export const registerRequestSuccess = () => ({
  type: REGISTER_REQUEST_SUCCESS,
});

export const register = () => async (dispatch, getState) => {
  dispatch(submitRegisterForm());
  dispatch(registerRequest());

  const state = getState();

  try {
    const response = await fetch(`http://localhost:4000/api/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        firstName: state.register.firstName,
        lastName: state.register.lastName,
        email: state.register.email,
        password: state.register.password,
        passwordRepeated: state.register.passwordRepeated,
      }),
    });

    if (response.status !== 200) throw new Error(await response.text());

    return dispatch(registerRequestSuccess());
  } catch (e) {
    console.error(e);
    return dispatch(registerRequestError(e.message));
  }
};
