import { Link } from 'react-router-dom';
import './CardTeam.css';

export default function CardTeam({ item }) {
  return (
    <Link to={'/detail-kit/' + item.club_name}>
      <div className="card">
        <div className="card-image">
          <img src={item.image} alt={item.club_name} />
        </div>
        <div className="card-content">
          <p>{item.club_name}</p>
          <img
            src={item.team_logo}
            alt="team_logo"
            className="card-content-image"
          />
        </div>
      </div>
    </Link>
  );
}
