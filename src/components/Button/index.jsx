function Button({ children, className, id, tipo = "submit", title }) {
  return (
    <button
      type={tipo}
      id={id}
      className={
        className ||
        "bg-green-500 text-white rounded-full w-30 py-3 px-8 font-bold hover:bg-green-400 hover:scale-105 transition-transform"
      }
      title={title}
    >
      {" "}
      {children}
    </button>
  );
}

export default Button;
