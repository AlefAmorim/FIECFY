function SidebarItem({ text, icon, link }) {
  return (
    <a
      href={link || "#"}
      className="p-2 rounded-xl text-zinc-300 font-semibold hover:bg-zinc-600/40 hover:text-white hover:transition-colors  flex gap-2 cursor-pointer"
    >
      <div className="icone bg-taupe-100 w-6 h-6 rounded-sm"></div>
      {text}
    </a>
  );
}



export default SidebarItem;
