import { Redirect } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import EnrolledTrials from './EnrolledTrials';
import SurveyedTrials from './SurveyedTrials';

function Profile({ user }) {
    
    return (
        <>
            { !!user.participant ? 
            <>
                <div className='content2'>
                    <ProfileCard user={user} />
                    <EnrolledTrials user={user} />
                    <SurveyedTrials user={user} />
                </div> 
            </>
            : <Redirect to='/participant/profile/new' /> }
        </>
    )
}

export default Profile;