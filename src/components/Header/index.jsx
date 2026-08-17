import ProfileBadge from "../ProfileBadge";
import LoginButton from "../LoginButton";
import { useState } from "react";

function Header() {
    const [isLogado, setIsLogado] = useState(true);
    return (
        <header className="max-h-200 sticky top-0 z-10 bg-zinc-900/90 rounded-md w-full flex items-center gap-2 justify-between p-2 flex-row md:justify-between">
                {
                    isLogado ? <ProfileBadge handleClick={()=> setIsLogado(!isLogado)}/> :
                    <div className="botoes-wrapper flex gap-3  justify-end items-end">
                        <button className="border-green-500 border-2 text-white rounded-full w-60 py-3 px-6 font-bold hover:bg-green-400 hover:scale-105 transition-transform" onClick={()=>setIsLogado(!isLogado)}>Registrar-se</button>
                    <LoginButton handleClick={()=> setIsLogado(!isLogado)}/>
                    </div>
                }
            <div className="flex gap-2">
                <button className="w-10 text-3xl  h-10 rounded-full bg-black/70 cursor-not-allowed flex justify-center items-center  text-zinc-400">{'<'}</button>
                <button className="w-10 text-3xl  h-10 rounded-full bg-black/70 cursor-not-allowed flex justify-center items-center text-zinc-400">{'>'}</button>
            </div>
        </header>
    )
}

export default Header;