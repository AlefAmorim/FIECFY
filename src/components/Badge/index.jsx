function Badge({ count }) {
  return (
    <div className="w-6 h-6 rounded-full bg-red-500 text-white text-center absolute  -top-1  flex justify-center items-center hover:scale-103">
        <span className="font-semibold text-white">{count}</span>
    </div>
  );
}

export default Badge;
