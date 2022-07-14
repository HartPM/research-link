
function SurveyEditForm({props}) {
    const {survey, inputs, surveyId, title, setTitle, setInputs, toggleEdit, setToggleEdit, render, setRender} = props;

    function handleDelete(e) {
        inputs.splice(e.target.id, 1)
        const element = document.getElementById(`survey-div-${e.target.id}`)
        element.remove()

        let updatedSurvey = {}
        updatedSurvey.title = title
        updatedSurvey.questions = inputs
        updatedSurvey.trial_id = survey.trial_id


        fetch(`/surveys/${surveyId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSurvey),
        })
        .then(res => res.json())
    };

    function handleChange(e, position) {
        const { value } = e.target
        const newInputs = [...inputs]
        newInputs[position] = value
        setInputs(newInputs)
    };

    function handleSubmit(e) {
        e.preventDefault();
        let updatedSurvey = {}
        updatedSurvey.title = title
        updatedSurvey.questions = inputs
        updatedSurvey.trial_id = survey.trial_id

        fetch(`/surveys/${surveyId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSurvey),
        })
        setToggleEdit(!toggleEdit)
        setRender(!render)
    }

    return ( 
        <form onSubmit={handleSubmit} >
            <h2>Title</h2>
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            <br/>
            <h3>
                Questions
            </h3>
            {inputs.map((question, i) => {
                return (
                    <div key={i} id={`survey-div-${i}`}>
                        <label> {i + 1}:
                            <input 
                                value={inputs[i]}
                                onChange={(e) => handleChange(e, i)}
                            />
                        </label>
                        <button id={i} onClick={handleDelete}>Remove</button>
                    </div>
            )})}
            <br/>
            <button type='submit'>
                Save
            </button>
        </form>
    )
}

export default SurveyEditForm;