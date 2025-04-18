"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Login failed")
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token)

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

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

              {error && <p className="text-red-500 mb-4">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-black" disabled={isLoading}>
                  {isLoading ? "LOGGING IN..." : "LOGIN"}
                </Button>

                <div className="text-center mt-4">
                  <Link href="/register" className="text-cyan-400 hover:underline text-sm">
                    Don't have an account? Sign Up here.
                  </Link>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
