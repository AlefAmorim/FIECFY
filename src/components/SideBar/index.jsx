function Sidebar() {
    return (
        <aside className="row-span-1 h-full w-72 p-5 hidden md:flex md:flex-col md:gap-6">
            {/* <nav className="w-full">
                <ul className="flex flex-col gap-4 ">
                    <li className="p-2 rounded-xl hover:bg-zinc-600/40 hover:font-semibold hover:transition-colors cursor-pointer">Inicío</li>
                    <li className="p-2 rounded-xl hover:font-semibold hover:bg-zinc-600/40 hover:transition-colors  cursor-pointer">Buscar</li>
                    <li className="p-2 rounded-xl w-full hover:font-semibold hover:bg-zinc-600/40 hover:transition-colors  cursor-pointer">Biblioteca</li>
                </ul>
            </nav> */}
            <nav className="w-full flex flex-col gap-4">
                    <a href="#" className="p-2 rounded-xl text-zinc-300 font-semibold hover:bg-zinc-600/40 hover:text-white hover:transition-colors  flex gap-2 cursor-pointer">
                        <div className="icone bg-taupe-100 w-6 h-6 rounded-sm"></div>
                        Buscar
                    </a>
                    <a href="#" className="p-2 rounded-xl text-zinc-300 hover:bg-zinc-600/40  hover:text-white font-semibold flex gap-2 hover:transition-colors cursor-pointer">
                        <div className="icone bg-taupe-100 w-6 h-6 rounded-sm"></div>
                        Inicío
                    </a>
                    {/* <a href="#" className="p-2 rounded-xl w-full hover:font-semibold hover:bg-zinc-600/40 hover:transition-colors  cursor-pointer ">
                        Sua Biblioteca
                    </a> */}
            </nav>
            <div className="w-full h-px bg-zinc-800"></div>
            <nav className="w-full">
                <a href="#" className="p-2 rounded-xl text-zinc-300 w-full font-semibold hover:bg-zinc-600/40 hover:text-white hover:transition-colors flex gap-2 cursor-pointer ">
                    <div className="icone bg-taupe-100 w-6 h-6 rounded-sm"></div>
                    Sua Biblioteca
                </a>
            </nav>
        </aside>
    );
}

export default Sidebar;