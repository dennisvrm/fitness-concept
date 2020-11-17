import {
  FRIENDS_REQUEST,
  FRIENDS_REQUEST_ERROR,
  FRIENDS_REQUEST_SUCCESS,
  RECOMMENDED_FRIENDS_REQUEST,
  RECOMMENDED_FRIENDS_REQUEST_ERROR,
  RECOMMENDED_FRIENDS_REQUEST_SUCCESS,
  ADD_FRIEND_REQUEST,
  ADD_FRIEND_REQUEST_ERROR,
  ADD_FRIEND_REQUEST_SUCCESS,
} from '../actions/friends';

const initialFriendsState = {
  friends: [],
  friendsRequest: false,
  friendsRequestError: null,
  friendsRequestSuccess: false,

  recommendedFriends: [],
  recommendedFriendsRequest: false,
  recommendedFriendsRequestError: null,
  recommendedFriendsRequestSuccess: false,

  addFriendRequest: false,
  addFriendRequestError: null,
  addFriendRequestSuccess: false,
};

export default (state = initialFriendsState, action) => {
  switch (action.type) {
    // Friends
    case FRIENDS_REQUEST:
      return {
        ...state,
        friendsRequest: true,
        friendsRequestSuccess: false,
      };
    case FRIENDS_REQUEST_ERROR:
      return {
        ...state,
        friendsRequest: false,
        friendsRequestError: action.error,
      };
    case FRIENDS_REQUEST_SUCCESS:
      return {
        ...state,
        friendsRequest: false,
        friendsRequestError: null,
        friendsRequestSuccess: true,
        friends: action.friends,
      };

    // Recommended friends
    case RECOMMENDED_FRIENDS_REQUEST:
      return {
        ...state,
        recommendedFriendsRequest: true,
        recommendedFriendsRequestSuccess: false,
      };
    case RECOMMENDED_FRIENDS_REQUEST_ERROR:
      return {
        ...state,
        recommendedFriendsRequest: false,
        recommendedFriendsRequestError: action.error,
      };
    case RECOMMENDED_FRIENDS_REQUEST_SUCCESS:
      return {
        ...state,
        recommendedFriendsRequest: false,
        recommendedFriendsRequestError: null,
        recommendedFriendsRequestSuccess: true,
        recommendedFriends: action.recommendedFriends,
      };

    // Add friend
    case ADD_FRIEND_REQUEST:
      return {
        ...state,
        addFriendRequest: true,
        addFriendRequestSuccess: false,
      };
    case ADD_FRIEND_REQUEST_ERROR:
      return {
        ...state,
        addFriendRequest: false,
        addFriendRequestError: action.error,
      };
    case ADD_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        addFriendRequest: false,
        addFriendRequestError: null,
        addFriendRequestSuccess: true,
        friends: state.friends.push(action.friend),
      };

    default:
      return state;
  }
};
