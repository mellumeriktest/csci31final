import { AcademicCapIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Products',
    href: '/products',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between gap-6 m-12 items-center">
      <AcademicCapIcon className="h-12 w-12 text-emerald-100" />
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-emerald-600 text-emerald-100 shadow-md rounded-md text-lg transition-all hover:bg-emerald-500 active:bg-emerald-400"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
