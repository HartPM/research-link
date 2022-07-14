function RegistryRow({participant}) {
    const {last_name, first_name, sex, age, state, email} = participant;

    return (
        <tr>
            <td>{last_name}</td>
            <td>{first_name}</td>
            <td>{sex}</td>
            <td>{age}</td>
            <td>{state}</td>
            <td>{email}</td>
        </tr>
    )
}

export default RegistryRow;