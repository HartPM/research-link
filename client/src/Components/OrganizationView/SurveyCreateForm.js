import { useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

function SurveyCreateForm() {
    const location = useLocation();
    const trial = location.state?.trial;
    const [inputs, setInputs] = useState(['']);
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [toEdit, setToEdit] = useState(false);

    let updatedSurvey = {}
    updatedSurvey.title = title
    updatedSurvey.questions = inputs
    updatedSurvey.trial_id = trial

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
        updatedSurvey.trial_id = trial

        fetch('/surveys', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSurvey),
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => console.log(data))
            } else {
                res.json()
                .then(obj => console.log(obj.errors[0]))
                setError('This study already has a survey. Redirecting...')
                setTimeout(() => setToEdit(!toEdit), 3000)
                }
            })
    }

    function handleClickAdd() {
        const newInputs = [...inputs]
        newInputs.push('')
        setInputs(newInputs)
    }

    return (
        <>
        <header>Create a survey</header>
        <main>
            <form onSubmit={handleSubmit} >
                <h1>
                    Title
                </h1>
                    <input 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                <br/>
                <h2>Questions</h2>
                {inputs.map((question, i) => {
                    return (
                        <div key={i} id={`survey-div-${i}`}>
                            <label> {i + 1}:
                                <input 
                                value={inputs[i]}
                                onChange={(e) => handleChange(e, i)}
                                />
                            </label>
                        </div>
                )})}
                <br/>
                <button onClick={handleClickAdd}>
                    Add a question
                </button>
                <br/>
                <button type='submit'>
                    Save
                </button>
                <br/>
            </form>
            
            { error ? <h4>{error}</h4> : null }
            { toEdit ? <Redirect to={`/organization/studies/${trial}`} /> : null }
        </main>
        </>
    )
}

export default SurveyCreateForm;