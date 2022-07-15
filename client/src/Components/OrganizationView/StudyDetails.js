import { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import StudyDetailsEnrolled from './StudyDetailsEnrolled';
import StudyDetailsSurveyed from './StudyDetailsSurveyed';

function StudyDetails() {
    let { trialId } = useParams();
    const [trial, setTrial] = useState({survey:{}});
    const [deleted, setDeleted] = useState(false); 
    const [enrolledCount, setEnrolledCount] = useState([]);

    useEffect(() => {
        fetch(`/trials/${trialId}`)
          .then((r) => r.json())
          .then((data) => setTrial(data));
      }, [trialId]);

      useEffect(() => {
          fetch(`/enrollments/by_trial/${trialId}`)
          .then((r) => r.json())
          .then((data) => setEnrolledCount(data));
      }, [trialId]); 

    function handleDelete() {
        fetch(`/trials/${trialId}`, {
            method: "DELETE"
        })
        setDeleted(!deleted)
    }

    let diff = trial?.count - enrolledCount?.length
    let eNeeded = diff > 0 ?  `${diff} more participants needed.` : 'This study has full enrollment! No more participants needed at this time.'

    console.log(trial.count, enrolledCount.length)

    if (deleted) {
        return <Redirect to='/organization/studies' /> 
    } else if (trial.survey) { 
        return (
            <>
            <header>{trial.title}</header>
            <main>
                <div className="tools">
                    <Link to={`/organization/studies/${trialId}/edit`}> 
                        <button>
                            Edit Study
                        </button>
                    </Link>
                    <br/>
                    <button onClick={handleDelete}>
                        Delete Study
                    </button>
                    <br/>
                    <Link to={`/organization/surveys/${trial.survey.id}`}> 
                        <button>
                            View Survey
                        </button> 
                    </Link> 
                </div>

                <div className="content2">
                    <h2>Study Information</h2>
                    <h5>Location: {trial.city}, {trial.state}</h5>
                    <p>{trial.description}</p>
                    <h3>{eNeeded}</h3>
                </div>
                <br/>
                <br/>
                <div>
                    <h3>Enrolled Participants</h3>
                    <StudyDetailsEnrolled trialId={trialId} />
                </div>
                <br/>
                <br/>
                <div>
                    <h3>Applicants Not Yet Enrolled</h3>
                    <StudyDetailsSurveyed survey={trial.survey} trialId={trial.id} />
                </div>
            </main>
            </>
    ) } else { return (
        <>
        <header>{trial.title}</header>
        <main>
            <div className="tools">
                <Link to={`/organization/studies/${trialId}/edit`}> 
                    <button>
                        Edit Study
                    </button>
                </Link>
                <br/>
                <button onClick={handleDelete}>
                    Delete Study
                </button>
                <Link to={{
                    pathname: '/organization/surveys/new',
                    state: { fromStudyDetails: true, trial: trialId },
                    }} > 
                    <button>
                        Create a Survey
                    </button>
                </Link>
            </div>

            <div className="content2">
                <h2>Study Information</h2>
                <h5>Location: {trial.city}, {trial.state}</h5>
                <p>{trial.description}</p>
                <p>Participants Needed: {trial.count}</p>
            </div>
        </main>
        </>
    ) }
}

export default StudyDetails;