import React from 'react'
import { GetStaticProps } from 'next'
import Header from '@/components/layout/Header'


const HomePage = () => {

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
          This is the homepage of our platform. Use the navigation above to explore 
          the About page and the Posts page.
        </p>
      </div>
    </main>
  )
}

export default HomePage
