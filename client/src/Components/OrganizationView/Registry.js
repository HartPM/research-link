import { useEffect, useState } from 'react';
import RegistryRow from './RegistryRow';

function Registry () {
    const [participants, setParticipants] = useState([]);
    const [sortedField, setSortedField] =  useState(null);

    useEffect(() => {
        fetch('/participants')
        .then(r => r.json())
        .then(data => setParticipants(data))
    }, [])

    let sortedParticipants = [...participants];
    if (sortedField !== null) {
        sortedParticipants.sort((a, b) => {
          if (a[sortedField] < b[sortedField]) {
            return -1;
          }
          if (a[sortedField] > b[sortedField]) {
            return 1;
          }
          return 0;
        })
    }

    return (
        <>
        <header>Applicant Registry</header>
        <main>
            <table>
                <thead>
                <tr>
                    <th><button className='t-sort' onClick={() => setSortedField('last_name')}>Last &#9660;</button></th> 
                    <th><button className='t-sort' onClick={() => setSortedField('first_name')}>First &#9660;</button></th>
                    <th><button className='t-sort' onClick={() => setSortedField('sex')}>Sex &#9660;</button></th>
                    <th><button className='t-sort' onClick={() => setSortedField('age')}>Age &#9660;</button></th>
                    <th><button className='t-sort' onClick={() => setSortedField('state')}>Location &#9660;</button></th>
                    <th><button className='t-sort' onClick={() => setSortedField('email')}>Email &#9660;</button></th>
                </tr>
                </thead>
                <tbody>
                    { sortedParticipants.map((p, i) => <RegistryRow key={i} participant={p} />) }
                </tbody>
            </table>
        </main>
        </>
    )
}

export default Registry;