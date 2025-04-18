import { type NextRequest, NextResponse } from "next/server"
import { createPost, getPosts } from "@/lib/db"

export async function GET() {
  try {
    const posts = await getPosts()
    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Error fetching posts:", error)
    return NextResponse.json({ error: "An error occurred while fetching posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, text, image } = body

    if (!userId || !text) {
      return NextResponse.json({ error: "User ID and text are required" }, { status: 400 })
    }

    const post = await createPost({
      userId,
      text,
      image,
    })

    return NextResponse.json({ post, message: "Post created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error creating post:", error)
    return NextResponse.json({ error: "An error occurred while creating the post" }, { status: 500 })
  }
}
