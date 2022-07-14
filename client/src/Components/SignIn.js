import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignIn({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                    .then((user) => onLogin(user))
                } else {
                    res.json()
                    .then(obj => setErrors(obj.error))
                }
            })
    }

    return (
        <>
        <header>Research Link</header>
        <main>
            <div className="content2">
                <form onSubmit={handleSubmit}>
                    <h1>
                        Sign in
                    </h1>
                    <div>
                        <input
                            className="form1-input3"
                            type="email"
                            placeholder="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="form1-input3"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br/>
                    <button type="submit">Sign in</button>
                </form>
                { errors ? <p>Incorrect email or password</p> : null }
                <br/>
                <Link to="/signup">
                    {"Don't have an account? Sign Up"}
                </Link>
            </div>
        </main>
        </>
    )
}

export default SignIn;