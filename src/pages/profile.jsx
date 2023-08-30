import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Row, Col, ListGroup, Button,
} from 'react-bootstrap';
import {
  cancelRocket,
  filterReservedRockets,
} from '../redux/rockets/rockets-slice';
import MissionsProfile from '../components/MissionsProfile/MissionsProfile';

function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterReservedRockets());
  }, [dispatch]);

  function handleCancelRocket(id) {
    dispatch(cancelRocket(id));
  }

  const { filteredRockets } = useSelector((state) => state.rockets);

  return (
    React.createElement(Row, { style: { width: '42%' } },
      React.createElement(Col, null,
        React.createElement('h2', null, 'My Rockets'),
        React.createElement(ListGroup, null,
          filteredRockets.length > 0 ? (
            filteredRockets.map((_ref) => {
              const { id } = _ref; const
                { name } = _ref;
              return (
                React.createElement(ListGroup.Item, {
                  style: { padding: '15px', borderRadius: '6px' },
                  key: id,
                  className: 'd-flex justify-content-between align-items-center',
                },
                React.createElement('span', null, name),
                React.createElement(Button, {
                  variant: 'outline-danger',
                  onClick() { return handleCancelRocket(id); },
                  className: 'ms-3',
                },
                'Cancel Reservation')));
            })
          ) : (
            React.createElement(ListGroup.Item, { className: 'text-center' },
              "You haven't reserved any rockets yet.")
          ))))
  );
}

function Profile() {
  return (
    React.createElement('section', { style: { display: 'flex', justifyContent: 'space-between' } },
      React.createElement(ProfilePage, null),
      React.createElement(MissionsProfile, null))
  );
}
export default Profile;
