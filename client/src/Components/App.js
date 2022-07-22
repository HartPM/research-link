import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Logo from './logo.png';

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
        // .then(errors => console.log(errors))
      }
    })
  }, []);

  function onLogin(newUser) {
    setUser(newUser)
  }

  function onLogout () {
    fetch("/logout", {
      method: "DELETE"
    })
    setUser(null)
  }

  if (user && user.admin) {
    return <OrganizationViews user={user} onLogout={onLogout}/>
  } else if (user) {
    return <ParticipantViews user={user} onLogout={onLogout}/>
  } else {
    return (
      <BrowserRouter>
        
          <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <img className="logo" src={Logo} alt="logo"/>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" className="fa-primary"/></svg>
                        <span className="link-text logo-text">Home</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/signup'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z" className="fa-primary"/></svg>
                            <span className="link-text logo-text">Sign up</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/signin'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z" className="fa-primary"/></svg>
                            <span className="link-text logo-text">Sign in</span>
                        </Link>
                    </li>
                    </ul>                                  
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
        
      </BrowserRouter>
    )
  }
}

export default App;