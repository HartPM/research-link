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
        <main>
            <header>Applicant Registry</header>
            <table>
                <thead>
                <tr>
                    <th><button className='tSort' onClick={() => setSortedField('last_name')}>Last</button></th> 
                    <th><button className='tSort' onClick={() => setSortedField('first_name')}>First</button></th>
                    <th><button className='tSort' onClick={() => setSortedField('sex')}>Sex</button></th>
                    <th><button className='tSort' onClick={() => setSortedField('age')}>Age</button></th>
                    <th><button className='tSort' onClick={() => setSortedField('state')}>Location</button></th>
                    <th><button className='tSort' onClick={() => setSortedField('email')}>Email</button></th>
                </tr>
                </thead>
                <tbody>
                    { sortedParticipants.map((p, i) => <RegistryRow key={i} participant={p} />) }
                </tbody>
            </table>
        </main>
    )
}

export default Registry;