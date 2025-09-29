import React, { useState } from 'react';
import userImg from '../../assets/user.png';
import flagImg from '../../assets/flag.png';

const PlayerCard = ({ player }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          src={player.Player_image}
          alt="Shoes"
          className="w-full h-[300px] object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex gap-2">
          <img src={userImg} alt="" />
          <h2 className="card-title">{player.Player_name}</h2>
        </div>

        <div className="flex justify-between items-center border-b-1 border-gray-300 pb-2">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
            <span className="ml-3">{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between items-center my-2">
          <span className="font-bold">Rating</span>
          <span>{player.Rating}</span>
        </div>

        <div className="flex justify-between items-center my-2">
          <span className="font-bold">Batting Style</span>
          <span className="text-gray-400 font-semibold">
            {player.Batting_style}
          </span>
        </div>

        <div className="flex justify-between items-center my-2">
          <span className="font-bold">Bowling Style</span>
          <span className="text-gray-400 font-semibold">
            {player.Bowling_style}
          </span>
        </div>

        <div className="flex justify-between items-center my-2">
          <p className="font-bold">Price: ${player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => setIsSelected(true)}
            className="btn text-gray-400 border-1 border-gray-100"
          >
            {isSelected === true ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
