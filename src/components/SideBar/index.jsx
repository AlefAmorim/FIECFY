import SidebarItem from "../SidebarItem.jsx";

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
                    <SidebarItem text="Buscar"/>
                    <SidebarItem text="Inicío"/>
            </nav>
            <div className="w-full h-px bg-zinc-800"></div>
            <nav className="w-full">
                    <SidebarItem text="Sua biblioteca"/>
                
            </nav>
        </aside>
    );
}

export default Sidebar;