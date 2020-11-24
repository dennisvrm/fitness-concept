// Action types
export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST',
  AUTHENTICATION_REQUEST_ERROR = 'AUTHENTICATION_REQUEST_ERROR',
  AUTHENTICATION_REQUEST_SUCCESS = 'AUTHENTICATION_REQUEST_SUCCESS',
  EDIT_EMAIL = 'EDIT_EMAIL',
  EDIT_PASSWORD = 'EDIT_PASSWORD',
  SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';

// Action creators
export const editEmail = (email) => ({
  type: EDIT_EMAIL,
  email,
});
export const editPassword = (password) => ({
  type: EDIT_PASSWORD,
  password,
});

export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
});

export const authenticationRequest = () => ({
  type: AUTHENTICATION_REQUEST,
});
export const authenticationRequestError = (error) => ({
  type: AUTHENTICATION_REQUEST_ERROR,
  error,
});
export const authenticationRequestSuccess = (
  firstName,
  lastName,
  email,
  userId
) => ({
  type: AUTHENTICATION_REQUEST_SUCCESS,
  firstName,
  lastName,
  email,
  userId,
});

export const authenticate = () => async (dispatch, getState) => {
  dispatch(submitLoginForm());
  dispatch(authenticationRequest());

  const state = getState();

  try {
    const response = await fetch(`http://localhost:4000/api/authentication`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        email: state.authentication.email,
        password: state.authentication.password,
      }),
    });

    if (response.status !== 200) throw new Error(await response.text());

    let responseJson = await response.json();

    return dispatch(
      authenticationRequestSuccess(
        responseJson.firstName,
        responseJson.lastName,
        responseJson.email,
        responseJson.userId
      )
    );
  } catch (e) {
    console.error(e);
    return dispatch(authenticationRequestError(e.message));
  }
};
