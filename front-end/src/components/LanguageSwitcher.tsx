'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

const locales = [
  { code: 'pt', label: 'Português', icon: '/icons/brazil.svg' },
  { code: 'en', label: 'English', icon: '/icons/usa.svg' },
  { code: 'es', label: 'Español', icon: '/icons/spain.svg' },
]

const LanguageSwitcher: FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <nav
      className="flex gap-4 mb-6"
      aria-label="Language selector"
    >
      {locales.map(({ code, label, icon }) => (
        <button
          key={code}
          onClick={() => changeLocale(code)}
          className="flex items-center gap-2 px-3 py-1 border rounded hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
          aria-label={`Switch language to ${label}`}
        >
          <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </nav>
  )
}

export default LanguageSwitcher
