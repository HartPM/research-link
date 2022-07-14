import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SurveyEditForm from './SurveyEditForm';
import SurveyAddQuestionForm from './SurveyAddQuestionForm';


function Survey({user}) {
    let { surveyId } = useParams();
    const [survey, setSurvey] = useState({});
    const [toggleEdit, setToggleEdit] = useState(false);
    const [toggleAdd, setToggleAdd] = useState(false);
    const [render, setRender] = useState(false);
    
    const [inputs, setInputs] = useState([]);
    const [title, setTitle] = useState(survey.title);
    const props = {survey, inputs, surveyId, title, setTitle, setInputs, setRender, render, toggleEdit, setToggleEdit};

    useEffect(() => {
        fetch(`/surveys/${surveyId}`)
        .then((r) => r.json())
        .then((data) => setSurvey(data) & setInputs(data.questions) & setTitle(data.title))
    }, [surveyId, render]);

    function handleClickEdit() {
        setToggleEdit(!toggleEdit)
    };

    function handleClickAdd() {
        setToggleAdd(!toggleAdd)
    }

    return (
        survey && survey.questions ?
        <>
        <header>{survey.title}</header>
        <main>
            <div className="tools">
            { 
                toggleEdit ? 
                    <button onClick={handleClickEdit}>
                        Back
                    </button>
                : 
                <>
                    <button onClick={handleClickEdit}>
                        Edit survey
                    </button>
                    <button onClick={handleClickAdd}>
                        Add a question
                    </button>
                </>  
            }
            </div>
            
            { 
                toggleEdit ? 
                    <SurveyEditForm props={props} /> 
                :
                    <div className="content2">
                        <h2>Questions</h2>
                        <ol>
                            {inputs.map((question, i) => {
                            return <li key={i}>{question}</li>})}
                        </ol>

                        { 
                            toggleAdd ? 
                                <SurveyAddQuestionForm survey={survey} setRender={setRender} render={render} /> 
                            : 
                                null 
                        }
                        <br/> 
                        { 
                            survey.format_updated_at === survey.format_created_at ? 
                                null 
                            : 
                                <h3>
                                    Updated: {survey.format_updated_at}
                                </h3> 
                        }

                        <h3>
                            Created: {survey.format_created_at}
                        </h3>
                    </div> 
            }
        </main> 
        </>
        : <p>Loading...</p>
    )
}

export default Survey;