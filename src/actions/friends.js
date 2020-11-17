// Action types
export const FRIENDS_REQUEST = 'FRIENDS_REQUEST',
  FRIENDS_REQUEST_ERROR = 'FRIENDS_REQUEST_ERROR',
  FRIENDS_REQUEST_SUCCESS = 'FRIENDS_REQUEST_SUCCESS',
  RECOMMENDED_FRIENDS_REQUEST = 'RECOMMENDED_FRIENDS_REQUEST',
  RECOMMENDED_FRIENDS_REQUEST_ERROR = 'RECOMMENDED_FRIENDS_REQUEST_ERROR',
  RECOMMENDED_FRIENDS_REQUEST_SUCCESS = 'RECOMMENDED_FRIENDS_REQUEST_SUCCESS',
  ADD_FRIEND_REQUEST = 'ADD_FRIEND_REQUEST',
  ADD_FRIEND_REQUEST_ERROR = 'ADD_FRIEND_REQUEST_ERROR',
  ADD_FRIEND_REQUEST_SUCCESS = 'ADD_FRIEND_REQUEST_SUCCESS';

// Action creators
export const friendsRequest = () => ({
  type: AUTHENTICATION_REQUEST,
});
export const friendsRequestError = (error) => ({
  type: AUTHENTICATION_REQUEST_ERROR,
  error,
});
export const friendsRequestSuccess = (friends) => ({
  type: AUTHENTICATION_REQUEST_SUCCESS,
  friends,
});

export const recommendedFriendsRequest = () => ({
  type: RECOMMENDED_FRIENDS_REQUEST,
});
export const recommendedFriendsRequestError = (error) => ({
  type: RECOMMENDED_FRIENDS_REQUEST_ERROR,
  error,
});
export const recommendedFriendsRequestSuccess = (recommendedFriends) => ({
  type: RECOMMENDED_FRIENDS_REQUEST_SUCCESS,
  recommendedFriends,
});

export const addFriendRequest = () => ({
  type: RECOMMENDED_FRIENDS_REQUEST,
});
export const addFriendRequestError = (error) => ({
  type: RECOMMENDED_FRIENDS_REQUEST_ERROR,
  error,
});
export const addFriendRequestSuccess = (friend) => ({
  type: RECOMMENDED_FRIENDS_REQUEST_SUCCESS,
  friend,
});

export const retrieveFriends = () => async (dispatch, getState) => {
  dispatch(friendsRequest());

  const state = getState();

  try {
    const response = await fetch(
      `http://localhost:4000/api/${state.authentication.userId}/friends`,
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

    return dispatch(friendsRequestSuccess(responseJson));
  } catch (e) {
    console.error(e);
    return dispatch(friendsRequestError('Retrieve friends error'));
  }
};

export const retrieveRecommendedFriends = () => async (dispatch, getState) => {
  dispatch(recommendedFriendsRequest());

  const state = getState();

  try {
    const response = await fetch(
      `http://localhost:4000/api/${state.authentication.userId}/recommended-friends`,
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

    return dispatch(recommendedFriendsRequestSuccess(responseJson));
  } catch (e) {
    console.error(e);
    return dispatch(
      recommendedFriendsRequestError('Retrieve recommended friends error')
    );
  }
};

export const addFriend = (friend) => async (dispatch, getState) => {
  dispatch(addFriendRequest());

  const state = getState();

  try {
    const response = await fetch(
      `http://localhost:4000/api/${state.authentication.userId}/friends`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({
          friend,
        }),
      }
    );
    responseJson = await response.json();

    if (response.status !== 200) throw new Error();

    return dispatch(addFriendRequestSuccess(responseJson));
  } catch (e) {
    console.error(e);
    return dispatch(addFriendRequestError('Add friend error'));
  }
};
