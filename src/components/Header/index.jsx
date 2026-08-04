import ProfileBadge from "../ProfileBadge";

function Header() {
    return (
        <header className="max-h-200  w-full flex items-center justify-between p-2">
            <ProfileBadge/>
            <div className="botoes-wrapper flex gap-3">
                <button className="outline-emerald-700 text-emerald-700 outline-offset-0 outline-2 p-3 rounded-sm">Inscrever-se</button>
                <button className="outline-emerald-900 outline-offset-0  outline-2 p-3 rounded-sm  bg-emerald-700 text-white font-semibold">Entrar</button>
            </div>
        </header>
    )
}

export default Header;