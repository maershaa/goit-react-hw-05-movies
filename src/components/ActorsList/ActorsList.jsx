import React from 'react';
import ActorItem from 'components/ActorsList/ActorItem/ActorItem';
import { StyledActorsList } from 'components/ActorsList/StyledActorsList';

const ActorsList = ({ actors }) => {
  return (
    <StyledActorsList className="actorsList">
      {actors.map(actor => (
        <ActorItem
          key={actor.id}
          actorImg={actor.profile_path}
          name={actor.name}
          character={actor.character}
        ></ActorItem>
      ))}
    </StyledActorsList>
  );
};

export default ActorsList;
