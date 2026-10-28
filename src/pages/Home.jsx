import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Sidebar from "../components/SideBar";
import PlaylistGrid from "../components/PlaylistGrid";
import Header from "../components/Header";
import Player from "../components/Player";
import CompactCard from "../components/CompactCard";
import { playlistData, generos } from "../data/mockData";
import LoginForm from "../components/LoginForm";

function Home({ user, userChange }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dados, setDados] = useState({
    email: "",
    password: "",
  });
  const clearSearch = () => {
    setSearchTerm("");
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(dados)
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: "post",
        body: JSON.stringify(dados),
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        }
      });
      const dadosJson = await response.json();
      if (!response.ok) throw Error(dadosJson.message, { cause: "INTERNAL" });
      localStorage.setItem("tkn", dadosJson.tkn)
      localStorage.setItem("dados", JSON.stringify(dadosJson.dados))
      userChange(dadosJson.dados);
      setIsOpen(!isOpen)
    } catch (error) {
      console.error(error.cause);
      console.error(error.code);
      console.error(error.message);
    }
  };

  return (
    <div className="layout-principal flex flex-col  w-screen text-white bg-zinc-950 h-screen relative">
      <div className="flex flex-1 overflow-hidden ">
        <Sidebar />
        <main className="flex-1 /*flex-col*/ gap-5 h-full w-full m-2 p-6 pt-0 bg-zinc-900 rounded-lg overflow-y-auto">
          <Header
            searchTerm={searchTerm}
            loginHandle={() => setIsOpen(true)}
            handleChange={handleInput}
            handleClear={clearSearch}
            user={user}
          />

          {/* Renderizado ao clicar no botão de login do header */}
          {isOpen && (
            <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
          )}
          <div className="flex  flex-row gap-3 pt-10 flex-wrap">
            <CompactCard title="Good Vibes" />
            <CompactCard title="Music to play" />
            <CompactCard title="Lo-fi" />
            <CompactCard title="Rock" />
            <CompactCard title="Favoritos" />
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
            {isExpanded && <PlaylistGrid playlistData={playlistData} />}
          </section>
          <section className="flex flex-col gap-5 h-max pt-5 pb-5">
            {/* Header da seção */}
            <header>
              <h2 className="text-2xl font-bold text-white mb-6">Explorar</h2>
              <div className="flex  gap-2 ">
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
        </main>
      </div>
      <Player />
    </div>
  );
}

export default Home;
