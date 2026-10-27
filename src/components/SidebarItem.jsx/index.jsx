import { NavLink } from "react-router"

function SidebarItem({ text, icon, link }) {
  return (
    <NavLink to={link || "#"}
      className="p-2 rounded-xl text-zinc-300 font-semibold hover:bg-zinc-600/40 hover:text-white hover:transition-colors  flex gap-2 cursor-pointer"
    >
      <div className="icone  w-6 h-6 rounded-sm flex items-center justify-center">
        {icon}
      </div>
      {text}
    </NavLink>
  );
}



export default SidebarItem;
