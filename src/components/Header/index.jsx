import ProfileBadge from "../ProfileBadge";
import LoginButton from "../LoginButton";
import { useState } from "react";
import Badge from "../Badge";
import { MdArrowForwardIos, MdArrowBackIosNew, MdNotifications  } from "react-icons/md";

function Header() {
  const [isLogado, setIsLogado] = useState(true);
  const [popUpAberto, setPopUpAberto] = useState(false);
  const [notificacoes, setNotificacoes] = useState(3);

  const limpar = () => {
    setNotificacoes(0)
    setPopUpAberto(!popUpAberto)
  }

  return (
    <header className="max-h-200 sticky top-0 z-10 bg-zinc-900/90 rounded-md w-full flex items-center gap-2 justify-between p-2 flex-row md:justify-between">
      {isLogado ? (
        <ProfileBadge handleClick={() => setIsLogado(!isLogado)}>
        </ProfileBadge>
      ) : (
        <div className="botoes-wrapper flex gap-3  justify-end items-end">
          <button
            className="border-green-500 border-2 text-white rounded-full w-60 py-3 px-6 font-bold hover:bg-green-400 hover:scale-105 transition-transform"
            onClick={() => setIsLogado(!isLogado)}
          >
            Registrar-se
          </button>
          <LoginButton handleClick={() => setIsLogado(!isLogado)} />
        </div>
      )}
     <div className="flex gap-3">
      <button className="relative hover:scale-104  cursor-pointer hover:bg-zinc-500/60 rounded-full p-1" onClick={()=> setPopUpAberto(!popUpAberto)}>
        <MdNotifications size={40}/>
          {notificacoes > 0 && <Badge count={notificacoes} /> }
      </button>

      <div className="flex gap-2">
        <button className="w-10 text-3xl  h-10 rounded-full bg-black/70 cursor-not-allowed flex justify-center items-center  text-zinc-400">
          <MdArrowBackIosNew size={20} />
        </button>
        <button className="w-10 text-3xl  h-10 rounded-full bg-black/70 cursor-not-allowed flex justify-center items-center text-zinc-400 ">
          <MdArrowForwardIos size={20} />
        </button>
      </div>

     </div>
     {
         popUpAberto && (
             <div className="absolute right-20 top-15 bg-white text-zinc-900 font-semibold p-4 rounded-lg animate-fade-in transition-transform">
                 <button className="bg-green-500 text-white font-semibold cursor-pointer hover:bg-green-600 p-2 rounded-sm" onClick={() => limpar()}>Limpar</button>
             </div>
         ) 
     }
    </header>
  );
}

export default Header;
