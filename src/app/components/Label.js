export default function Label({ label, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="text-emerald-100 text-lg">
      {label}
    </label>
  )
}
