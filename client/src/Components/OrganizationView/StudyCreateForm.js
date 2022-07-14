import { useState } from "react";
import { Redirect } from "react-router-dom";

function StudyCreateForm({ user }) {
    const [errors, setErrors] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [count, setCount] = useState(0);
    const [studyId, setStudyId] = useState(null);
    
    function handleSubmit(e) {
        e.preventDefault();

        let newTrial = {
            title: title,
            description: description,
            city: city,
            state: state,
            count: count,
            user_id: user.id
        }

        fetch("/trials", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTrial)
          })
          .then(res => {
            if (res.ok) {
                res.json()
                .then(data => setStudyId(data.id))
            } else {
                res.json()
                .then( e => setErrors(Object.entries(e.error).flat()))
                }
            })
    }

    return(
        <>
        <header>Create a new study</header>
        <main>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input
                    type='text'
                    onChange={e => setTitle(e.target.value)}
                    >
                    </input>
                </label>
                <label>Description:
                    <input
                    type='text'
                    onChange={e => setDescription(e.target.value)}
                    >
                    </input>
                </label>
                <label>City:
                    <input
                    type='text'
                    onChange={e => setCity(e.target.value)}
                    >
                    </input>
                </label>
                <label>State:
                    <input
                    type='text'
                    onChange={e => setState(e.target.value)}
                    >
                    </input>
                </label>
                <label>Total Participants Needed:
                    <input
                    type='number'
                    onChange={e => setCount(e.target.value)}
                    >
                    </input>
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>
            { 
                studyId ?
                    <Redirect to={`/organization/studies/${studyId}`} /> 
                : null
            }
        </main>
        </>
    )
}

export default StudyCreateForm;