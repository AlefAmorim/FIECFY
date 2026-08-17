import Avatar from "../Avatar";

function ProfileBadge({handleClick}) {
    return (
        <div className="profile-container flex items-center gap-2" onClick={handleClick}>
            <div className="image-wrapper flex max-w-15 rounded-full  border-green-700 border-3 hover:border-green-400 transition-colors">
                <Avatar/>
            </div>
            <p className="text-amber-50 place-self-end"><strong>Meu perfil</strong></p>
        </div>
    )
}


export default ProfileBadge;