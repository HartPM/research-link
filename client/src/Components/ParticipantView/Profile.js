import { Redirect } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import EnrolledTrials from './EnrolledTrials';
import SurveyedTrials from './SurveyedTrials';

function Profile({ user }) {
    
    return (
        <>
            { !!user.participant ? 
            <>
                <header>Profile</header>
                <main>
                    <div className='content2'>
                        <ProfileCard user={user} />
                        <br/>
                        <br/>
                        <EnrolledTrials user={user} />
                        <br/>
                        <SurveyedTrials user={user} />
                    </div> 
                </main>
            </>
            : <Redirect to='/participant/profile/new' /> }
        </>
    )
}

export default Profile;