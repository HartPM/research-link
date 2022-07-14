import { useState, useEffect } from "react";
import StudyParticipantCard from './StudyParticipantCard';

function StudyDetailsEnrolled ({trialId}) {
    const [ids, setIds] = useState([]);

    useEffect(() => {
        fetch(`/enrollments/by_trial/${trialId}`)
        .then((r) => r.json())
        .then((data) => setIds(data));
    }, [trialId]);   

    return (
      <table>
        <thead>
          <tr>
            <th>Last</th>
            <th>First</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
            { ids.map((id, i) => <StudyParticipantCard key={i} pId={id} tId={trialId} />) }
        </tbody>
      </table>
    )
}

export default StudyDetailsEnrolled;