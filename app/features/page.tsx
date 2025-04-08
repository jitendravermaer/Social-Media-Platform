import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black">
      <header className="bg-black py-2 px-4 flex justify-center">
        <div className="text-cyan-400 text-2xl font-bold">YADEY</div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">YADEY Platform Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Registration */}
          <Card>
            <CardHeader>
              <CardTitle>User Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/registration.png"
                  alt="Registration Form"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <p>
                Create your account with personal details including name, location, occupation, and profile picture.
              </p>
            </CardContent>
          </Card>

          {/* User Authentication */}
          <Card>
            <CardHeader>
              <CardTitle>User Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image src="/images/login.png" alt="Login Form" width={600} height={400} className="rounded-md" />
              </div>
              <p>Secure login system with email and password authentication.</p>
            </CardContent>
          </Card>

          {/* Social Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Social Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/dashboard-dark.png"
                  alt="Social Feed"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
                -md" />
              </div>
              <p>
                Browse through posts from friends and connections in a responsive, modern interface with dark and light
                theme support.
              </p>
            </CardContent>
          </Card>

          {/* Post Creation */}
          <Card>
            <CardHeader>
              <CardTitle>Post Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/create-post.png"
                  alt="Create Post"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <p>Share your thoughts, images, clips, attachments, and audio recordings with your network.</p>
            </CardContent>
          </Card>

          {/* User Profiles */}
          <Card>
            <CardHeader>
              <CardTitle>User Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/dashboard-friends.png"
                  alt="User Profile"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <p>Personalized profiles showing your location, occupation, profile views, and post impressions.</p>
            </CardContent>
          </Card>

          {/* Social Connections */}
          <Card>
            <CardHeader>
              <CardTitle>Social Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/dashboard-friends.png"
                  alt="Friend List"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <p>Connect with friends and view your friend list with their occupations and profiles.</p>
            </CardContent>
          </Card>

          {/* Post Engagement */}
          <Card>
            <CardHeader>
              <CardTitle>Post Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/post-view.png"
                  alt="Post Engagement"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <p>Engage with posts through likes, comments, and sharing functionality.</p>
            </CardContent>
          </Card>

          {/* Theme Switching */}
          <Card>
            <CardHeader>
              <CardTitle>Theme Switching</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/dashboard-light.png"
                  alt="Light Theme"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <p>Switch between dark and light themes for comfortable viewing in any environment.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
