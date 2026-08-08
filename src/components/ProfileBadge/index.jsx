import Avatar from "../Avatar";
function ProfileBadge() {
    return (
        <div className="profile-container flex items-center gap-2">
            <div className="image-wrapper flex max-w-15 rounded-full  border-green-700 border-3 hover:border-green-400 transition-colors">
                {/* <img src="/public/imagem-perfil-default.png" className="max-w-20 rounded-full" alt="Imagem de perfil padrão" />
                 */}
                 <Avatar/>
            </div>
            <p className="text-amber-50 place-self-end"><strong>Meu perfil</strong></p>
        </div>
    )
}


export default ProfileBadge;