import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'bootstrap/Row';

const Header = (props) => {
  const account = props.userId ? (
    <>
      Welkom {props.firstName} {props.lastName}
    </>
  ) : (
    <></>
  );

  return (
    <header>
      <Row>
        <Col md="6">
          <span className="logo">Fitness</span>
        </Col>
        <Col md="6">{account}</Col>
      </Row>
    </header>
  );
};

const mapStateToProps = (state) => ({
  userId: state.authentication.userId,
  firstName: state.authentication.firstName,
  lastName: state.authentication.lastName,
});

export default connect(mapStateToProps)(Header);
