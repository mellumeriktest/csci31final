export default function Input({ type = 'text', placeholder = 'enter text here...', name, id }) {
  return <input type={type} placeholder={placeholder} name={name} id={id} className="p-2 rounded-md" />
}
