export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className="bg-emerald-600 rounded-md py-2 px-4 shadow-md text-emerald-100">
      {children}
    </button>
  )
}
