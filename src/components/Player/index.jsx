import { useState } from "react";
import ProgressBar from "../ProgressBar";
import {
  MdOutlinePlayArrow,
  MdPause,
  MdAddCircleOutline,
  MdCheckCircle,
} from "react-icons/md";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [curtido, setCurtido] = useState(false);
  return (
    <footer className="bg-linear-to-l from-zinc-950/70 to-zinc-950/70 /*fixed*/  backdrop-blur-md  p-5   flex justify-center  w-screen h-30  gap-2">
      <div className="flex  gap-3 items-center justify-start ">
        <div className="container-image bg-green-500 h-full rounded-md flex items-center">
          <img
            src="/icon-nota-musical.png"
            className="h-full"
            alt="Icone nota musical"
          />
        </div>
        <div className="info-musica flex flex-col">
          <h3 className=" font-bold text-xl">Nome da música</h3>
          <p className="text-sm font-semibold text-mist-500">Nome do artista</p>
        </div>
        <button
          className="w-10 h-10 rounded-full  text-green-500 p-2 font-bold flex justify-center items-center hover:bg-zinc-500/60 transition-colors cursor-pointer"
          onClick={() => setCurtido(!curtido)}
        >
          {curtido ? (
            <MdCheckCircle size={40} />
          ) : (
            <MdAddCircleOutline size={40} />
          )}
        </button>
      </div>
      <div className="  flex-1 flex items-center justify-center gap-2 p-1">
        {/* Nossos botões serão estáticos por enquanto! */}
        <button
          className="w-12 h-12 rounded-full bg-white text-green-500 p-2 font-bold flex justify-center items-center hover:bg-gray-300 transition-colors cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <MdOutlinePlayArrow size={30} /> : <MdPause size={30} />}
        </button>
      </div>
      <div className="container-progress flex items-center p-2 w-1/3 justify-end">
        <ProgressBar />
      </div>
    </footer>
  );
}

export default Player;
