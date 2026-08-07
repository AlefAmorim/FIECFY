import ProgressBar from "../ProgressBar";

function Player() {
    return (
        <footer className="bg-gray-900 fixed w-100 p-3 rounded-lg top-9/12 left-5/12 flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
                <h3 className="text-base font-bold">Nome da música</h3>
                <i>-</i>
                <p className="text-sm font-semibold text-mist-500">Nome do artista</p>
            </div>
            <ProgressBar/>
            <div className="w-100 flex justify-center gap-2 p-1">
                {/* Nossos botões serão estáticos por enquanto! */}
                <button className="w-12 h-12 rounded-full bg-white text-green-500 p-2 font-bold  hover:bg-gray-300 transition-colors cursor-pointer">
                    Play
                </button>
                <button className="w-15 h-12 rounded-lg bg-white text-black  font-bold hover:bg-gray-300 transition-colors cursor-pointer text-center">Pause</button>
            </div>
        </footer>
    );
}

export default Player;