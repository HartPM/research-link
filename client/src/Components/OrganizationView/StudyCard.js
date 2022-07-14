import { Link } from 'react-router-dom';

function StudyCard({ trial }) {

    return (
        <li className="study-card">
            <Link to={`/organization/studies/${trial.id}`} className='studyLink'>
                <div>
                    <h3>{trial.title}</h3>
                </div>
                <div>
                    <p>{trial.description.slice(0,150)}...</p>
                </div>            
            </Link>
        </li>
    )
}

export default StudyCard;