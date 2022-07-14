import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

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
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link' to='/organization'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" className="fa-primary"/></svg>
                                <span className="link-text logo-text">Home</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/organization/registry'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z" className="fa-primary"/></svg>
                                    <span className="link-text logo-text">Registry</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/organization/studies'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 46.33 14.33 32 32 32H224C241.7 32 256 46.33 256 64C256 81.67 241.7 96 224 96V266.8C203.8 295.4 192 330.3 192 368C192 393.2 197.3 417.1 206.8 438.8C189.5 463.7 160.6 480 128 480C74.98 480 32 437 32 384V96C14.33 96 0 81.67 0 64V64zM96 192H160V96H96V192zM512 368C512 447.5 447.5 512 368 512C288.5 512 224 447.5 224 368C224 288.5 288.5 224 368 224C447.5 224 512 288.5 512 368zM412.7 324.7L352 385.4L323.3 356.7C317.1 350.4 306.9 350.4 300.7 356.7C294.4 362.9 294.4 373.1 300.7 379.3L340.7 419.3C346.9 425.6 357.1 425.6 363.3 419.3L435.3 347.3C441.6 341.1 441.6 330.9 435.3 324.7C429.1 318.4 418.9 318.4 412.7 324.7H412.7z" className="fa-primary"/></svg>
                                    <span className="link-text logo-text">Studies</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <SignOut onLogout={onLogout} />
                            </li>
                    </ul>                                  
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