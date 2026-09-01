import Sidebar from "./components/SideBar"
import PlaylistGrid from './components/PlaylistGrid';
import Header from './components/Header'
import Player from "./components/Player";
import Button from "./components/Button";
import CompactCard from "./components/CompactCard";

import { playlistData } from "./data/mockData";

function App() {
  return (
    <div className="layout-principal flex flex-col  w-screen text-white bg-zinc-950 h-screen">
      <div className="flex flex-1 overflow-hidden ">
          <Sidebar />
        <main className="flex-1 /*flex-col*/ gap-5 h-full w-full m-2 p-6 pt-0 bg-zinc-900 rounded-lg overflow-y-auto">
          <Header/>
          <div className="flex  flex-row gap-3 pt-10 flex-wrap">
            <CompactCard title="Good Vibes"/>
            <CompactCard title="Music to play"/>
            <CompactCard title="Lo-fi"/>
            <CompactCard title="Top 10"/>
          </div>
          <div className="h-[800px] pt-5">
            <h2 className="text-2xl font-bold text-white mb-6">Feito para você</h2>
            <PlaylistGrid playlistData={playlistData}/>
          </div>
        <Button>
          Play
        </Button>
        </main>
      </div>
      <Player/> 
    </div>
  )
}

export default App
