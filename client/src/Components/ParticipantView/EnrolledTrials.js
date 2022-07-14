import EnrolledTrialCard from './EnrolledTrialCard';

function EnrolledTrials({ user }) { 
    const { participant } = user;
    const { enrollments } = participant;
    
    return (
        <>
            <h2>Enrolled Trials</h2>
            { enrollments?.length > 0 ? enrollments.map(enrollment => <EnrolledTrialCard key={enrollment.id} trialId={enrollment.trial_id} />) : <p>None</p>}
        </>
    )
}

export default EnrolledTrials;