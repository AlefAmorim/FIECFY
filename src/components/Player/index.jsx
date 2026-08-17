import ProgressBar from "../ProgressBar";


function Player() {
    return (
        <footer className="bg-linear-to-l from-zinc-950/70 to-zinc-950/70 /*fixed*/  backdrop-blur-md  p-5   flex justify-center  w-screen h-30  gap-2">
            <div className="flex  gap-3 items-center justify-start ">
                <div className="container-image bg-green-500 h-full rounded-md flex items-center">
                    <img src="/public/icon-nota-musical.png" className="h-full" alt="Icone nota musical" />
                </div>
                <div className="info-musica flex flex-col">
                    <h3 className=" font-bold text-xl">Nome da música</h3>
                    <p className="text-sm font-semibold text-mist-500">Nome do artista</p>
                </div>
            </div>
            <div className="  flex-1 flex items-center justify-center gap-2 p-1">
            {/* Nossos botões serão estáticos por enquanto! */}
                <button className="w-12 h-12 rounded-full bg-white text-green-500 p-2 font-bold  hover:bg-gray-300 transition-colors cursor-pointer">
                    Play
                </button>
                <button className="w-15 h-12 rounded-lg bg-white text-black  font-bold hover:bg-gray-300 transition-colors cursor-pointer text-center">
                    Pause
                </button>
            </div>
            <div className="container-progress flex items-center p-2 w-1/3 justify-end">
                <ProgressBar />
            </div>
        </footer>
    );
}


export default Player;
