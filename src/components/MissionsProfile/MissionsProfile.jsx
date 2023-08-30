import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { leaveMission } from '../../redux/missions/missions-slice';

function MissionsProfile() {
  const { missions } = useSelector((state) => state.missions);

  const filteredMissions = missions.filter((mission) => mission.reserved);

  const dispatch = useDispatch();

  const handleUpdateStore = (id) => {
    const selectedMission = missions.find((mission) => mission.mission_id === id);
    if (selectedMission.reserved) {
      dispatch(leaveMission(id));
    }
  };
  return (
    <ListGroup style={{ width: '42%' }}>
      <h2>My Missions</h2>
      {filteredMissions.length > 0 ? (
        filteredMissions.map((mission) => (
          <ListGroup.Item className="d-flex justify-content-between align-items-center" style={{ padding: '15px', borderRadius: '6px' }} key={mission.mission_id}>
            {mission.mission_name}
            <Button
              onClick={() => handleUpdateStore(mission.mission_id)}
              variant="outline-danger"
              className="ms-3"
            >
              Leave Mission
            </Button>
          </ListGroup.Item>
        ))
      ) : (
        <ListGroup.Item className="text-center" style={{ borderRadius: '6px' }}>
          You haven&apos;t joined the missions yet

        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default MissionsProfile;
