import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-bootstrap/Alert';
import {
  retrieveFriends,
  retrieveRecommendedFriends,
  addFriend,
} from '../actions/friends';

const Friends = (props) => {
  const friendsError = props.friendsRequestError ? (
    <Alert variant="danger">{props.friendsRequestError}</Alert>
  ) : (
    <></>
  );

  const recommendedFriendsError = props.recommendedFriendsRequestError ? (
    <Alert variant="danger">{props.recommendedFriendsRequestError}</Alert>
  ) : (
    <></>
  );

  const addFriendRequestError = props.addFriendRequestError ? (
    <Alert variant="danger">{props.addFriendRequestError}</Alert>
  ) : (
    <></>
  );

  const loadingFriends = props.friendsRequest ? (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Vrienden laden...</span>
    </>
  ) : (
    <></>
  );

  const loadingRecommendedFriends = props.recommendedFriendsRequest ? (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Aanbevolen vrienden laden...</span>
    </>
  ) : (
    <></>
  );

  return (
    <>
      {addFriendRequestError}
      <h1>Jouw vrienden</h1>
      {friendsError}
      {loadingFriends}
      {props.friendsRequestSuccess
        ? props.friends.map((rf) => <span>{rf.firstName}</span>)
        : ''}

      <h1>Aanbevolen vrienden</h1>
      {recommendedFriendsError}
      {loadingRecommendedFriends}
      {props.recommendedFriendsRequestSuccess
        ? props.recommendedFriends.map((rf) => (
            <span>
              {rf.firstName}{' '}
              <Button
                onClick={() => props.addFriend({ firstName: rf.firstName })}
              ></Button>
            </span>
          ))
        : ''}
    </>
  );
};

const mapStateToProps = (state) => ({
  friends: state.friends.friends,
  recommendedFriends: state.friends.recommendedFriends,

  friendsRequest: state.friends.friendsRequest,
  friendsRequestError: state.friends.friendsRequestError,
  friendsRequestSuccess: state.friends.friendsRequestSuccess,

  recommendedFriendsRequest: state.friends.recommendedFriendsRequest,
  recommendedFriendsRequestError: state.friends.recommendedFriendsRequestError,
  recommendedFriendsRequestSuccess:
    state.friends.recommendedFriendsRequestSuccess,

  addFriendRequest: state.friends.addFriendRequest,
  addFriendRequestError: state.friends.addFriendRequestError,
  addFriendRequestSuccess: state.friends.addFriendRequestSuccess,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      retrieveFriends,
      retrieveRecommendedFriends,
      addFriend,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
