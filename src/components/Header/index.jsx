import ProfileBadge from "../ProfileBadge";
import LoginButton from "../LoginButton";

function Header() {
    return (
        <header className="max-h-200  w-full flex items-start gap-2 justify-between p-2 flex-col md:flex-row md:justify-between">
            <ProfileBadge/>
            <div className="botoes-wrapper flex gap-3  justify-end items-end">
                <button className="border-green-500 border-2 text-white rounded-full w-60 py-3 px-6 font-bold hover:bg-green-400 hover:scale-105 transition-transform">Registrar-se</button>
                {/* <button className="outline-emerald-900 outline-offset-0  outline-2 p-3 rounded-sm  bg-emerald-700 text-white font-semibold">Entrar</button> */}
                <LoginButton/>
            </div>
        </header>
    )
}

export default Header;