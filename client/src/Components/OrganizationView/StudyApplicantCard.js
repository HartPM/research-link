import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

function StudyApplicantCard() {
    let { trialId, id } = useParams();
    const [participant, setParticipant] = useState({responses: []});
    const [surveyId, setSurveyId] = useState(null);
    const [response, setResponse] = useState({answers: []});
    const [message, setMessage] = useState('');
    const [enrolled, setEnrolled] = useState(false);

    useEffect(() => {
        fetch(`/participants/${id}`)
        .then(r => r.json())
        .then(data => setParticipant(data))
    }, []);

    useEffect(() => {
        fetch(`/trials/${trialId}`)
        .then(r => r.json())
        .then(data => setSurveyId(data.survey.id))
    }, []);

    function handleEnroll () {
    fetch("/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            trial_id: trialId,
            participant_id: id
        })
      })
      .then(res => {
        if (res.ok) {
            res.json()
            .then(setMessage('The applicant has been enrolled!'))
            .then(setTimeout(() => setEnrolled(!enrolled), 2000))
        } else {
            res.json()
            .then(data => setMessage(data.errors[0]))
            }
        })};
        
        useEffect(() => {
            setResponse(participant.responses.find(r => r.survey_id === surveyId))
        }, [participant.responses, surveyId]);

    return (
        <>
            {enrolled ? <Redirect to={`/organization/studies/${trialId}`} /> 
            :
            <>
            <header>Applicant Info</header>
            <main>
                <div className="tools">
                    <button onClick={handleEnroll}>Enroll Applicant</button>
                </div>
                <div className="study-card">
                    <h1>{participant.first_name} {participant.last_name}</h1>
                    <h2>{participant.sex}</h2>
                    <h2>{participant.format_dob}</h2>
                    <h2>{participant.city}, {participant.state}</h2>
                    <h2>{participant.email}</h2>
                    { message && <h3>{message}</h3>}
                </div>
                <div className="content2">
                    <h1>Survey Response</h1>
                    { response ? response.answers.map((answer, i) => <h2 key={i}>{answer}</h2>) : null } 
                </div>
            </main>
            </>
            }
       </> 
    )
}

export default StudyApplicantCard;