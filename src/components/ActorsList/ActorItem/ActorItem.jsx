import React from 'react';
import { StyledActorItem } from 'components/ActorsList/ActorItem/StyledActorItem';

const ActorItem = ({ id, profile_path, name, character }) => {
  const imageUrl = profile_path
    ? `https://www.themoviedb.org/t/p/w240_and_h266_face${profile_path}`
    : 'https://lmm.in.ua/image/cache/catalog/image/cache/catalog/3/7/9/3796/1-650x650.webp'; //заглушка
  console.log(imageUrl);

  return (
    <StyledActorItem className="actorItem">
      <img src={imageUrl} alt={name} width="264" className="imgActor" />
      <h3 className="actorsName"> {name}</h3>
      <p className="text"> {character}</p>
    </StyledActorItem>
  );
};

export default ActorItem;
