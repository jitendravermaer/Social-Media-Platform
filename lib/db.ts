import clientPromise from "./mongodb"

// Define your database models/collections
export interface User {
  _id?: string
  firstName: string
  lastName: string
  email: string
  password: string // Note: In a real app, this should be hashed
  location: string
  occupation: string
  profilePicture?: string
  friends?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Post {
  _id?: string
  userId: string
  text: string
  image?: string
  likes: string[]
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
}

export interface Comment {
  _id?: string
  userId: string
  text: string
  createdAt: Date
}

// Database helper functions
export async function getUsers() {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB).collection("users").find({}).toArray()
}

export async function getUserById(id: string) {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB).collection("users").findOne({ _id: id })
}

export async function getUserByEmail(email: string) {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB).collection("users").findOne({ email })
}

export async function createUser(userData: Omit<User, "_id" | "createdAt" | "updatedAt">) {
  const client = await clientPromise
  const now = new Date()
  const newUser = {
    ...userData,
    friends: [],
    createdAt: now,
    updatedAt: now,
  }

  const result = await client.db(process.env.MONGODB_DB).collection("users").insertOne(newUser)
  return { ...newUser, _id: result.insertedId }
}

export async function getPosts() {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB).collection("posts").find({}).sort({ createdAt: -1 }).toArray()
}

export async function getPostById(id: string) {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB).collection("posts").findOne({ _id: id })
}

export async function createPost(postData: Omit<Post, "_id" | "likes" | "comments" | "createdAt" | "updatedAt">) {
  const client = await clientPromise
  const now = new Date()
  const newPost = {
    ...postData,
    likes: [],
    comments: [],
    createdAt: now,
    updatedAt: now,
  }

  const result = await client.db(process.env.MONGODB_DB).collection("posts").insertOne(newPost)
  return { ...newPost, _id: result.insertedId }
}

export async function likePost(postId: string, userId: string) {
  const client = await clientPromise
  return client
    .db(process.env.MONGODB_DB)
    .collection("posts")
    .updateOne(
      { _id: postId },
      {
        $addToSet: { likes: userId },
        $set: { updatedAt: new Date() },
      },
    )
}

export async function unlikePost(postId: string, userId: string) {
  const client = await clientPromise
  return client
    .db(process.env.MONGODB_DB)
    .collection("posts")
    .updateOne(
      { _id: postId },
      {
        $pull: { likes: userId },
        $set: { updatedAt: new Date() },
      },
    )
}

export async function addComment(postId: string, comment: Omit<Comment, "_id" | "createdAt">) {
  const client = await clientPromise
  const newComment = {
    ...comment,
    _id: new Date().getTime().toString(),
    createdAt: new Date(),
  }

  return client
    .db(process.env.MONGODB_DB)
    .collection("posts")
    .updateOne(
      { _id: postId },
      {
        $push: { comments: newComment },
        $set: { updatedAt: new Date() },
      },
    )
}
