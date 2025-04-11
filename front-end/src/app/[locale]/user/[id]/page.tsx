'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getSelectedUser } from 'lib/profile/selectedUser'
import UserProfileDetails from 'components/UserProfileDetails'
import { useParams } from 'next/navigation'
import { useTranslation } from 'lib/hooks/useTranslation'

const UserProfilePage = () => {
  const [user, setUser] = useState<User | null>(null)
  const params = useParams()
  const { t } = useTranslation()
  const locale = Array.isArray(params?.locale)
    ? params.locale[0]
    : params?.locale || 'en'

  useEffect(() => {
    const selected = getSelectedUser()
    const routeId = params?.id

    if (selected && selected.id === routeId) {
      setUser(selected)
    } else {
      setUser(null)
    }
  }, [params?.id])

  if (!user) {
    return (
      <main className="p-6" aria-labelledby="user-not-found-heading">
        <h1 id="user-not-found-heading" className="text-xl font-semibold mb-2">
          {t('userNotFound')}
        </h1>
        <p role="alert" className="text-gray-600 mb-4">
          {t('userNotFound')}
        </p>
        <nav aria-label={t('backToUsers')}>
          <Link
            href={`/${locale}`}
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            ← {t('backToUsers')}
          </Link>
        </nav>
      </main>
    )
  }

  return (
    <main className="p-6" aria-labelledby="profile-heading">
      <nav aria-label={t('backToUsers')}>
        <Link
          href={`/${locale}`}
          className="text-blue-600 hover:underline text-sm mb-4 inline-block"
        >
          ← {t('backToUsers')}
        </Link>
      </nav>
      <h1 id="profile-heading" className="sr-only">
        {t('userProfileDetails')}
      </h1>
      <UserProfileDetails user={user} />
    </main>
  )
}

export default UserProfilePage
