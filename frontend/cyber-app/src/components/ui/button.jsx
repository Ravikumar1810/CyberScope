export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full py-3 bg-emerald-500 text-white rounded-lg font-medium shadow hover:bg-emerald-600 transition"
    >
      {children}
    </button>
  );
}
