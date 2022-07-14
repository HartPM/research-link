import { useState } from "react";

function SurveyAddQuestionForm({ survey, setRender, render }) {
    const [input, setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        let updatedSurvey = {}
        updatedSurvey.title = survey.title
        updatedSurvey.questions = [...survey.questions, input]
        updatedSurvey.trial_id = survey.trial_id

        fetch(`/surveys/${survey.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSurvey),
        })
        .then(res => res.json())
        .then(() => setRender(!render))
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
            placeholder='add a question'
            value={input}
            onChange={e => setInput(e.target.value)}
            ></textarea>
            <button type='submit'>Add</button>
        </form>
    )
}

export default SurveyAddQuestionForm;