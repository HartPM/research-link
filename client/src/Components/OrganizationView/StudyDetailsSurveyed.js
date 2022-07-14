import { useEffect, useState } from "react";
import StudyApplicants from "./StudyApplicants"

function StudyDetailsSurveyed ({survey, trialId}) {
    const [participantIds, setParticipantIds] = useState([]);

    useEffect(() => {
        fetch(`/responses/by_survey/${survey.id}`)
        .then(r => r.json())
        .then(data => setParticipantIds(data))
    }, [survey]);

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
            {participantIds.map(id => <StudyApplicants key={id} id={id} trialId={trialId} />)} 
        </tbody>
      </table>
    )
}

export default StudyDetailsSurveyed;