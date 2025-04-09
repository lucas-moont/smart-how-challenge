import UserList from '@/components/UserList'

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Directory</h1>
      <UserList />
    </main>
  )
}
