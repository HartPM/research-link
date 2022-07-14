import { useState } from 'react';
import { Link } from 'react-router-dom';
import StudySearchBar from './StudySearchBar';
import StudyCard from './StudyCard';


function Studies({ user }) {
    const { trials } = user;
    const [query, setQuery] = useState('');
    const [dd, setDd] = useState('');

    function search(searchText) {
        setQuery(searchText);
      }

    let searchFilter = trials.filter(trial => {
        return trial.title.toLowerCase().includes(query.toLowerCase()) || trial.description.toLowerCase().includes(query.toLowerCase());
    });

    let filteredResults = searchFilter
    switch (dd) {
        case 'participants':
            filteredResults = searchFilter.filter(trial => trial.count > trial.enrollments.length);
            break;
        case 'full':
            filteredResults = searchFilter.filter(trial => trial.count <= trial.enrollments.length);
            break;
        default:
            filteredResults = searchFilter;
    }

    return (
        <main>
            <header>
                Studies
            </header>
            <Link to={'/organization/studies/new'}>
                <button>New Study</button>
            </Link>
            <br/>
            <StudySearchBar search={search} />  
            <br/>
            <label> Filter
                <select type="dropdown" onChange={e => setDd(e.target.value)}>
                    <option></option>
                    <option value='participants'>Participants needed</option>
                    <option value='full'>Fully enrolled</option>
                </select>
            </label>
            <br/>
            <ul>
                {filteredResults.map(trial => <StudyCard key={trial.id} trial={trial} />)}
            </ul>
        </main>
    )
}

export default Studies;