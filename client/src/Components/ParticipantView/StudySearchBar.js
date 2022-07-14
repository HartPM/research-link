import { useState, useEffect } from 'react';

function StudySearchBar({search}) {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        search(searchText)
      }, [searchText, search]);

  
    return (
      <>
      <label>{'search: '}
        <input
          type="text"
          placeholder="Search for a study"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        </label>
      </>
    );
}

export default StudySearchBar;