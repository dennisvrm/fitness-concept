import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (
      !props.userId &&
      location.pathname !== '/inloggen' &&
      location.pathname !== '/registreren'
    ) {
      history.push({ pathname: '/inloggen' });
    }
  });

  const account = props.userId ? (
    <>
      Welkom {props.firstName} {props.lastName}
    </>
  ) : (
    <></>
  );

  return (
    <header>
      <Row className="align-items-center">
        <Col md="6">
          <h1 className="logo">Fitness</h1>
        </Col>
        <Col md="6" className="text-right">
          {account}
        </Col>
      </Row>

      <hr />
    </header>
  );
};

const mapStateToProps = (state) => ({
  userId: state.authentication.userId,
  firstName: state.authentication.firstName,
  lastName: state.authentication.lastName,
});

export default connect(mapStateToProps)(Header);
