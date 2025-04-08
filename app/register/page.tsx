import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Register() {
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm">
                    Location
                  </label>
                  <Input id="location" placeholder="Location" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="occupation" className="text-sm">
                    Occupation
                  </label>
                  <Input id="occupation" placeholder="Occupation" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Add Picture Here</label>
                  <div className="border border-dashed border-cyan-400 rounded-md p-4 flex items-center justify-center relative">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <span>Add Picture Here</span>
                    </div>
                  </div>
                </div>

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

                <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black">REGISTER</Button>

                <div className="text-center mt-4">
                  <Link href="/" className="text-cyan-400 hover:underline text-sm">
                    Already have an account? Login here.
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
