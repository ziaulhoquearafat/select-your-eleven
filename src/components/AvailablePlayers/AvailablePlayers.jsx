import React, { use } from 'react';

const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <>
      <p>Available</p>
    </>
  );
};

export default AvailablePlayers;
