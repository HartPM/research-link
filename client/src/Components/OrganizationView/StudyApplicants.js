import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function StudyParticipants ({id, trialId}) {
    const [participant, setParticipant] = useState({});
    const [enrolledArr, setEnrolledArr] = useState([]);

    useEffect(() => {
        fetch(`/participants/${id}`)
        .then(r => r.json())
        .then(data => setParticipant(data) & setEnrolledArr(data.enrollments.map(e => e.trial_id).filter(id => id === trialId)))
    },[id, trialId]);

    return (
        <>
            { 
                (enrolledArr.length < 1) ? 
            
                    <Link className='pLink' to={`/organization/trials/${trialId}/applicants/${id}`}>
                        <td>{participant.last_name}</td>
                        <td>{participant.first_name}</td>
                        <td>{participant.sex}</td>
                        <td>{participant.age}</td>
                        <td>{participant.state}</td>
                    </Link>

                : null
            }
        </>
    )
}

export default StudyParticipants;