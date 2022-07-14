import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp({ onLogin }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [errors, setErrors] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        fetch("/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
              admin: admin
            })
          })
          .then(res => {
            if (res.ok) {
                res.json()
                .then((user) => onLogin(user))
            } else {
                res.json()
                .then( e => setErrors(Object.entries(e.error).flat()))
                }
            })
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h4>Sign up</h4>
                <input
                    type="email"
                    placeholder="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <label>
                    <input
                        type="checkbox"
                        value={admin}
                        onChange={(e) => setAdmin(!admin)}
                    />
                    I am creating an account for my organization.
                </label>
                <button type="submit">Sign up</button>
            </form>
            <br/>
            { 
                errors ? 
                <p>
                    Incorrect email or password
                </p> 
                : 
                null 
            }
            <Link to="/signin">
                {"Already have an account? Sign in"}
            </Link>
        </main>
    )
}

export default SignUp;