function Sidebar() {
    return (
        <aside className="row-span-1 h-full  p-5 hidden md:flex">
            <nav className="w-full">
                <ul className="flex flex-col gap-3 ">
                    <li className="p-2 rounded-xl hover:bg-zinc-600/40 hover:font-semibold hover:transition-colors cursor-pointer">Inicío</li>
                    <li className="p-2 rounded-xl hover:font-semibold hover:bg-zinc-600/40 hover:transition-colors  cursor-pointer">Buscar</li>
                    <li className="p-2 rounded-xl w-full hover:font-semibold hover:bg-zinc-600/40 hover:transition-colors  cursor-pointer">Biblioteca</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;