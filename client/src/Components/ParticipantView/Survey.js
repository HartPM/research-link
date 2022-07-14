import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SurveyCard from './SurveyCard';


function Survey({user}) {
    let { surveyId } = useParams();
    const [survey, setSurvey] = useState();

    useEffect(() => {
        fetch(`/surveys/${surveyId}`)
          .then((r) => r.json())
          .then((data) => setSurvey(data));
      }, [surveyId]);


    if (survey) {
    return (
        <>
            <header>{survey.title}</header>
            <main>
                <div className='content2'>
                    { <SurveyCard questions={survey.questions} surveyId={survey.id} user={user} /> }
                </div>
            </main>
        </>
    )} else {
        return <p>Loading...</p>
    }
}

export default Survey;