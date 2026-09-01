function CompactCard({title, imgUrl}) {
  return (
    <div className="flex h-20 gap-2   bg-zinc-400/30 hover:bg-zinc-500/30 hover:scale-105 rounded-md basis-80 grow-0 shrink transition-colors">
      <div className="w-3/10 ">
        <img src={imgUrl || "/imagem-card-default.png"} alt="image do card da musica" className="h-full w-full object-cover  rounded-md"/>
      </div>
      <div className="w-7/10 content-center">
        <span className="font-semibold text-lg ">{title}</span>
      </div>
    </div>
  )
}

export default CompactCard;