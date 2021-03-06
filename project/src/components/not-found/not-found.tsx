import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div style={{paddingTop: '50px'}}>
      <h1 style={{fontSize: '40px', color: 'black', textAlign: 'center'}}>404 Not found</h1>
      <p  style={{textAlign: 'center'}}>
        <Link to={AppRoute.Main} style={{color: '#4481c3'}}>Back to main page</Link>
      </p>
    </div>
  );
}

export default NotFound;
