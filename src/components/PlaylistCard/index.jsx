import { MdPlayArrow } from "react-icons/md";

function PlaylistCard({title, description, imgUrl}) {
    return (
        <div className="group card flex-none relative flex flex-col w-50  p-3 items-center    text-white rounded-lg cursor-pointer hover:bg-zinc-700/20 hover:scale-102  transition-colors">
            <div className="image-wrapper max-w-full     hover:bg-zinc-800 transition-colors">
                <img src={imgUrl || "/imagem-card-default.png"} className="rounded-md" alt="Capa playlist padrão" />
            </div>
            <div className="info-musica flex flex-col justify-end">
                <button className="w-12 h-12 p-2  flex justify-center items-center content-center text-center font-semibold rounded-full absolute bg-green-400 text-black left-5/8 top-2/5  scale-0 group-hover:scale-100 hover:bg-green-800 transition-transform">
                    <MdPlayArrow size={50}/>
                </button>
                <h2 className="titulo font-medium text-lg text-balance text-zinc-200">{title}</h2>
                <p className="descricao text-balance  font-medium text-sm text-zinc-400">{description}</p>
            </div>
        </div>
    );
}

export default PlaylistCard;