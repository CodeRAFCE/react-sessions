

const RestaurantCard = ({ name, cuisine, rating, deliveryTime, imgUrl }) => (
  <div className="res-card">
    <img className="res-card-img" src={imgUrl} alt={name} />
    <div className="res-card-body">
      <h3>{name}</h3>
      <p className="cuisine">{cuisine}</p>
      <div className="res-card-footer">
        <span className="rating">{rating}</span>
        <span className="delivery-time">{deliveryTime} mins</span>
      </div>
    </div>
  </div>
);

export default RestaurantCard;