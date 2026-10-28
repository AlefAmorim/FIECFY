import { NavLink } from "react-router"

function SidebarItem({ text, icon, link }) {
  return (
    <NavLink to={link || "#"}
    >
      {({isActive}) => (
      <div className={`p-2 rounded-xl ${isActive ?"text-white":"text-zinc-500"} font-semibold   flex gap-2 cursor-pointer`}>
        <div className="icone  w-6 h-6 rounded-sm flex items-center justify-center">
          {icon}
        </div>
        {text}
      </div>
      )}
    </NavLink>
  );
}



export default SidebarItem;
