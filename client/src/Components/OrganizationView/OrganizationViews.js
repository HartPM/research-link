import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import Studies from './Studies';
import SignOut from '../SignOut';
import StudyDetails from './StudyDetails';
import StudyCreateForm from './StudyCreateForm';
import StudyEditForm from './StudyEditForm';
import Survey from './Survey';
import SurveyCreateForm from './SurveyCreateForm';
import PartEnrollCard from './PartEnrollCard';
import StudyApplicantCard from './StudyApplicantCard';
import Registry from './Registry';
import HomePage from '../HomePage';

function OrganizationViews({user, onLogout}) {

    return (
        <BrowserRouter>
            <body>
                <nav>
                    <ul class="navbar-nav">
                        <li>
                            <Link className='nav-link' to='/organization'>
                                <span class="link-text logo-text">Home</span>
                                
                            </Link>
                            </li>
                    </ul>

                    <Link className='link' to='/organization/registry'>
                        Registry
                    </Link>
                    <Link className='link' to='/organization/studies'>
                        Studies
                    </Link>
                    <SignOut onLogout={onLogout} />
                </nav>
                <Switch>
                    <Route path='/organization/studies/new'>
                        <StudyCreateForm user={user} />
                    </Route>
                    <Route path='/organization/studies/:trialId/edit'>
                        <StudyEditForm />
                    </Route>
                    <Route path='/organization/studies/:trialId'>
                        <StudyDetails />
                    </Route>
                    <Route path='/organization/studies'>
                        <Studies user={user} />
                    </Route>
                    <Route path='/organization/surveys/new'>
                        <SurveyCreateForm />
                    </Route>
                    <Route path='/organization/surveys/:surveyId'>
                        <Survey />
                    </Route>
                    <Route exact path='/organization/trials/:trial_id/participants/:participant_id'>
                        <PartEnrollCard />
                    </Route>
                    <Route exact path='/organization/trials/:trialId/applicants/:id'>
                        <StudyApplicantCard />
                    </Route>
                    <Route path='/organization/registry'>
                        <Registry />
                    </Route>
                    <Route path='/organization'>
                        <HomePage />
                    </Route>
                </Switch>
            </body>
        </BrowserRouter>
    )
}

export default OrganizationViews;