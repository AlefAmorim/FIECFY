function PlaylistCard() {
    return (
        <div className="card flex flex-col max-w-50 p-4 items-center  bg-zinc-900  text-white rounded-lg gap-4 hover:bg-zinc-800  transition-colors ">
            <div className="image-wrapper max-w-40 ">
                <img src="/public/imagem-card-default.png" className="rounded-md" alt="Capa playlist padrão" />
            </div>
            <h2 className="titulo font-semibold text-xl">Música</h2>
            <p className="descricao text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    );
}

export default PlaylistCard;