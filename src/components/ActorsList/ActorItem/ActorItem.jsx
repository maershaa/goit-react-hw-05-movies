import React from 'react';

const ActorItem = (id, name, character) => {
  return (
    <li class="actorItem">
      <img src="#" alt={name} width="264" />
      <h3>Name of the actor: {name}</h3>
      <p> Character: {character}</p>
    </li>
  );
};

export default ActorItem;
