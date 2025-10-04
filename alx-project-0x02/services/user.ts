import { UserProps } from "@/interfaces"

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

export async function getUsers(): Promise<UserProps[]> {
  try {
    const response = await fetch(USERS_URL)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch users:", error)
    return []
  }
}
