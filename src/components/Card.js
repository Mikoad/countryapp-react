import React from "react";

//on passe la prop country de Countries.js à Card.js car c'est élément enfant, l'inverse n'est pas possible
const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>{"Pop : " + country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
