export const metadata = {
  title: 'Bedrock AI Assistant',
  description: 'Amplify + Bedrock Agent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
