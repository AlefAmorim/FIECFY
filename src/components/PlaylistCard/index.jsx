function PlaylistCard({title, description, imgUrl}) {
    return (
        <div className="group card relative flex flex-col max-w-60 p-2 min-h-80 items-center  bg-zinc-800/20  text-white rounded-lg gap-4 cursor-pointer hover:bg-zinc-700 hover:scale-102  transition-colors ">
            <div className="image-wrapper max-w-full hover:bg-zinc-800 transition-colors">
                <img src={imgUrl || "/imagem-card-default.png"} className="rounded-md" alt="Capa playlist padrão" />
            </div>
            <div className="info-musica flex flex-col justify-end">
                <div className="w-15 h-15 content-center text-center font-semibold rounded-full absolute bg-green-700 left-40 top-50  scale-0 group-hover:scale-100 hover:bg-green-800 transition-transform">
                    Play
                </div>
                <h2 className="titulo font-semibold text-lg text-balance text-zinc-200">{title}</h2>
                <p className="descricao text-balance  font-semibold text-sm text-zinc-400">{description}</p>
            </div>
        </div>
    );
}

export default PlaylistCard;