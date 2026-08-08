function PlaylistCard() {
    return (
        <div className="card flex flex-col max-w-60 p-4 h-90 items-center  bg-zinc-900  text-white rounded-lg gap-4 hover:bg-zinc-800  transition-colors ">
            <div className="image-wrapper max-w-full hover:bg-zinc-800 cursor-pointer transition-colors">
                <img src="/public/imagem-card-default.png" className="rounded-md" alt="Capa playlist padrão" />
            </div>
            <div className="info-musica flex flex-col justify-end">
                <h2 className="titulo font-semibold text-xl">Música</h2>
                <p className="descricao ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    );
}

export default PlaylistCard;