import '../styles/globals.css'


export const metadata = {
  title: 'Random User App',
  description: 'Desafio Frontend'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
