import React, { useState } from "react"
import { GetStaticProps } from "next"
import Header from "@/components/layout/Header"
import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import { PostProps } from "@/interfaces"
import { getPostsData } from "@/services/post"
import PostCard from "@/components/common/PostCard"

interface PostsPageProps {
  posts: PostProps[]
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const posts = await getPostsData()
  return {
    props: {
      posts
    },
    revalidate: 60, 
  }
}


const PostPage = ({ posts }: PostsPageProps) => {
  
  const [postList, setPostList] = useState<PostProps[]>(posts)
  const [isModalOpen, setIsModalOpen] = useState(false)

  
  const handleAddPost = (newPost: PostProps) => {
    setPostList((prev) => [...prev, newPost])
  }

  return (
    <main>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer"
        >
          Add new post
        </button>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 ">
          {postList.map((post) => (
            <PostCard  key={post.id} id={post.id} userId={post.userId} title={post.title} content={post.content} />
          ))}
        </div>

        {isModalOpen && (
          <PostModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPost}
          />
        )}
      </div>
    </main>
  )
}

export default PostPage
