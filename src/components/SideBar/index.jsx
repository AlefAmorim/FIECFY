import SidebarItem from "../SidebarItem.jsx";

function Sidebar() {
    return (
        <aside className="row-span-1 h-full w-72 p-5 hidden md:flex md:flex-col md:gap-6">
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