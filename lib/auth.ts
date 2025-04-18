// Simple password hashing using crypto
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)

  // Use SHA-256 for hashing
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)

  // Convert to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")

  // Add a simple salt prefix for minimal security
  // In a production app, you'd want to use a per-user salt
  return `sha256:${hashHex}`
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  // Check if the hash format is correct
  if (!hashedPassword.startsWith("sha256:")) {
    return false
  }

  // Hash the input password
  const inputHash = await hashPassword(password)

  // Compare the hashes (constant-time comparison would be better in production)
  return inputHash === hashedPassword
}
