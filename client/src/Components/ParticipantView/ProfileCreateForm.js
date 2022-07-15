import { useState } from 'react';
import { Redirect } from 'react-router-dom';


function ProfileCreateForm({ user }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');
    const [dob, setDob] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [errors, setErrors] = useState('');
    const [toggleForm, setToggleForm] = useState(true);


    function handleSubmit(e) {
        e.preventDefault();

        let newProfile = {
            first_name: firstName,
            last_name: lastName,
            sex: sex,
            dob: dob,
            city: city,
            state: state,
            email: user.username,
            user_id: user.id
          }

          console.log(newProfile)

        fetch("/participants", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify()
          })
          .then(res => {
            if (res.ok) {
                // res.json()
                // .then(data => console.log(data))
                setToggleForm(!toggleForm)
            } else {
                res.json()
                .then( e => setErrors(Object.entries(e.error).flat()))
                }
            })
    }
    
    return (
        <>
        { toggleForm ?
        <>
        <header>Create a profile</header>
        <main>
            <div className="content2">
            <form className="form1" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label"> First name
                        <input
                            className="form1-input1"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className="form-label"> Last name
                        <input
                            className="form1-input1"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className="form-label"> Sex
                        <select className="form1-input1" onChange={(e) => setSex(e.target.value)}>
                            <option></option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label className="form-label"> Date of Birth
                        <input 
                        className="form1-input1"
                        type="date" 
                        value={dob} 
                        onChange={(e) => setDob(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label className="form-label">City
                        <input
                            className="form1-input1"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className="form-label">State
                        <input
                            className="form1-input1"
                            type="text"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Create Profile</button>
            </form>
            { errors ? <p>Incorrect email or password</p> : null }
            </div>
        </main>
        </> : <Redirect to="/participant/profile" />
        }
        </>
    )
}

export default ProfileCreateForm;