import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function StudyDetails() {
    let { trialId } = useParams();
    const [trial, setTrial] = useState({});

    useEffect(() => {
        fetch(`/trials/${trialId}`)
          .then((r) => r.json())
          .then((data) => setTrial(data));
      }, [trialId]);
   
      if (trial.survey) { return (
        <>
            <header>{trial.title}</header>
            <main>
                <div className='tools'> 
                    <Link to={`/participant/surveys/${trial.survey.id}`} > 
                        <button>Study Survey</button> 
                    </Link>
                </div>
                <div className='content2'>
                    <h1>Location</h1>
                    <h3>{trial.city}, {trial.state}</h3>
                    <h1>Description</h1>
                    <p>{trial.description}</p>
                </div>
            </main>
        </>
    ) } else { return (
        <>
            <header>{trial.title}</header>
            <main>
                <h2>This study is not currently accepting applicants.</h2>
            </main>
        </>
    ) }
}

export default StudyDetails;