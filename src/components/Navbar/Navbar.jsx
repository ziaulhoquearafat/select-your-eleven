import React from 'react';
import navImg from '../../assets/logo.png';
import currencyImg from '../../assets/Currency.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto py-6">
        <div className="flex-1">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </div>
        <div className="flex gap-1 items-center">
          <span>60000000</span>
          <span>Coin</span>
          <img src={currencyImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
