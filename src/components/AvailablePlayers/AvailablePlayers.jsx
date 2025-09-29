import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-5">
        {playerData.map(player => (
          <PlayerCard key={player.Id} player={player}></PlayerCard>
        ))}
      </div>
    </>
  );
};

export default AvailablePlayers;
