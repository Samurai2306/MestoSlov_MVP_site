import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Оплата экскурсии | МестоСлов',
  description: 'Оплатите экскурсию через СБП',
}

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

