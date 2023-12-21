import { Input } from "@nextui-org/react"
import AuthSlider from "@/components/auth/slider"

function AuthPage() {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <AuthSlider />
      <div className="w-full h-full gap-y-4">
        <Input
          type="email"
          variant="bordered"
          placeholder="Phone number, username or email"
        />
        <Input
          type="email"
          variant="bordered"
          placeholder="Enter your password"
        />
      </div>
    </div>
  )
}

export default AuthPage
