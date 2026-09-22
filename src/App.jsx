import Sidebar from "./components/SideBar";
import PlaylistGrid from "./components/PlaylistGrid";
import Header from "./components/Header";
import Player from "./components/Player";
import Button from "./components/Button";
import CompactCard from "./components/CompactCard";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { playlistData, generos } from "./data/mockData";
import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlist, setPlaylist] = useState();

  const clearSearch = () => {
    setSearchTerm("");
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    const buscarDados = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
      const data = await response.json();
      setPlaylist(data);
    }

    buscarDados();
  },[])

  return (
    <div className="layout-principal flex flex-col  w-screen text-white bg-zinc-950 h-screen relative">
      <div className="flex flex-1 overflow-hidden ">
        <Sidebar />
        <main className="flex-1 /*flex-col*/ gap-5 h-full w-full m-2 p-6 pt-0 bg-zinc-900 rounded-lg overflow-y-auto">
          <Header searchTerm={searchTerm} loginHandle={() => setIsOpen(true)} handleChange={handleInput} handleClear={clearSearch}/>

          {/* Renderizado ao clicar no botão de login do header */}
          {isOpen && (
            <LoginForm isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
          )}
          <div className="flex  flex-row gap-3 pt-10 flex-wrap">
            <CompactCard title="Good Vibes" />
            <CompactCard title="Music to play" />
            <CompactCard title="Lo-fi" />
            <CompactCard title="Top 10" />
          </div>
          <section className="pt-3">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Minhas playlists
              <button
                className="h-10 w-10 flex items-center p-2 hover:bg-zinc-500/30 rounded-full cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <IoMdArrowDropup size={30} />
                ) : (
                  <IoMdArrowDropdown size={30} />
                )}
              </button>
            </h3>
            {isExpanded && <PlaylistGrid playlistData={playlist} />}
          </section>
          <section className="h-max pt-5">
            <header>
              <h2 className="text-2xl font-bold text-white mb-6">
                Feito para você
              </h2>
            </header>
            <PlaylistGrid
              playlistData={playlistData.filter(
                (data) => data.type === "podcast",
              )}
            />
          </section>
          <section className="h-max pt-5">
            <header>
              <h2 className="text-2xl font-bold text-white mb-6">
                Ta na moda
              </h2>
            </header>
            <PlaylistGrid
              playlistData={playlistData.filter(
                (album) => album.title.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          </section>
          <section className="flex flex-col gap-5 h-max pt-5 pb-5">
            {/* Header da seção */}
            <header>
              <h2 className="text-2xl font-bold text-white mb-6">Explorar</h2>
              <div className="flex  gap-2 justify-evenly">
                {generos.map((genero) => (
                  <span
                    className={`min-w-30 p-2 text-center rounded-4xl border-2 font-bold hover:scale-105  hover:bg-gray-400/20 cursor-pointer  transition-transform 
                    ${genero.selected ? "bg-white text-zinc-900 hover:text-white" : ""}  
                    `}
                    key={genero.label}
                  >
                    {genero.label}
                  </span>
                ))}
              </div>
            </header>
            <PlaylistGrid playlistData={playlistData} />
          </section>
          <Button>Play</Button>
        </main>
      </div>
      <Player />
    </div>
  );
}

export default App;
