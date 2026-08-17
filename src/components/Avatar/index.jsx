function Avatar({imgUrl}) {
  return (
    <img src={imgUrl || "/public/imagem-perfil-default.png"} alt="Imagem de perfil padrão" className="w-12 h-12 rounded-full object-cover" />
  )
}

export default Avatar;