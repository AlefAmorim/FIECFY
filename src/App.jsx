import Sidebar from "./components/SideBar"
import PlaylistGrid from './components/PlaylistGrid';
import Header from './components/Header'
import Player from "./components/Player";
import Button from "./components/Button";
import CompactCard from "./components/CompactCard";

import { playlistData, playlistFyData, generos } from "./data/mockData";

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
          <section className="h-full pt-5">
            <header>
              <h2 className="text-2xl font-bold text-white mb-6">Feito para você</h2>
            </header>
            <PlaylistGrid playlistData={playlistData.filter(data => data.type === "podcast")}/>
          </section>
          <section className="flex flex-col gap-5 h-max pt-5 pb-5">
            {/* Header da seção */}
            <header>
              <h2 className="text-2xl font-bold text-white mb-6">Explorar</h2>
              <div className="flex  gap-2 justify-evenly">
                {
                  generos.map(genero => (
                    <span className={`min-w-30 p-2 text-center rounded-4xl border-2 font-bold hover:scale-105  hover:bg-gray-400/20 cursor-pointer  transition-transform 
                    ${genero.selected?"bg-white text-zinc-900 hover:text-white":""}  
                    `} key={genero.label}>{genero.label}</span>
                  ))
                }
              </div>
            </header>
            <PlaylistGrid playlistData={playlistFyData}/>
          </section>
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
