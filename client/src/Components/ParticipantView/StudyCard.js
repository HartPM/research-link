import { Link } from 'react-router-dom';

function StudyCard({ trial }) {

    return (
        <li>
            <Link to={`/participant/studies/${trial.id}`} className='studyLink'>
                <div>
                    <h5>{trial.title}</h5>
                </div>
                <div>
                    <p>{trial.description.slice(0,150)}...</p>
                </div>            
            </Link>
        </li>
    )
}

export default StudyCard;