

function ProfileCard({ user }) {
    const { participant } = user;

    return (
        <>
            <main>My Profile</main>
            <div className='content2'>
                <h3>{participant.first_name} {participant.last_name}</h3>
                <h5>{participant.sex}</h5>
                <h5>{participant.format_dob}</h5>
                <h5>{participant.city}, {participant.state}</h5>
                <h5>{participant.email}</h5>
            </div>
        </>
    )
}

export default ProfileCard;