import { useEffect, useState } from 'react';
import SurveyedTrialCard from './SurveyedTrialCard';

function SurveyedTrials({ user }) { 
    const { participant } = user;
    const [trials, setTrials] = useState([]);

    useEffect(() => {
        fetch(`/participants/${participant.id}/trials`)
          .then((r) => r.json())
          .then((data) => setTrials(data));
      }, []);
    
    return (
        <div className="content2">
            <h2>Surveyed Trials</h2>
            { trials ? trials.map(trial => <SurveyedTrialCard key={trial.id} trial={trial}/>) : null}
        </div>
    )
}

export default SurveyedTrials;