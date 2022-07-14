

function ProfileCard({ user }) {
    const { participant } = user;

    return (
        <>
            <div className='content2'>
                <h1>{participant.first_name} {participant.last_name}</h1>
                <h3>{participant.sex}</h3>
                <h3>{participant.format_dob}</h3>
                <h3>{participant.city}, {participant.state}</h3>
                <h3>{participant.email}</h3>
            </div>
        </>
    )
}

export default ProfileCard;