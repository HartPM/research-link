import { useState } from 'react';

function SurveyCard({ questions, surveyId, user}) {
    const initialInputs = []
    questions.forEach(question => initialInputs.push(''));
    const [inputs, setInputs] = useState(initialInputs);
    const [errors, setErrors] = useState([]);
    const [confirmation, setConfirmation] = useState('');

    const handleChange = (e, position) => {
        const { value } = e.target
        const newInputs = [...inputs]
        newInputs[position] = value;
        setInputs(newInputs)
    };
    
    const manyInputs = questions.map((text, i) => {
        return (
            <div key={i}>
                <p>{questions[i]}</p>
                <textarea 
                    className="form1-input1"
                    value={inputs[i]}
                    onChange={(e) => handleChange(e, i)}
                />
            </div>
        )
    })


    function handleSubmit(e) {
        e.preventDefault()
        let newResponse = {
            survey_id: surveyId,
            participant_id: user.participant.id,
            answers: inputs
        }
        fetch("/responses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newResponse),
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                    .then(setConfirmation('Thank you for your response!'));
                } else {
                    res.json()
                    .then(obj => setErrors(obj.error))
                }
            })
    }

    return (
        <>
            <form className="form1" onSubmit={handleSubmit}>
                { manyInputs }
                <br />
                <button type='submit'>Submit</button>
            </form> 
        </>
    )
}

export default SurveyCard;