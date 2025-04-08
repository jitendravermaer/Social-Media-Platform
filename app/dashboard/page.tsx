"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Sun,
  Moon,
  MessageSquare,
  Bell,
  HelpCircle,
  Search,
  ImageIcon,
  Paperclip,
  Mic,
  MapPin,
  Briefcase,
  Twitter,
  Linkedin,
  ChevronDown,
  Heart,
  MessageCircle,
  Share2,
  Edit,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  const { theme, setTheme } = useTheme()
  const [postText, setPostText] = useState("")

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black">
      <header className="bg-white dark:bg-black py-2 px-4 flex justify-between items-center border-b dark:border-gray-800">
        <div className="text-cyan-400 text-2xl font-bold">YADEY</div>

        <div className="relative w-64">
          <Input placeholder="Search..." className="pl-8 bg-gray-100 dark:bg-gray-900 border-none" />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="flex items-center space-x-4">
          {theme === "dark" ? (
            <Sun className="h-5 w-5 cursor-pointer" onClick={() => setTheme("light")} />
          ) : (
            <Moon className="h-5 w-5 cursor-pointer" onClick={() => setTheme("dark")} />
          )}
          <MessageSquare className="h-5 w-5" />
          <Bell className="h-5 w-5" />
          <HelpCircle className="h-5 w-5" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer">
                <span>Kaushik Deka</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Kaushik Deka</DropdownMenuItem>
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Left Sidebar - Profile */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/images/dashboard-dark.png" alt="Kaushik Deka" />
                    <AvatarFallback>KD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Kaushik Deka</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">0 friends</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>India</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                  <span>Software Engineer</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Who's viewed your profile</p>
                  <p className="font-medium">16/10</p>
                </div>

                <div>
                  <p className="text-gray-500 dark:text-gray-400">Impressions of your post</p>
                  <p className="font-medium">89/68</p>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h4 className="font-medium mb-2">Social Profiles</h4>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Twitter className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Twitter</p>
                        <p className="text-xs text-gray-500">Social Network</p>
                      </div>
                    </div>
                    <Edit className="h-4 w-4 text-gray-500" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Linkedin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-xs text-gray-500">Network Platform</p>
                      </div>
                    </div>
                    <Edit className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle - Feed */}
        <div className="md:col-span-1">
          {/* Create Post */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage src="/images/dashboard-dark.png" alt="Kaushik Deka" />
                  <AvatarFallback>KD</AvatarFallback>
                </Avatar>
                <Input
                  placeholder="What's on your mind..."
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="bg-gray-100 dark:bg-gray-900"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <ImageIcon className="h-5 w-5" />
                    <span className="text-sm">Image</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-500">
                    <Paperclip className="h-5 w-5" />
                    <span className="text-sm">Clip</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-500">
                    <Paperclip className="h-5 w-5" />
                    <span className="text-sm">Attachment</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-500">
                    <Mic className="h-5 w-5" />
                    <span className="text-sm">Audio</span>
                  </div>
                </div>

                <Button className="bg-cyan-400 hover:bg-cyan-500 text-black">POST</Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage src="/images/post-view.png" alt="Steve Ralph" />
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">Steve Ralph</h4>
                  <p className="text-xs text-gray-500">New York, LA</p>
                </div>
              </div>

              <p className="mb-4">Some really long random description</p>

              <div className="rounded-md overflow-hidden mb-4">
                <Image
                  src="/images/dashboard-dark.png"
                  alt="Post image"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Heart className="h-5 w-5" />
                  <span>2</span>
                </div>

                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-5 w-5" />
                  <span>5</span>
                </div>

                <div className="ml-auto">
                  <Share2 className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar - Sponsored & Friends */}
        <div className="md:col-span-1">
          {/* Sponsored */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Sponsored</h4>
                <span className="text-xs text-gray-500">Create Ad</span>
              </div>

              <div className="rounded-md overflow-hidden mb-4">
                <Image
                  src="/images/cosmetics.png"
                  alt="Sponsored content"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-medium">MikaCosmetics</h5>
                  <span className="text-xs text-gray-500">mikacosmetics.com</span>
                </div>

                <p className="text-sm text-gray-500">
                  Your pathway to stunning and immaculate beauty and made sure your skin is exfoliating skin and shining
                  like light.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Friend List */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-4">Friend List</h4>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/post-view.png" alt="Steve Ralph" />
                      <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h5 className="font-medium">Steve Ralph</h5>
                      <p className="text-xs text-gray-500">Organizer</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/post-view.png" alt="Whatcha Doing" />
                      <AvatarFallback>WD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h5 className="font-medium">Whatcha Doing</h5>
                      <p className="text-xs text-gray-500">Educator</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
