import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';

function SignUp({ onLogin }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [errors, setErrors] = useState('');
    const [access, setAccess] = useState(false);

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
                setAccess(!access)
            } else {
                res.json()
                .then( e => setErrors(Object.entries(e.error).flat()))
                }
            })
    }

    return (
        <>
        {
            access & admin ? <Redirect to='/organization' /> : 
            access ? <Redirect to='/participant/profile/new' /> :
        <>
        <header>Research Link</header>
        <main>
            <div className="content2">
                <form onSubmit={handleSubmit}>
                    <h1>
                        Sign up
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
                    <div className="sign-up-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                value={admin}
                                onChange={(e) => setAdmin(!admin)}
                            />
                            I am creating an account for my organization.
                        </label>
                    </div>
                    <br/>
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
            </div>
        </main>
        </>
        }
        </>
    )
}

export default SignUp;