import React from 'react'


function CardDisplay(props) {
  // console.log(props.length)
  return (
    <div className="card">
      <div className="card-number">
        <p className="card-number-child">{props.person.id}/25{props.person.length}</p>
      </div>
      <div className="person-name">
        <p>{props.person.name.first} {props.person.name.last}</p>
      </div>
      <div className="info-box">
        <span className="title-info">From:</span>
        <span> {props.person.city}, {props.person.country} </span>
      </div>
      <div className="info-box">
        <span className="title-info">Job Title:</span>
        <span> {props.person.title} </span>
      </div>
      <div className="info-box">
        <span className="title-info">Employer:</span>
        <span> {props.person.employer} </span>
      </div>
      <div className="info-box favorites">
        <div className="title-info">Favorite Movies:</div>
        <ol>
          <li>{props.person.favoriteMovies[0]}</li>
          <li>{props.person.favoriteMovies[1]}</li>
          <li>{props.person.favoriteMovies[2]}</li>
        </ol>
      </div>
    </div>
  )
}

export default CardDisplay