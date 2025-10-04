import Header from '@/components/layout/Header'
import React from 'react'

const About = () => {
  return (
    <main>
    <Header/>
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      
      <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">About Us</h1>

      
      <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
        Welcome to our platform! We are passionate about creating a space where 
        people can share, connect, and grow together. Our mission is to make 
        learning and collaboration accessible to everyone, everywhere.
      </p>

      
      <section className="bg-white shadow-md rounded-2xl p-6 mb-6 max-w-4xl text-center mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
        <p className="leading-relaxed text-gray-700">
          We believe technology should bring people together. Through our platform, 
          we aim to provide simple tools that empower individuals to share ideas, 
          learn from each other, and solve real-world problems.
        </p>
      </section>

     
      <section className="bg-white shadow-md rounded-2xl p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h2>
        <p className="leading-relaxed text-gray-700">
          To become the go-to platform for collaboration and knowledge-sharing, 
          inspiring communities to innovate and build a better future together.
        </p>
      </section>
    </div>
    </main>
  )
}

export default About
