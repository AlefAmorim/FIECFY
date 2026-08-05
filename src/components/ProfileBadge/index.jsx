function ProfileBadge() {
    return (
        <div className="profile-container flex items-center gap-7">
            <div className="image-wrapper flex max-w-15 rounded-full">
                <img src="/public/imagem-perfil-default.png" className="max-w-20 rounded-full" alt="Imagem de perfil padrão" />
            </div>
            <p className="text-amber-50 place-self-end"><strong>Meu perfil</strong></p>
        </div>
    )
}


export default ProfileBadge;