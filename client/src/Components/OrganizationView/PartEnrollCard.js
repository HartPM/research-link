import { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

function PartEnrollCard() {
    let { trial_id, participant_id } = useParams();
    const [participant, setParticipant] = useState({});
    const [deleted, setDeleted] = useState(true);

    console.log(trial_id, participant_id)
    useEffect(() => {
        fetch(`/participants/${participant_id}`)
        .then(r => r.json())
        .then(data => setParticipant(data))
    }, [participant_id]);

    function handleCancel(e) {
        console.log(trial_id, participant_id)
        fetch(`/enrollments/cancel/${trial_id}/${participant_id}`, {
            method: 'DELETE'
        })
        .then(setDeleted(!deleted))
    }

    return (
        <>
        { 
            deleted ?
                <main>
                    <header>Participant Info</header>
                    <div className='content1'>
                        <button onClick={handleCancel}>Cancel Enrollment</button>
                    </div>
                    <h1>{participant.first_name} {participant.last_name}</h1>
                    <h2>{participant.sex}</h2>
                    <h2>{participant.format_dob}</h2>
                    <h2>{participant.city}, {participant.state}</h2>
                    <h2>{participant.email}</h2>
                </main> 
            : 
                <Redirect to={`/organization/studies/${trial_id}`} />
        }
        </>
    )
}

export default PartEnrollCard;