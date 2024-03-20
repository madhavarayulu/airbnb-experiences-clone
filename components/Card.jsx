/* eslint-disable react/prop-types */
import 'react';

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card--image"
        src={`${props.item.coverImg}`}
        alt="main card image"
      />
      <div className="card--stats">
        <img className="card--star" src="star.png" alt="star icon" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">
          {' '}
          ({props.item.stats.reviewCount}) &#x2022;{' '}
        </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <h2 className="card--title">{props.item.title}</h2>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
