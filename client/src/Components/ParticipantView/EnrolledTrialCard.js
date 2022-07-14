import { useEffect, useState } from 'react';

function EnrolledTrialCard ({ trialId }) {
    const [trial, setTrial] = useState({});


    useEffect(() => {
        fetch(`/trials/${trialId}`)
          .then((r) => r.json())
          .then((data) => setTrial(data));
      }, []);

    return (
        <h5>{trial.title}</h5>
    )
}

export default EnrolledTrialCard;