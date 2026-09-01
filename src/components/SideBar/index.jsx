import SidebarItem from "../SidebarItem.jsx";

const menuItems = {
  nav_up: [
    {
      id: 1,
      label: "Início",
      link: "/home",
      icon: "",
    },
    {
      id: 2,
      label: "Buscar",
      link: "/busca",
      icon: "",
    },
  ],
  nav_down: [
    {
      id: 3,
      label: "Sua biblioteca",
      link: "/minha-biblioteca",
      icon: "",
    },
  ],
};

function Sidebar() {
  return (
    <aside className="row-span-1 h-full w-72 p-5 hidden md:flex md:flex-col md:gap-6">
      <nav className="w-full flex flex-col gap-4">
        {menuItems.nav_up.map((item) => (
          <SidebarItem text={item.label} link={item.link} key={item.id} />
        ))}
      </nav>
      <div className="w-full h-px bg-zinc-800"></div>
      <nav className="w-full">
        {menuItems.nav_down.map((item) => (
          <SidebarItem text={item.label} link={item.link} key={item.id} />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;