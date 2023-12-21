export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex items-center justify-center max-w-60 gap-4 py-8 md:py-10">
      <div className="flex text-center justify-center">
        {children}
      </div>
    </section>
  )
}
