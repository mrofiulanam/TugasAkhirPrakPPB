import './CardDetail.css';

export default function CardDetail({ item }) {
  return (
    <div className="card-detail">
      <div className="card-detail-image">
        <img src={item.image} alt={item.club_name} />
      </div>
      <div className="card-detail-content">
        <div className="club-name">
          <p className="club-name-label">Club Name</p>
          <p>
            <img src={item.team_logo} alt="team_logo" className="" />
            {item.club_name}
          </p>
        </div>
        <div className="apparel-name">
          <p className="apparel-name-label">Apparel Name</p>
          <p>{item.apparel}</p>
        </div>
        <div className="description">
          <p className="description-name-label">Description</p>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}
