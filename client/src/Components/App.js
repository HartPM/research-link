import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import HomePage from './HomePage';
import ParticipantViews from './ParticipantView/ParticipantViews';
import OrganizationViews from './OrganizationView/OrganizationViews';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json()
        .then(data => setUser(data))
      } else {
        r.json()
        .then(errors => console.log(errors))
      }
    })
  }, []);

  function onLogout () {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(r => console.log(r))
    setUser(null)
  }

  if (user && user.admin) {
    return <OrganizationViews user={user} onLogout={onLogout}/>
  } else if (user) {
    return <ParticipantViews user={user} onLogout={onLogout}/>
  } else {
    return (
      <BrowserRouter>
        <body>
          <nav>
            <Link className='link' to='/'>
              Home
            </Link>
            <Link className='link' to='/signup'>
              Sign up
            </Link>
            <Link className='link' to='/signin'>
              Sign in
            </Link>
          </nav>
          <Switch>
            <Route path='/signin'>
              <SignIn onLogin={setUser} />
            </Route>
            <Route path='/signup'>
              <SignUp onLogin={setUser}/>
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </body>
      </BrowserRouter>
    )
  }
}

export default App;