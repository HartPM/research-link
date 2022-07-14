import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function StudyParticipantCard ({ pId, tId }) {
    const [participant, setParticipant] = useState({});

    useEffect(() => {
        fetch(`/participants/${pId}`)
        .then(r => r.json())
        .then(data => setParticipant(data))
    }, [tId, pId]);

    return (
        <Link className='pLink' to={`/organization/trials/${tId}/participants/${pId}`}>
            <td>{participant.last_name}</td>
            <td>{participant.first_name}</td>
            <td>{participant.sex}</td>
            <td>{participant.age}</td>
            <td>{participant.state}</td>
        </Link>
    )
}

export default StudyParticipantCard;