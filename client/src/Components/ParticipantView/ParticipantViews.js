import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import SignOut from '../SignOut';
import Profile from './Profile';
import ProfileCreateForm from './ProfileCreateForm';
import Studies from './Studies';
import StudyDetails from './StudyDetails';
import Survey from './Survey';
import HomePage from '../HomePage';

function ParticipantViews({user, onLogout, onLogin}) {  

  return (
    <BrowserRouter>
      <body>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className='nav-link' to='/participant'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" className="fa-primary"/></svg>
                    <span className="link-text logo-text">Home</span>
                </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/participant/profile'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" className="fa-primary"/></svg>
                        <span className="link-text logo-text">Profile</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/participant/studies'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 46.33 14.33 32 32 32H224C241.7 32 256 46.33 256 64C256 81.67 241.7 96 224 96V266.8C203.8 295.4 192 330.3 192 368C192 393.2 197.3 417.1 206.8 438.8C189.5 463.7 160.6 480 128 480C74.98 480 32 437 32 384V96C14.33 96 0 81.67 0 64V64zM96 192H160V96H96V192zM512 368C512 447.5 447.5 512 368 512C288.5 512 224 447.5 224 368C224 288.5 288.5 224 368 224C447.5 224 512 288.5 512 368zM412.7 324.7L352 385.4L323.3 356.7C317.1 350.4 306.9 350.4 300.7 356.7C294.4 362.9 294.4 373.1 300.7 379.3L340.7 419.3C346.9 425.6 357.1 425.6 363.3 419.3L435.3 347.3C441.6 341.1 441.6 330.9 435.3 324.7C429.1 318.4 418.9 318.4 412.7 324.7H412.7z" className="fa-primary"/></svg>
                        <span className="link-text logo-text">Studies</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <SignOut onLogout={onLogout}/>
                </li>
          </ul>                                  
        </nav>
        <Switch>
          <Route exact path='/participant/profile'>
            <Profile user={user} /> 
          </Route>
          <Route exact path='/participant/profile/new'>
            <ProfileCreateForm user={user} onLogin={onLogin}/>
          </Route>
          <Route exact path='/participant/studies'>
            <Studies />
          </Route>
          <Route path='/participant/studies/:trialId'>
            <StudyDetails />
          </Route>
          <Route path='/participant/surveys/:surveyId'>
            <Survey user={user} />
          </Route>
          <Route path='/participant'>
            <HomePage />
          </Route>
        </Switch>
      </body>
    </BrowserRouter>
  );
}

export default ParticipantViews;