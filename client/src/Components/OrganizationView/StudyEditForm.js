import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";

function StudyEditForm () {
    let { trialId } = useParams();
    const [updated, setUpdated] = useState(false);
    const [trial, setTrial] = useState({title:'', description:'', city:'', state:'', count:0});

    useEffect(() => {
        fetch(`/trials/${trialId}`)
          .then((r) => r.json())
          .then((data) => setTrial(data));
    }, [trialId]);

    function handleChange(e) {
        let newEntry = {...trial, [e.target.name]: e.target.value}
        setTrial(newEntry)
      };

    function handleSubmit(e) {
        e.preventDefault();

        let updatedTrial = {
            title: trial.title,
            description: trial.description,
            city: trial.city,
            state: trial.state,
            count: trial.count,
            user_id: trial.user_id
        }

        fetch(`/trials/${trialId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTrial)
            })
            .then(res => {
                if (res.ok) {
                    res.json()
                    .then(console.log('success'))
                } else {
                    res.json()
                    .then(console.log('failure'))
            }
        })
        setUpdated(!updated)
    }

    return (
        <>
            {
                updated ? 
                    <Redirect to={`/organization/studies/${trial.id}`} /> 
                :
                    <>
                        <header>Edit Study</header>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Title:
                                    <input
                                    type='text'
                                    name='title'
                                    value={trial.title}
                                    onChange={handleChange}
                                    >
                                    </input>
                                </label>
                            </div>
                            <div>
                                <label>Description:
                                    <input
                                    type='text'
                                    name='description'
                                    value={trial.description}
                                    onChange={handleChange}
                                    >
                                    </input>
                                </label>
                            </div>
                            <div>
                                <label>City:
                                    <input
                                    type='text'
                                    name='city'
                                    value={trial.city}
                                    onChange={handleChange}
                                    >
                                    </input>
                                </label>
                            </div>
                            <div>
                                <label>State:
                                    <input
                                    type='text'
                                    name='state'
                                    value={trial.state}
                                    onChange={handleChange}
                                    >
                                    </input>
                                </label>
                            </div>
                            <div>
                                <label>Total Participants Needed:
                                    <input
                                    type='number'
                                    name='count'
                                    value={trial.count}
                                    onChange={handleChange}
                                    >
                                    </input>
                                </label>
                            </div>
                            <br/>
                            <button type='submit'>Update</button>
                        </form>
                    </>
            }
        </>
    )
}

export default StudyEditForm;