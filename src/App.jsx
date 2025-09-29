import { Suspense, useState } from 'react';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/Navbar/Navbar';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async () => {
  const res = await fetch('/playersDetails.json');
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers(); // ei variable ti na nile ow cole, direct function ta props er vitore call kore dile ow hobe

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar></Navbar>

      <div className="flex justify-between items-center max-w-[1200px] mx-auto my-5">
        <h1 className="text-3xl text-[#131313] font-bold">Available Player</h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`px-5 py-2 border-1 border-gray-300 rounded-l-2xl border-r-0 ${
              toggle === true ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Availabe
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-5 py-2 border-1 border-gray-300 rounded-r-2xl border-l-0 ${
              toggle === false ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Selected(0)
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
