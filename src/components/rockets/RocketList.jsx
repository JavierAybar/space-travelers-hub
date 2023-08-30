import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import RocketCard from './RocketCard';

function RocketsList({ rocketList }) {
  const rocketElements = rocketList.map((rocket) => (
    <Col sm={6} lg={12} className="mb-3" key={rocket.id}>
      <RocketCard rocketProps={rocket} />
    </Col>
  ));

  return (
    <Row>
      {rocketElements}
    </Row>
  );
}
RocketsList.propTypes = {
  rocketList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      flickrImages: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default RocketsList;
