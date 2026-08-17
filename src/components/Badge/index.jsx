function Badge({ count }) {
  return (
    <div className="w-8 h-8 rounded-full bg-red-600 text-center absolute p-1 top-0 left-0">
        <span className="font-semibold text-amber-50">{count}</span>
    </div>
  );
}

export default Badge;
