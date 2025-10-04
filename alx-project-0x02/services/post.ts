import { PostProps } from "@/interfaces"

export async function getPostsData(): Promise<PostProps[]> {
  const url = "https://jsonplaceholder.typicode.com/posts"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result: { id: number; userId: number; title: string; body: string }[] =
      await response.json()

    
    const data: PostProps[] = result.map((post) => ({
      id: post.id,
      userId: post.userId,
      title: post.title,
      content: post.body, 
    }))

    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
