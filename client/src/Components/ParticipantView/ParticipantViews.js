import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import SignOut from '../SignOut';
import Profile from './Profile';
import ProfileCreateForm from './ProfileCreateForm';
import Studies from './Studies';
import StudyDetails from './StudyDetails';
import Survey from './Survey';

function ParticipantViews({user, onLogout}) {  

  return (
    <BrowserRouter>
      <div className='container'>
        <nav>
          <Link className='link' to='/participant/profile'>
            Profile
          </Link>
          <Link className='link' to='/participant/studies'>
            Studies
          </Link>
          <SignOut onLogout={onLogout} />
        </nav>
        <Switch>
          <Route exact path='/participant/profile'>
            <Profile user={user} /> 
          </Route>
          <Route exact path='/participant/profile/new'>
            <ProfileCreateForm user={user} />
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
        </Switch>
        <footer>
          Do not store real user information on this page. This program is intended to function as a proof of concept, and not to be used for collecting personal information. 
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default ParticipantViews;