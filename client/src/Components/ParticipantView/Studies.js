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
            <header>Current Research Studies</header>
            <main>
                <div className="tools">
                <StudySearchBar search={search} />
                </div>
                <ul>
                    {searchFilter.map(trial => <StudyCard key={trial.id} trial={trial} />)}
                </ul>
            </main>
        </>
    )
}

export default Studies;