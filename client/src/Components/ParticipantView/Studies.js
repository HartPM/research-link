import { useEffect, useState } from 'react';
import StudyCard from './StudyCard';
import StudySearchBar from './StudySearchBar';

function Studies() {
    const [trials, setTrials] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch('/trials')
          .then((r) => r.json())
          .then((data) => setTrials(data));
      }, []);

      function search(searchText) {
        setQuery(searchText);
      }

      let searchFilter = trials.filter(trial => {
            return trial.title.toLowerCase().includes(query.toLowerCase()) || trial.description.toLowerCase().includes(query.toLowerCase());
        });

    return (
        <>
            <main>Current Research Studies</main>
            <div className='content2'>
                <br />
                <StudySearchBar search={search} />
                <br/>
                <ul>
                    {searchFilter.map(trial => <StudyCard key={trial.id} trial={trial} />)}
                </ul>
            </div>
        </>
    )
}

export default Studies;