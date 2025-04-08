"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageIcon, Paperclip, Mic, X } from "lucide-react"

export default function CreatePost() {
  const [postText, setPostText] = useState("")
  const [attachedImage, setAttachedImage] = useState<string | null>(null)

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar>
            <AvatarImage src="/images/dashboard-dark.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <textarea
            placeholder="Hi folks!! How is everyone doing today. Starting the day wi"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 bg-transparent border-none resize-none focus:outline-none"
            rows={2}
          />
        </div>

        {attachedImage && (
          <div className="mb-4 relative border border-dashed border-cyan-400 rounded-md p-2">
            <button
              className="absolute top-2 right-2 bg-gray-800 rounded-full p-1"
              onClick={() => setAttachedImage(null)}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-between">
              <span className="text-sm">post1.jpeg</span>
              <button className="text-gray-500">
                <Paperclip className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center space-x-1 text-gray-500"
              onClick={() => setAttachedImage("post1.jpeg")}
            >
              <ImageIcon className="h-5 w-5" />
              <span className="text-sm">Image</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-500">
              <Paperclip className="h-5 w-5" />
              <span className="text-sm">Clip</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-500">
              <Paperclip className="h-5 w-5" />
              <span className="text-sm">Attachment</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-500">
              <Mic className="h-5 w-5" />
              <span className="text-sm">Audio</span>
            </button>
          </div>

          <Button className="bg-cyan-400 hover:bg-cyan-500 text-black">POST</Button>
        </div>
      </CardContent>
    </Card>
  )
}
