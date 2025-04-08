import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black py-2 px-4 flex justify-center">
        <div className="text-cyan-400 text-2xl font-bold">YADEY</div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 bg-gray-100 dark:bg-black">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="mb-6">
              <h1 className="text-xl font-semibold mb-6">Welcome to Yadey, the Social Media for !</h1>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Email" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>

                <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black">LOGIN</Button>

                <div className="text-center mt-4">
                  <Link href="/register" className="text-cyan-400 hover:underline text-sm">
                    Don't have an account? Sign Up here.
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
