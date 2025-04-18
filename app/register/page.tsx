"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Register() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    occupation: "",
    email: "",
    password: "",
  })
  const [profilePicture, setProfilePicture] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePicture(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Handle file upload if there's a profile picture
      const profilePictureUrl = ""
      if (profilePicture) {
        const formData = new FormData()
        formData.append("file", profilePicture)
        // In a real app, you would upload this to a storage service
        // and get back a URL
        // profilePictureUrl = await uploadFile(formData)
      }

      // Register user
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          profilePicture: profilePictureUrl,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Registration failed")
      }

      // Redirect to login page on success
      router.push("/")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during registration")
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm">
                    Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="occupation" className="text-sm">
                    Occupation
                  </label>
                  <Input
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="Occupation"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Add Picture Here</label>
                  <div className="border border-dashed border-cyan-400 rounded-md p-4 flex items-center justify-center relative">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <span>{profilePicture ? profilePicture.name : "Add Picture Here"}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-black" disabled={isLoading}>
                  {isLoading ? "REGISTERING..." : "REGISTER"}
                </Button>

                <div className="text-center mt-4">
                  <Link href="/" className="text-cyan-400 hover:underline text-sm">
                    Already have an account? Login here.
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
