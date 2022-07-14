import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function StudyDetails() {
    let { trialId } = useParams();
    const [trial, setTrial] = useState();

    useEffect(() => {
        fetch(`/trials/${trialId}`)
          .then((r) => r.json())
          .then((data) => setTrial(data));
      }, [trialId]);
        
   
      if (trial) { return (
        <>
            <main>{trial.title}</main>
            <div className='content1'> 
                <Link to={`/participant/surveys/${trial.survey.id}`} > 
                    <button>Study Survey</button> 
                </Link>

            </div>
            <div className='content2'>
                <h5>Location: {trial.city}, {trial.state}</h5>
                <p>{trial.description}</p>
            </div>
        </>
    ) } else { return <p>Loading...</p> }
}

export default StudyDetails;