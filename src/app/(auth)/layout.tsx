import { Logo } from "@/components/ui/logo"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url(/images/bg-grid-pattern.png)',
          backgroundSize: '200px'
        }}
      />
      <div className="relative w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  )
}
