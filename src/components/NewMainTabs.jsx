import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function NewMainTabs() {
    return (
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            
        </ul>
        </>
    );
}

export default NewMainTabs;
