import React, {useState} from 'react'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import { CardProps } from '@/interfaces'
import Header from '@/components/layout/Header'


const HomePage = () => {
  const [posts, setPosts] = useState<CardProps[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPost = (newPost: CardProps) => {
    setPosts(prevPost => [...prevPost, newPost])
  }

  return (
    <main>
    <Header/>
    <div className="p-8">
      <h1 className='text-3xl font-bold mb-6'>Posts</h1>
      <button
      onClick={()=> setIsModalOpen(true)}
      className="mb-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer"
      >Add new post</button>

      <div className='grid gap-4'>
       {posts.map((post,index) => {
        return <Card key={index} title={post.title} content={post.content}/>
       })}
      </div>

      {isModalOpen && (
        <PostModal onClose={()=> setIsModalOpen(false)} onSubmit={handleAddPost}/>
      )}

    </div>
    </main>
  )
}

export default HomePage