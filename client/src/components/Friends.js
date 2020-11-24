import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import {
  retrieveFriends,
  retrieveRecommendedFriends,
  addFriend,
} from '../actions/friends';

const Friends = (props) => {
  useEffect(() => {
    if (
      !props.friendsRequestError &&
      !props.friendsRequestSuccess &&
      !props.friendsRequest
    )
      props.retrieveFriends();

    if (
      !props.recommendedFriendsRequestError &&
      !props.recommendedFriendsRequestSuccess &&
      !props.recommendedFriendsRequest
    )
      props.retrieveRecommendedFriends();
  });

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
      <ul>
        {props.friendsRequestSuccess
          ? props.friends.map((f) => (
              <li key={f.firstName}>
                {f.firstName}
                <br />
              </li>
            ))
          : ''}
      </ul>

      <h1>Aanbevolen vrienden</h1>
      {recommendedFriendsError}
      {loadingRecommendedFriends}
      <ul>
        {props.recommendedFriendsRequestSuccess
          ? props.recommendedFriends.map((f) => (
              <li key={f.firstName}>
                {f.firstName}{' '}
                <Button
                  variant="link"
                  onClick={() => props.addFriend({ firstName: f.firstName })}
                >
                  +
                </Button>
              </li>
            ))
          : ''}
      </ul>
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
