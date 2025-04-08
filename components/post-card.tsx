import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import Image from "next/image"

interface PostCardProps {
  user: {
    name: string
    location: string
    avatar: string
  }
  content: {
    text: string
    image?: string
  }
  engagement: {
    likes: number
    comments: number
  }
}

export default function PostCard({ user, content, engagement }: PostCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{user.name}</h4>
            <p className="text-xs text-gray-500">{user.location}</p>
          </div>
        </div>

        <p className="mb-4">{content.text}</p>

        {content.image && (
          <div className="rounded-md overflow-hidden mb-4">
            <Image
              src={content.image || "/placeholder.svg"}
              alt="Post image"
              width={500}
              height={300}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Heart className="h-5 w-5" />
            <span>{engagement.likes}</span>
          </div>

          <div className="flex items-center space-x-1">
            <MessageCircle className="h-5 w-5" />
            <span>{engagement.comments}</span>
          </div>

          <div className="ml-auto">
            <Share2 className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
