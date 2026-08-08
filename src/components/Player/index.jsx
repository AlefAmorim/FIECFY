import ProgressBar from "../ProgressBar";

function Player() {
    return (
        <footer className="bg-linear-to-l from-gray-950/70 to-gray-950/70 sticky  backdrop-blur-md  p-5 rounded-lg bottom-2 grid grid-cols-2  grid-rows-[90%_10%] lg:grid-cols-[40%_1fr_40%] xl:grid-rows-1 h-30  gap-2">
            <div className="flex gap-3 items-center justify-center ">
                <div className="container-image bg-green-500 h-full rounded-md flex items-center">
                    <img src="/public/icon-nota-musical.png" className="h-full" alt="Icone nota musical" />
                </div>
                <div className="info-musica flex flex-col">
                    <h3 className=" font-bold text-xl">Nome da música</h3>
                    <p className="text-sm font-semibold text-mist-500">Nome do artista</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center gap-2 p-1">
            {/* Nossos botões serão estáticos por enquanto! */}
                <button className="w-12 h-12 rounded-full bg-white text-green-500 p-2 font-bold  hover:bg-gray-300 transition-colors cursor-pointer">
                    Play
                </button>
                <button className="w-15 h-12 rounded-lg bg-white text-black  font-bold hover:bg-gray-300 transition-colors cursor-pointer text-center">
                    Pause
                </button>
            </div>
            <div className="container-progress flex items-center p-2 w-full col-span-full md:col-start-auto">
                <ProgressBar />
            </div>
        </footer>
    );
    // fixed
}

export default Player;
