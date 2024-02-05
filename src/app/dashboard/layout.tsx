import DashboardNav from "./components/DashboardNav"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="section-div flex items-start gap-8">
      <div className="w-[19%]">
        <DashboardNav />
      </div>
      <div className="w-[80%]">
        {children}
      </div>
    </section>
  )
}